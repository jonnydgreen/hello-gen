var NAMED_TAG = "named";
var NAME_TAG = "name";
var UNMANAGED_TAG = "unmanaged";
var OPTIONAL_TAG = "optional";
var INJECT_TAG = "inject";
var MULTI_INJECT_TAG = "multi_inject";
var TAGGED = "inversify:tagged";
var TAGGED_PROP = "inversify:tagged_props";
var PARAM_TYPES = "inversify:paramtypes";
var DESIGN_PARAM_TYPES = "design:paramtypes";
var POST_CONSTRUCT = "post_construct";
var PRE_DESTROY = "pre_destroy";
function getNonCustomTagKeys() {
  return [
    INJECT_TAG,
    MULTI_INJECT_TAG,
    NAME_TAG,
    UNMANAGED_TAG,
    NAMED_TAG,
    OPTIONAL_TAG
  ];
}
var NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys();
var keys = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  NAMED_TAG,
  NAME_TAG,
  UNMANAGED_TAG,
  OPTIONAL_TAG,
  INJECT_TAG,
  MULTI_INJECT_TAG,
  TAGGED,
  TAGGED_PROP,
  PARAM_TYPES,
  DESIGN_PARAM_TYPES,
  POST_CONSTRUCT,
  PRE_DESTROY,
  NON_CUSTOM_TAG_KEYS
});
var BindingScopeEnum = {
  Request: "Request",
  Singleton: "Singleton",
  Transient: "Transient"
};
var BindingTypeEnum = {
  ConstantValue: "ConstantValue",
  Constructor: "Constructor",
  DynamicValue: "DynamicValue",
  Factory: "Factory",
  Function: "Function",
  Instance: "Instance",
  Invalid: "Invalid",
  Provider: "Provider"
};
var TargetTypeEnum = {
  ClassProperty: "ClassProperty",
  ConstructorArgument: "ConstructorArgument",
  Variable: "Variable"
};
var idCounter = 0;
function id() {
  return idCounter++;
}
var Binding = function() {
  function Binding2(serviceIdentifier, scope) {
    this.id = id();
    this.activated = false;
    this.serviceIdentifier = serviceIdentifier;
    this.scope = scope;
    this.type = BindingTypeEnum.Invalid;
    this.constraint = function(request) {
      return true;
    };
    this.implementationType = null;
    this.cache = null;
    this.factory = null;
    this.provider = null;
    this.onActivation = null;
    this.onDeactivation = null;
    this.dynamicValue = null;
  }
  Binding2.prototype.clone = function() {
    var clone = new Binding2(this.serviceIdentifier, this.scope);
    clone.activated = clone.scope === BindingScopeEnum.Singleton ? this.activated : false;
    clone.implementationType = this.implementationType;
    clone.dynamicValue = this.dynamicValue;
    clone.scope = this.scope;
    clone.type = this.type;
    clone.factory = this.factory;
    clone.provider = this.provider;
    clone.constraint = this.constraint;
    clone.onActivation = this.onActivation;
    clone.onDeactivation = this.onDeactivation;
    clone.cache = this.cache;
    return clone;
  };
  return Binding2;
}();
var DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
var DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
var NULL_ARGUMENT = "NULL argument";
var KEY_NOT_FOUND = "Key Not Found";
var AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
var CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
var NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
var MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
var MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
var UNDEFINED_INJECT_ANNOTATION = function(name) {
  return "@inject called with undefined this could mean that the class " + name + " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation.";
};
var CIRCULAR_DEPENDENCY = "Circular dependency found:";
var INVALID_BINDING_TYPE = "Invalid binding type:";
var NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
var INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
var INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
var LAZY_IN_SYNC = function(key) {
  return "You are attempting to construct '" + key + "' in a synchronous way\n but it has asynchronous dependencies.";
};
var INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier";
var INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.";
var ARGUMENTS_LENGTH_MISMATCH = function() {
  var values = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }
  return "The number of constructor arguments in the derived class " + (values[0] + " must be >= than the number of constructor arguments of its base class.");
};
var CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.";
var CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must be a string ('singleton' or 'transient').";
var CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean";
var CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean";
var MULTIPLE_PRE_DESTROY_METHODS = "Cannot apply @preDestroy decorator multiple times in the same class";
var MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
var ASYNC_UNBIND_REQUIRED = "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)";
var POST_CONSTRUCT_ERROR = function(clazz, errorMessage) {
  return "@postConstruct error in class " + clazz + ": " + errorMessage;
};
var PRE_DESTROY_ERROR = function(clazz, errorMessage) {
  return "@preDestroy error in class " + clazz + ": " + errorMessage;
};
var ON_DEACTIVATION_ERROR = function(clazz, errorMessage) {
  return "onDeactivation() error in class " + clazz + ": " + errorMessage;
};
var CIRCULAR_DEPENDENCY_IN_FACTORY = function(factoryType, serviceIdentifier) {
  return "It looks like there is a circular dependency in one of the '" + factoryType + "' bindings. Please investigate bindings with" + ("service identifier '" + serviceIdentifier + "'.");
};
var STACK_OVERFLOW = "Maximum call stack size exceeded";
var MetadataReader = function() {
  function MetadataReader2() {
  }
  MetadataReader2.prototype.getConstructorMetadata = function(constructorFunc) {
    var compilerGeneratedMetadata = Reflect.getMetadata(PARAM_TYPES, constructorFunc);
    var userGeneratedMetadata = Reflect.getMetadata(TAGGED, constructorFunc);
    return {
      compilerGeneratedMetadata,
      userGeneratedMetadata: userGeneratedMetadata || {}
    };
  };
  MetadataReader2.prototype.getPropertiesMetadata = function(constructorFunc) {
    var userGeneratedMetadata = Reflect.getMetadata(TAGGED_PROP, constructorFunc) || [];
    return userGeneratedMetadata;
  };
  return MetadataReader2;
}();
var BindingCount = {
  MultipleBindingsAvailable: 2,
  NoBindingsAvailable: 0,
  OnlyOneBindingAvailable: 1
};
function isStackOverflowExeption(error) {
  return error instanceof RangeError || error.message === STACK_OVERFLOW;
}
var tryAndThrowErrorIfStackOverflow = function(fn, errorCallback) {
  try {
    return fn();
  } catch (error) {
    if (isStackOverflowExeption(error)) {
      error = errorCallback();
    }
    throw error;
  }
};
function getServiceIdentifierAsString(serviceIdentifier) {
  if (typeof serviceIdentifier === "function") {
    var _serviceIdentifier = serviceIdentifier;
    return _serviceIdentifier.name;
  } else if (typeof serviceIdentifier === "symbol") {
    return serviceIdentifier.toString();
  } else {
    var _serviceIdentifier = serviceIdentifier;
    return _serviceIdentifier;
  }
}
function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings2) {
  var registeredBindingsList = "";
  var registeredBindings = getBindings2(container, serviceIdentifier);
  if (registeredBindings.length !== 0) {
    registeredBindingsList = "\nRegistered bindings:";
    registeredBindings.forEach(function(binding) {
      var name = "Object";
      if (binding.implementationType !== null) {
        name = getFunctionName(binding.implementationType);
      }
      registeredBindingsList = registeredBindingsList + "\n " + name;
      if (binding.constraint.metaData) {
        registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
      }
    });
  }
  return registeredBindingsList;
}
function alreadyDependencyChain(request, serviceIdentifier) {
  if (request.parentRequest === null) {
    return false;
  } else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
    return true;
  } else {
    return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
  }
}
function dependencyChainToString(request) {
  function _createStringArr(req, result) {
    if (result === void 0) {
      result = [];
    }
    var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
    result.push(serviceIdentifier);
    if (req.parentRequest !== null) {
      return _createStringArr(req.parentRequest, result);
    }
    return result;
  }
  var stringArr = _createStringArr(request);
  return stringArr.reverse().join(" --> ");
}
function circularDependencyToException(request) {
  request.childRequests.forEach(function(childRequest) {
    if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
      var services = dependencyChainToString(childRequest);
      throw new Error(CIRCULAR_DEPENDENCY + " " + services);
    } else {
      circularDependencyToException(childRequest);
    }
  });
}
function listMetadataForTarget(serviceIdentifierString, target) {
  if (target.isTagged() || target.isNamed()) {
    var m_1 = "";
    var namedTag = target.getNamedTag();
    var otherTags = target.getCustomTags();
    if (namedTag !== null) {
      m_1 += namedTag.toString() + "\n";
    }
    if (otherTags !== null) {
      otherTags.forEach(function(tag) {
        m_1 += tag.toString() + "\n";
      });
    }
    return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
  } else {
    return " " + serviceIdentifierString;
  }
}
function getFunctionName(func) {
  if (func.name) {
    return func.name;
  } else {
    var name_1 = func.toString();
    var match = name_1.match(/^function\s*([^\s(]+)/);
    return match ? match[1] : "Anonymous function: " + name_1;
  }
}
function getSymbolDescription(symbol) {
  return symbol.toString().slice(7, -1);
}
var Context = function() {
  function Context2(container) {
    this.id = id();
    this.container = container;
  }
  Context2.prototype.addPlan = function(plan2) {
    this.plan = plan2;
  };
  Context2.prototype.setCurrentRequest = function(currentRequest) {
    this.currentRequest = currentRequest;
  };
  return Context2;
}();
var Metadata = function() {
  function Metadata2(key, value) {
    this.key = key;
    this.value = value;
  }
  Metadata2.prototype.toString = function() {
    if (this.key === NAMED_TAG) {
      return "named: " + String(this.value).toString() + " ";
    } else {
      return "tagged: { key:" + this.key.toString() + ", value: " + String(this.value) + " }";
    }
  };
  return Metadata2;
}();
var Plan = function() {
  function Plan2(parentContext, rootRequest) {
    this.parentContext = parentContext;
    this.rootRequest = rootRequest;
  }
  return Plan2;
}();
var LazyServiceIdentifer = function() {
  function LazyServiceIdentifer2(cb) {
    this._cb = cb;
  }
  LazyServiceIdentifer2.prototype.unwrap = function() {
    return this._cb();
  };
  return LazyServiceIdentifer2;
}();
var QueryableString = function() {
  function QueryableString2(str) {
    this.str = str;
  }
  QueryableString2.prototype.startsWith = function(searchString) {
    return this.str.indexOf(searchString) === 0;
  };
  QueryableString2.prototype.endsWith = function(searchString) {
    var reverseString = "";
    var reverseSearchString = searchString.split("").reverse().join("");
    reverseString = this.str.split("").reverse().join("");
    return this.startsWith.call({str: reverseString}, reverseSearchString);
  };
  QueryableString2.prototype.contains = function(searchString) {
    return this.str.indexOf(searchString) !== -1;
  };
  QueryableString2.prototype.equals = function(compareString) {
    return this.str === compareString;
  };
  QueryableString2.prototype.value = function() {
    return this.str;
  };
  return QueryableString2;
}();
var Target = function() {
  function Target2(type, identifier, serviceIdentifier, namedOrTagged) {
    this.id = id();
    this.type = type;
    this.serviceIdentifier = serviceIdentifier;
    var queryableName = typeof identifier === "symbol" ? getSymbolDescription(identifier) : identifier;
    this.name = new QueryableString(queryableName || "");
    this.identifier = identifier;
    this.metadata = new Array();
    var metadataItem = null;
    if (typeof namedOrTagged === "string") {
      metadataItem = new Metadata(NAMED_TAG, namedOrTagged);
    } else if (namedOrTagged instanceof Metadata) {
      metadataItem = namedOrTagged;
    }
    if (metadataItem !== null) {
      this.metadata.push(metadataItem);
    }
  }
  Target2.prototype.hasTag = function(key) {
    for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
      var m = _a[_i];
      if (m.key === key) {
        return true;
      }
    }
    return false;
  };
  Target2.prototype.isArray = function() {
    return this.hasTag(MULTI_INJECT_TAG);
  };
  Target2.prototype.matchesArray = function(name) {
    return this.matchesTag(MULTI_INJECT_TAG)(name);
  };
  Target2.prototype.isNamed = function() {
    return this.hasTag(NAMED_TAG);
  };
  Target2.prototype.isTagged = function() {
    return this.metadata.some(function(metadata) {
      return NON_CUSTOM_TAG_KEYS.every(function(key) {
        return metadata.key !== key;
      });
    });
  };
  Target2.prototype.isOptional = function() {
    return this.matchesTag(OPTIONAL_TAG)(true);
  };
  Target2.prototype.getNamedTag = function() {
    if (this.isNamed()) {
      return this.metadata.filter(function(m) {
        return m.key === NAMED_TAG;
      })[0];
    }
    return null;
  };
  Target2.prototype.getCustomTags = function() {
    if (this.isTagged()) {
      return this.metadata.filter(function(metadata) {
        return NON_CUSTOM_TAG_KEYS.every(function(key) {
          return metadata.key !== key;
        });
      });
    } else {
      return null;
    }
  };
  Target2.prototype.matchesNamedTag = function(name) {
    return this.matchesTag(NAMED_TAG)(name);
  };
  Target2.prototype.matchesTag = function(key) {
    var _this = this;
    return function(value) {
      for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
        var m = _a[_i];
        if (m.key === key && m.value === value) {
          return true;
        }
      }
      return false;
    };
  };
  return Target2;
}();
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
function getDependencies(metadataReader, func) {
  var constructorName = getFunctionName(func);
  return getTargets(metadataReader, constructorName, func, false);
}
function getTargets(metadataReader, constructorName, func, isBaseClass) {
  var metadata = metadataReader.getConstructorMetadata(func);
  var serviceIdentifiers = metadata.compilerGeneratedMetadata;
  if (serviceIdentifiers === void 0) {
    var msg = MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
    throw new Error(msg);
  }
  var constructorArgsMetadata = metadata.userGeneratedMetadata;
  var keys2 = Object.keys(constructorArgsMetadata);
  var hasUserDeclaredUnknownInjections = func.length === 0 && keys2.length > 0;
  var hasOptionalParameters = keys2.length > func.length;
  var iterations = hasUserDeclaredUnknownInjections || hasOptionalParameters ? keys2.length : func.length;
  var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
  var propertyTargets = getClassPropsAsTargets(metadataReader, func, constructorName);
  var targets = __spreadArray(__spreadArray([], constructorTargets, true), propertyTargets, true);
  return targets;
}
function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
  var targetMetadata = constructorArgsMetadata[index.toString()] || [];
  var metadata = formatTargetMetadata(targetMetadata);
  var isManaged = metadata.unmanaged !== true;
  var serviceIdentifier = serviceIdentifiers[index];
  var injectIdentifier = metadata.inject || metadata.multiInject;
  serviceIdentifier = injectIdentifier ? injectIdentifier : serviceIdentifier;
  if (serviceIdentifier instanceof LazyServiceIdentifer) {
    serviceIdentifier = serviceIdentifier.unwrap();
  }
  if (isManaged) {
    var isObject = serviceIdentifier === Object;
    var isFunction = serviceIdentifier === Function;
    var isUndefined = serviceIdentifier === void 0;
    var isUnknownType = isObject || isFunction || isUndefined;
    if (!isBaseClass && isUnknownType) {
      var msg = MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
      throw new Error(msg);
    }
    var target = new Target(TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
    target.metadata = targetMetadata;
    return target;
  }
  return null;
}
function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
  var targets = [];
  for (var i = 0; i < iterations; i++) {
    var index = i;
    var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
    if (target !== null) {
      targets.push(target);
    }
  }
  return targets;
}
function _getServiceIdentifierForProperty(inject2, multiInject2, propertyName, className) {
  var serviceIdentifier = inject2 || multiInject2;
  if (serviceIdentifier === void 0) {
    var msg = MISSING_INJECTABLE_ANNOTATION + " for property " + String(propertyName) + " in class " + className + ".";
    throw new Error(msg);
  }
  return serviceIdentifier;
}
function getClassPropsAsTargets(metadataReader, constructorFunc, constructorName) {
  var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
  var targets = [];
  var symbolKeys = Object.getOwnPropertySymbols(classPropsMetadata);
  var stringKeys = Object.keys(classPropsMetadata);
  var keys2 = stringKeys.concat(symbolKeys);
  for (var _i = 0, keys_1 = keys2; _i < keys_1.length; _i++) {
    var key = keys_1[_i];
    var targetMetadata = classPropsMetadata[key];
    var metadata = formatTargetMetadata(targetMetadata);
    var identifier = metadata.targetName || key;
    var serviceIdentifier = _getServiceIdentifierForProperty(metadata.inject, metadata.multiInject, key, constructorName);
    var target = new Target(TargetTypeEnum.ClassProperty, identifier, serviceIdentifier);
    target.metadata = targetMetadata;
    targets.push(target);
  }
  var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
  if (baseConstructor !== Object) {
    var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor, constructorName);
    targets = __spreadArray(__spreadArray([], targets, true), baseTargets, true);
  }
  return targets;
}
function getBaseClassDependencyCount(metadataReader, func) {
  var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
  if (baseConstructor !== Object) {
    var baseConstructorName = getFunctionName(baseConstructor);
    var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
    var metadata = targets.map(function(t) {
      return t.metadata.filter(function(m) {
        return m.key === UNMANAGED_TAG;
      });
    });
    var unmanagedCount = [].concat.apply([], metadata).length;
    var dependencyCount = targets.length - unmanagedCount;
    if (dependencyCount > 0) {
      return dependencyCount;
    } else {
      return getBaseClassDependencyCount(metadataReader, baseConstructor);
    }
  } else {
    return 0;
  }
}
function formatTargetMetadata(targetMetadata) {
  var targetMetadataMap = {};
  targetMetadata.forEach(function(m) {
    targetMetadataMap[m.key.toString()] = m.value;
  });
  return {
    inject: targetMetadataMap[INJECT_TAG],
    multiInject: targetMetadataMap[MULTI_INJECT_TAG],
    targetName: targetMetadataMap[NAME_TAG],
    unmanaged: targetMetadataMap[UNMANAGED_TAG]
  };
}
var Request = function() {
  function Request2(serviceIdentifier, parentContext, parentRequest, bindings, target) {
    this.id = id();
    this.serviceIdentifier = serviceIdentifier;
    this.parentContext = parentContext;
    this.parentRequest = parentRequest;
    this.target = target;
    this.childRequests = [];
    this.bindings = Array.isArray(bindings) ? bindings : [bindings];
    this.requestScope = parentRequest === null ? new Map() : null;
  }
  Request2.prototype.addChildRequest = function(serviceIdentifier, bindings, target) {
    var child = new Request2(serviceIdentifier, this.parentContext, this, bindings, target);
    this.childRequests.push(child);
    return child;
  };
  return Request2;
}();
function getBindingDictionary(cntnr) {
  return cntnr._bindingDictionary;
}
function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
  var metadataKey = isMultiInject ? MULTI_INJECT_TAG : INJECT_TAG;
  var injectMetadata = new Metadata(metadataKey, serviceIdentifier);
  var target = new Target(targetType, name, serviceIdentifier, injectMetadata);
  if (key !== void 0) {
    var tagMetadata = new Metadata(key, value);
    target.metadata.push(tagMetadata);
  }
  return target;
}
function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
  var bindings = getBindings(context.container, target.serviceIdentifier);
  var activeBindings = [];
  if (bindings.length === BindingCount.NoBindingsAvailable && context.container.options.autoBindInjectable && typeof target.serviceIdentifier === "function" && metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
    context.container.bind(target.serviceIdentifier).toSelf();
    bindings = getBindings(context.container, target.serviceIdentifier);
  }
  if (!avoidConstraints) {
    activeBindings = bindings.filter(function(binding) {
      var request = new Request(binding.serviceIdentifier, context, parentRequest, binding, target);
      return binding.constraint(request);
    });
  } else {
    activeBindings = bindings;
  }
  _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
  return activeBindings;
}
function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
  switch (bindings.length) {
    case BindingCount.NoBindingsAvailable:
      if (target.isOptional()) {
        return bindings;
      } else {
        var serviceIdentifierString = getServiceIdentifierAsString(serviceIdentifier);
        var msg = NOT_REGISTERED;
        msg += listMetadataForTarget(serviceIdentifierString, target);
        msg += listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
        throw new Error(msg);
      }
    case BindingCount.OnlyOneBindingAvailable:
      return bindings;
    case BindingCount.MultipleBindingsAvailable:
    default:
      if (!target.isArray()) {
        var serviceIdentifierString = getServiceIdentifierAsString(serviceIdentifier);
        var msg = AMBIGUOUS_MATCH + " " + serviceIdentifierString;
        msg += listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
        throw new Error(msg);
      } else {
        return bindings;
      }
  }
}
function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
  var activeBindings;
  var childRequest;
  if (parentRequest === null) {
    activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
    childRequest = new Request(serviceIdentifier, context, null, activeBindings, target);
    var thePlan = new Plan(context, childRequest);
    context.addPlan(thePlan);
  } else {
    activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
    childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
  }
  activeBindings.forEach(function(binding) {
    var subChildRequest = null;
    if (target.isArray()) {
      subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
    } else {
      if (binding.cache) {
        return;
      }
      subChildRequest = childRequest;
    }
    if (binding.type === BindingTypeEnum.Instance && binding.implementationType !== null) {
      var dependencies = getDependencies(metadataReader, binding.implementationType);
      if (!context.container.options.skipBaseClassChecks) {
        var baseClassDependencyCount = getBaseClassDependencyCount(metadataReader, binding.implementationType);
        if (dependencies.length < baseClassDependencyCount) {
          var error = ARGUMENTS_LENGTH_MISMATCH(getFunctionName(binding.implementationType));
          throw new Error(error);
        }
      }
      dependencies.forEach(function(dependency) {
        _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
      });
    }
  });
}
function getBindings(container, serviceIdentifier) {
  var bindings = [];
  var bindingDictionary = getBindingDictionary(container);
  if (bindingDictionary.hasKey(serviceIdentifier)) {
    bindings = bindingDictionary.get(serviceIdentifier);
  } else if (container.parent !== null) {
    bindings = getBindings(container.parent, serviceIdentifier);
  }
  return bindings;
}
function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
  if (avoidConstraints === void 0) {
    avoidConstraints = false;
  }
  var context = new Context(container);
  var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
  try {
    _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
    return context;
  } catch (error) {
    if (isStackOverflowExeption(error)) {
      circularDependencyToException(context.plan.rootRequest);
    }
    throw error;
  }
}
function createMockRequest(container, serviceIdentifier, key, value) {
  var target = new Target(TargetTypeEnum.Variable, "", serviceIdentifier, new Metadata(key, value));
  var context = new Context(container);
  var request = new Request(serviceIdentifier, context, null, [], target);
  return request;
}
function isPromise(object) {
  var isObjectOrFunction = typeof object === "object" && object !== null || typeof object === "function";
  return isObjectOrFunction && typeof object.then === "function";
}
function isPromiseOrContainsPromise(object) {
  if (isPromise(object)) {
    return true;
  }
  return Array.isArray(object) && object.some(isPromise);
}
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = {label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: []}, f, y, t, g;
  return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {value: op[1], done: false};
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {value: op[0] ? op[1] : void 0, done: true};
  }
};
var tryGetFromScope = function(requestScope, binding) {
  if (binding.scope === BindingScopeEnum.Singleton && binding.activated) {
    return binding.cache;
  }
  if (binding.scope === BindingScopeEnum.Request && requestScope.has(binding.id)) {
    return requestScope.get(binding.id);
  }
  return null;
};
var saveToScope = function(requestScope, binding, result) {
  if (binding.scope === BindingScopeEnum.Singleton) {
    _saveToSingletonScope(binding, result);
  }
  if (binding.scope === BindingScopeEnum.Request) {
    _saveToRequestScope(requestScope, binding, result);
  }
};
var _saveToRequestScope = function(requestScope, binding, result) {
  if (!requestScope.has(binding.id)) {
    requestScope.set(binding.id, result);
  }
};
var _saveToSingletonScope = function(binding, result) {
  binding.cache = result;
  binding.activated = true;
  if (isPromise(result)) {
    void _saveAsyncResultToSingletonScope(binding, result);
  }
};
var _saveAsyncResultToSingletonScope = function(binding, asyncResult) {
  return __awaiter(void 0, void 0, void 0, function() {
    var result, ex_1;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2, , 3]);
          return [4, asyncResult];
        case 1:
          result = _a.sent();
          binding.cache = result;
          return [3, 3];
        case 2:
          ex_1 = _a.sent();
          binding.cache = null;
          binding.activated = false;
          throw ex_1;
        case 3:
          return [2];
      }
    });
  });
};
var FactoryType;
(function(FactoryType2) {
  FactoryType2["DynamicValue"] = "toDynamicValue";
  FactoryType2["Factory"] = "toFactory";
  FactoryType2["Provider"] = "toProvider";
})(FactoryType || (FactoryType = {}));
var multiBindToService = function(container) {
  return function(service) {
    return function() {
      var types = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        types[_i] = arguments[_i];
      }
      return types.forEach(function(t) {
        return container.bind(t).toService(service);
      });
    };
  };
};
var ensureFullyBound = function(binding) {
  var boundValue = null;
  switch (binding.type) {
    case BindingTypeEnum.ConstantValue:
    case BindingTypeEnum.Function:
      boundValue = binding.cache;
      break;
    case BindingTypeEnum.Constructor:
    case BindingTypeEnum.Instance:
      boundValue = binding.implementationType;
      break;
    case BindingTypeEnum.DynamicValue:
      boundValue = binding.dynamicValue;
      break;
    case BindingTypeEnum.Provider:
      boundValue = binding.provider;
      break;
    case BindingTypeEnum.Factory:
      boundValue = binding.factory;
      break;
  }
  if (boundValue === null) {
    var serviceIdentifierAsString = getServiceIdentifierAsString(binding.serviceIdentifier);
    throw new Error(INVALID_BINDING_TYPE + " " + serviceIdentifierAsString);
  }
};
var getFactoryDetails = function(binding) {
  switch (binding.type) {
    case BindingTypeEnum.Factory:
      return {factory: binding.factory, factoryType: FactoryType.Factory};
    case BindingTypeEnum.Provider:
      return {factory: binding.provider, factoryType: FactoryType.Provider};
    case BindingTypeEnum.DynamicValue:
      return {factory: binding.dynamicValue, factoryType: FactoryType.DynamicValue};
    default:
      throw new Error("Unexpected factory type " + binding.type);
  }
};
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter$1 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator$1 = function(thisArg, body) {
  var _ = {label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: []}, f, y, t, g;
  return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {value: op[1], done: false};
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {value: op[0] ? op[1] : void 0, done: true};
  }
};
var __spreadArray$1 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
function _resolveRequests(childRequests, resolveRequest) {
  return childRequests.reduce(function(resolvedRequests, childRequest) {
    var injection = resolveRequest(childRequest);
    var targetType = childRequest.target.type;
    if (targetType === TargetTypeEnum.ConstructorArgument) {
      resolvedRequests.constructorInjections.push(injection);
    } else {
      resolvedRequests.propertyRequests.push(childRequest);
      resolvedRequests.propertyInjections.push(injection);
    }
    if (!resolvedRequests.isAsync) {
      resolvedRequests.isAsync = isPromiseOrContainsPromise(injection);
    }
    return resolvedRequests;
  }, {constructorInjections: [], propertyInjections: [], propertyRequests: [], isAsync: false});
}
function _createInstance(constr, childRequests, resolveRequest) {
  var result;
  if (childRequests.length > 0) {
    var resolved = _resolveRequests(childRequests, resolveRequest);
    var createInstanceWithInjectionsArg = __assign(__assign({}, resolved), {constr});
    if (resolved.isAsync) {
      result = createInstanceWithInjectionsAsync(createInstanceWithInjectionsArg);
    } else {
      result = createInstanceWithInjections(createInstanceWithInjectionsArg);
    }
  } else {
    result = new constr();
  }
  return result;
}
function createInstanceWithInjections(args) {
  var _a;
  var instance = new ((_a = args.constr).bind.apply(_a, __spreadArray$1([void 0], args.constructorInjections, false)))();
  args.propertyRequests.forEach(function(r, index) {
    var property = r.target.identifier;
    var injection = args.propertyInjections[index];
    instance[property] = injection;
  });
  return instance;
}
function createInstanceWithInjectionsAsync(args) {
  return __awaiter$1(this, void 0, void 0, function() {
    var constructorInjections, propertyInjections;
    return __generator$1(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, possiblyWaitInjections(args.constructorInjections)];
        case 1:
          constructorInjections = _a.sent();
          return [4, possiblyWaitInjections(args.propertyInjections)];
        case 2:
          propertyInjections = _a.sent();
          return [2, createInstanceWithInjections(__assign(__assign({}, args), {constructorInjections, propertyInjections}))];
      }
    });
  });
}
function possiblyWaitInjections(possiblePromiseinjections) {
  return __awaiter$1(this, void 0, void 0, function() {
    var injections, _i, possiblePromiseinjections_1, injection;
    return __generator$1(this, function(_a) {
      injections = [];
      for (_i = 0, possiblePromiseinjections_1 = possiblePromiseinjections; _i < possiblePromiseinjections_1.length; _i++) {
        injection = possiblePromiseinjections_1[_i];
        if (Array.isArray(injection)) {
          injections.push(Promise.all(injection));
        } else {
          injections.push(injection);
        }
      }
      return [2, Promise.all(injections)];
    });
  });
}
function _getInstanceAfterPostConstruct(constr, result) {
  var postConstructResult = _postConstruct(constr, result);
  if (isPromise(postConstructResult)) {
    return postConstructResult.then(function() {
      return result;
    });
  } else {
    return result;
  }
}
function _postConstruct(constr, instance) {
  var _a, _b;
  if (Reflect.hasMetadata(POST_CONSTRUCT, constr)) {
    var data = Reflect.getMetadata(POST_CONSTRUCT, constr);
    try {
      return (_b = (_a = instance)[data.value]) === null || _b === void 0 ? void 0 : _b.call(_a);
    } catch (e) {
      throw new Error(POST_CONSTRUCT_ERROR(constr.name, e.message));
    }
  }
}
function _validateInstanceResolution(binding, constr) {
  if (binding.scope !== BindingScopeEnum.Singleton) {
    _throwIfHandlingDeactivation(binding, constr);
  }
}
function _throwIfHandlingDeactivation(binding, constr) {
  var scopeErrorMessage = "Class cannot be instantiated in " + (binding.scope === BindingScopeEnum.Request ? "request" : "transient") + " scope.";
  if (typeof binding.onDeactivation === "function") {
    throw new Error(ON_DEACTIVATION_ERROR(constr.name, scopeErrorMessage));
  }
  if (Reflect.hasMetadata(PRE_DESTROY, constr)) {
    throw new Error(PRE_DESTROY_ERROR(constr.name, scopeErrorMessage));
  }
}
function resolveInstance(binding, constr, childRequests, resolveRequest) {
  _validateInstanceResolution(binding, constr);
  var result = _createInstance(constr, childRequests, resolveRequest);
  if (isPromise(result)) {
    return result.then(function(resolvedResult) {
      return _getInstanceAfterPostConstruct(constr, resolvedResult);
    });
  } else {
    return _getInstanceAfterPostConstruct(constr, result);
  }
}
var __awaiter$2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator$2 = function(thisArg, body) {
  var _ = {label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: []}, f, y, t, g;
  return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {value: op[1], done: false};
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {value: op[0] ? op[1] : void 0, done: true};
  }
};
var _resolveRequest = function(requestScope) {
  return function(request) {
    request.parentContext.setCurrentRequest(request);
    var bindings = request.bindings;
    var childRequests = request.childRequests;
    var targetIsAnArray = request.target && request.target.isArray();
    var targetParentIsNotAnArray = !request.parentRequest || !request.parentRequest.target || !request.target || !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
    if (targetIsAnArray && targetParentIsNotAnArray) {
      return childRequests.map(function(childRequest) {
        var _f = _resolveRequest(requestScope);
        return _f(childRequest);
      });
    } else {
      if (request.target.isOptional() && bindings.length === 0) {
        return void 0;
      }
      var binding = bindings[0];
      return _resolveBinding(requestScope, request, binding);
    }
  };
};
var _resolveFactoryFromBinding = function(binding, context) {
  var factoryDetails = getFactoryDetails(binding);
  return tryAndThrowErrorIfStackOverflow(function() {
    return factoryDetails.factory.bind(binding)(context);
  }, function() {
    return new Error(CIRCULAR_DEPENDENCY_IN_FACTORY(factoryDetails.factoryType, context.currentRequest.serviceIdentifier.toString()));
  });
};
var _getResolvedFromBinding = function(requestScope, request, binding) {
  var result;
  var childRequests = request.childRequests;
  ensureFullyBound(binding);
  switch (binding.type) {
    case BindingTypeEnum.ConstantValue:
    case BindingTypeEnum.Function:
      result = binding.cache;
      break;
    case BindingTypeEnum.Constructor:
      result = binding.implementationType;
      break;
    case BindingTypeEnum.Instance:
      result = resolveInstance(binding, binding.implementationType, childRequests, _resolveRequest(requestScope));
      break;
    default:
      result = _resolveFactoryFromBinding(binding, request.parentContext);
  }
  return result;
};
var _resolveInScope = function(requestScope, binding, resolveFromBinding) {
  var result = tryGetFromScope(requestScope, binding);
  if (result !== null) {
    return result;
  }
  result = resolveFromBinding();
  saveToScope(requestScope, binding, result);
  return result;
};
var _resolveBinding = function(requestScope, request, binding) {
  return _resolveInScope(requestScope, binding, function() {
    var result = _getResolvedFromBinding(requestScope, request, binding);
    if (isPromise(result)) {
      result = result.then(function(resolved) {
        return _onActivation(request, binding, resolved);
      });
    } else {
      result = _onActivation(request, binding, result);
    }
    return result;
  });
};
function _onActivation(request, binding, resolved) {
  var result = _bindingActivation(request.parentContext, binding, resolved);
  var containersIterator = _getContainersIterator(request.parentContext.container);
  var container;
  var containersIteratorResult = containersIterator.next();
  do {
    container = containersIteratorResult.value;
    var context_1 = request.parentContext;
    var serviceIdentifier = request.serviceIdentifier;
    var activationsIterator = _getContainerActivationsForService(container, serviceIdentifier);
    if (isPromise(result)) {
      result = _activateContainerAsync(activationsIterator, context_1, result);
    } else {
      result = _activateContainer(activationsIterator, context_1, result);
    }
    containersIteratorResult = containersIterator.next();
  } while (containersIteratorResult.done !== true && !getBindingDictionary(container).hasKey(request.serviceIdentifier));
  return result;
}
var _bindingActivation = function(context, binding, previousResult) {
  var result;
  if (typeof binding.onActivation === "function") {
    result = binding.onActivation(context, previousResult);
  } else {
    result = previousResult;
  }
  return result;
};
var _activateContainer = function(activationsIterator, context, result) {
  var activation = activationsIterator.next();
  while (!activation.done) {
    result = activation.value(context, result);
    if (isPromise(result)) {
      return _activateContainerAsync(activationsIterator, context, result);
    }
    activation = activationsIterator.next();
  }
  return result;
};
var _activateContainerAsync = function(activationsIterator, context, resultPromise) {
  return __awaiter$2(void 0, void 0, void 0, function() {
    var result, activation;
    return __generator$2(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, resultPromise];
        case 1:
          result = _a.sent();
          activation = activationsIterator.next();
          _a.label = 2;
        case 2:
          if (!!activation.done)
            return [3, 4];
          return [4, activation.value(context, result)];
        case 3:
          result = _a.sent();
          activation = activationsIterator.next();
          return [3, 2];
        case 4:
          return [2, result];
      }
    });
  });
};
var _getContainerActivationsForService = function(container, serviceIdentifier) {
  var activations = container._activations;
  return activations.hasKey(serviceIdentifier) ? activations.get(serviceIdentifier).values() : [].values();
};
var _getContainersIterator = function(container) {
  var containersStack = [container];
  var parent = container.parent;
  while (parent !== null) {
    containersStack.push(parent);
    parent = parent.parent;
  }
  var getNextContainer = function() {
    var nextContainer = containersStack.pop();
    if (nextContainer !== void 0) {
      return {done: false, value: nextContainer};
    } else {
      return {done: true, value: void 0};
    }
  };
  var containersIterator = {
    next: getNextContainer
  };
  return containersIterator;
};
function resolve(context) {
  var _f = _resolveRequest(context.plan.rootRequest.requestScope);
  return _f(context.plan.rootRequest);
}
var traverseAncerstors = function(request, constraint) {
  var parent = request.parentRequest;
  if (parent !== null) {
    return constraint(parent) ? true : traverseAncerstors(parent, constraint);
  } else {
    return false;
  }
};
var taggedConstraint = function(key) {
  return function(value) {
    var constraint = function(request) {
      return request !== null && request.target !== null && request.target.matchesTag(key)(value);
    };
    constraint.metaData = new Metadata(key, value);
    return constraint;
  };
};
var namedConstraint = taggedConstraint(NAMED_TAG);
var typeConstraint = function(type) {
  return function(request) {
    var binding = null;
    if (request !== null) {
      binding = request.bindings[0];
      if (typeof type === "string") {
        var serviceIdentifier = binding.serviceIdentifier;
        return serviceIdentifier === type;
      } else {
        var constructor = request.bindings[0].implementationType;
        return type === constructor;
      }
    }
    return false;
  };
};
var BindingWhenSyntax = function() {
  function BindingWhenSyntax2(binding) {
    this._binding = binding;
  }
  BindingWhenSyntax2.prototype.when = function(constraint) {
    this._binding.constraint = constraint;
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenTargetNamed = function(name) {
    this._binding.constraint = namedConstraint(name);
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenTargetIsDefault = function() {
    this._binding.constraint = function(request) {
      if (request === null) {
        return false;
      }
      var targetIsDefault = request.target !== null && !request.target.isNamed() && !request.target.isTagged();
      return targetIsDefault;
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenTargetTagged = function(tag, value) {
    this._binding.constraint = taggedConstraint(tag)(value);
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenInjectedInto = function(parent) {
    this._binding.constraint = function(request) {
      return request !== null && typeConstraint(parent)(request.parentRequest);
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenParentNamed = function(name) {
    this._binding.constraint = function(request) {
      return request !== null && namedConstraint(name)(request.parentRequest);
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenParentTagged = function(tag, value) {
    this._binding.constraint = function(request) {
      return request !== null && taggedConstraint(tag)(value)(request.parentRequest);
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
    this._binding.constraint = function(request) {
      return request !== null && traverseAncerstors(request, typeConstraint(ancestor));
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
    this._binding.constraint = function(request) {
      return request !== null && !traverseAncerstors(request, typeConstraint(ancestor));
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenAnyAncestorNamed = function(name) {
    this._binding.constraint = function(request) {
      return request !== null && traverseAncerstors(request, namedConstraint(name));
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenNoAncestorNamed = function(name) {
    this._binding.constraint = function(request) {
      return request !== null && !traverseAncerstors(request, namedConstraint(name));
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
    this._binding.constraint = function(request) {
      return request !== null && traverseAncerstors(request, taggedConstraint(tag)(value));
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
    this._binding.constraint = function(request) {
      return request !== null && !traverseAncerstors(request, taggedConstraint(tag)(value));
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
    this._binding.constraint = function(request) {
      return request !== null && traverseAncerstors(request, constraint);
    };
    return new BindingOnSyntax(this._binding);
  };
  BindingWhenSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
    this._binding.constraint = function(request) {
      return request !== null && !traverseAncerstors(request, constraint);
    };
    return new BindingOnSyntax(this._binding);
  };
  return BindingWhenSyntax2;
}();
var BindingOnSyntax = function() {
  function BindingOnSyntax2(binding) {
    this._binding = binding;
  }
  BindingOnSyntax2.prototype.onActivation = function(handler) {
    this._binding.onActivation = handler;
    return new BindingWhenSyntax(this._binding);
  };
  BindingOnSyntax2.prototype.onDeactivation = function(handler) {
    this._binding.onDeactivation = handler;
    return new BindingWhenSyntax(this._binding);
  };
  return BindingOnSyntax2;
}();
var BindingWhenOnSyntax = function() {
  function BindingWhenOnSyntax2(binding) {
    this._binding = binding;
    this._bindingWhenSyntax = new BindingWhenSyntax(this._binding);
    this._bindingOnSyntax = new BindingOnSyntax(this._binding);
  }
  BindingWhenOnSyntax2.prototype.when = function(constraint) {
    return this._bindingWhenSyntax.when(constraint);
  };
  BindingWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
    return this._bindingWhenSyntax.whenTargetNamed(name);
  };
  BindingWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  };
  BindingWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenTargetTagged(tag, value);
  };
  BindingWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
    return this._bindingWhenSyntax.whenInjectedInto(parent);
  };
  BindingWhenOnSyntax2.prototype.whenParentNamed = function(name) {
    return this._bindingWhenSyntax.whenParentNamed(name);
  };
  BindingWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenParentTagged(tag, value);
  };
  BindingWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
  };
  BindingWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
    return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
  };
  BindingWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
  };
  BindingWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
  };
  BindingWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(name);
  };
  BindingWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
  };
  BindingWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
  };
  BindingWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
  };
  BindingWhenOnSyntax2.prototype.onActivation = function(handler) {
    return this._bindingOnSyntax.onActivation(handler);
  };
  BindingWhenOnSyntax2.prototype.onDeactivation = function(handler) {
    return this._bindingOnSyntax.onDeactivation(handler);
  };
  return BindingWhenOnSyntax2;
}();
var BindingInSyntax = function() {
  function BindingInSyntax2(binding) {
    this._binding = binding;
  }
  BindingInSyntax2.prototype.inRequestScope = function() {
    this._binding.scope = BindingScopeEnum.Request;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingInSyntax2.prototype.inSingletonScope = function() {
    this._binding.scope = BindingScopeEnum.Singleton;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingInSyntax2.prototype.inTransientScope = function() {
    this._binding.scope = BindingScopeEnum.Transient;
    return new BindingWhenOnSyntax(this._binding);
  };
  return BindingInSyntax2;
}();
var BindingInWhenOnSyntax = function() {
  function BindingInWhenOnSyntax2(binding) {
    this._binding = binding;
    this._bindingWhenSyntax = new BindingWhenSyntax(this._binding);
    this._bindingOnSyntax = new BindingOnSyntax(this._binding);
    this._bindingInSyntax = new BindingInSyntax(binding);
  }
  BindingInWhenOnSyntax2.prototype.inRequestScope = function() {
    return this._bindingInSyntax.inRequestScope();
  };
  BindingInWhenOnSyntax2.prototype.inSingletonScope = function() {
    return this._bindingInSyntax.inSingletonScope();
  };
  BindingInWhenOnSyntax2.prototype.inTransientScope = function() {
    return this._bindingInSyntax.inTransientScope();
  };
  BindingInWhenOnSyntax2.prototype.when = function(constraint) {
    return this._bindingWhenSyntax.when(constraint);
  };
  BindingInWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
    return this._bindingWhenSyntax.whenTargetNamed(name);
  };
  BindingInWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  };
  BindingInWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenTargetTagged(tag, value);
  };
  BindingInWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
    return this._bindingWhenSyntax.whenInjectedInto(parent);
  };
  BindingInWhenOnSyntax2.prototype.whenParentNamed = function(name) {
    return this._bindingWhenSyntax.whenParentNamed(name);
  };
  BindingInWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenParentTagged(tag, value);
  };
  BindingInWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
  };
  BindingInWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
    return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
  };
  BindingInWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
  };
  BindingInWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
  };
  BindingInWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(name);
  };
  BindingInWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
  };
  BindingInWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
  };
  BindingInWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
  };
  BindingInWhenOnSyntax2.prototype.onActivation = function(handler) {
    return this._bindingOnSyntax.onActivation(handler);
  };
  BindingInWhenOnSyntax2.prototype.onDeactivation = function(handler) {
    return this._bindingOnSyntax.onDeactivation(handler);
  };
  return BindingInWhenOnSyntax2;
}();
var BindingToSyntax = function() {
  function BindingToSyntax2(binding) {
    this._binding = binding;
  }
  BindingToSyntax2.prototype.to = function(constructor) {
    this._binding.type = BindingTypeEnum.Instance;
    this._binding.implementationType = constructor;
    return new BindingInWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toSelf = function() {
    if (typeof this._binding.serviceIdentifier !== "function") {
      throw new Error("" + INVALID_TO_SELF_VALUE);
    }
    var self = this._binding.serviceIdentifier;
    return this.to(self);
  };
  BindingToSyntax2.prototype.toConstantValue = function(value) {
    this._binding.type = BindingTypeEnum.ConstantValue;
    this._binding.cache = value;
    this._binding.dynamicValue = null;
    this._binding.implementationType = null;
    this._binding.scope = BindingScopeEnum.Singleton;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toDynamicValue = function(func) {
    this._binding.type = BindingTypeEnum.DynamicValue;
    this._binding.cache = null;
    this._binding.dynamicValue = func;
    this._binding.implementationType = null;
    return new BindingInWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toConstructor = function(constructor) {
    this._binding.type = BindingTypeEnum.Constructor;
    this._binding.implementationType = constructor;
    this._binding.scope = BindingScopeEnum.Singleton;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toFactory = function(factory) {
    this._binding.type = BindingTypeEnum.Factory;
    this._binding.factory = factory;
    this._binding.scope = BindingScopeEnum.Singleton;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toFunction = function(func) {
    if (typeof func !== "function") {
      throw new Error(INVALID_FUNCTION_BINDING);
    }
    var bindingWhenOnSyntax = this.toConstantValue(func);
    this._binding.type = BindingTypeEnum.Function;
    this._binding.scope = BindingScopeEnum.Singleton;
    return bindingWhenOnSyntax;
  };
  BindingToSyntax2.prototype.toAutoFactory = function(serviceIdentifier) {
    this._binding.type = BindingTypeEnum.Factory;
    this._binding.factory = function(context) {
      var autofactory = function() {
        return context.container.get(serviceIdentifier);
      };
      return autofactory;
    };
    this._binding.scope = BindingScopeEnum.Singleton;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toAutoNamedFactory = function(serviceIdentifier) {
    this._binding.type = BindingTypeEnum.Factory;
    this._binding.factory = function(context) {
      return function(named2) {
        return context.container.getNamed(serviceIdentifier, named2);
      };
    };
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toProvider = function(provider) {
    this._binding.type = BindingTypeEnum.Provider;
    this._binding.provider = provider;
    this._binding.scope = BindingScopeEnum.Singleton;
    return new BindingWhenOnSyntax(this._binding);
  };
  BindingToSyntax2.prototype.toService = function(service) {
    this.toDynamicValue(function(context) {
      return context.container.get(service);
    });
  };
  return BindingToSyntax2;
}();
var ContainerSnapshot = function() {
  function ContainerSnapshot2() {
  }
  ContainerSnapshot2.of = function(bindings, middleware, activations, deactivations, moduleActivationStore) {
    var snapshot = new ContainerSnapshot2();
    snapshot.bindings = bindings;
    snapshot.middleware = middleware;
    snapshot.deactivations = deactivations;
    snapshot.activations = activations;
    snapshot.moduleActivationStore = moduleActivationStore;
    return snapshot;
  };
  return ContainerSnapshot2;
}();
function isClonable(obj) {
  return typeof obj === "object" && obj !== null && "clone" in obj && typeof obj.clone === "function";
}
var Lookup = function() {
  function Lookup2() {
    this._map = new Map();
  }
  Lookup2.prototype.getMap = function() {
    return this._map;
  };
  Lookup2.prototype.add = function(serviceIdentifier, value) {
    if (serviceIdentifier === null || serviceIdentifier === void 0) {
      throw new Error(NULL_ARGUMENT);
    }
    if (value === null || value === void 0) {
      throw new Error(NULL_ARGUMENT);
    }
    var entry = this._map.get(serviceIdentifier);
    if (entry !== void 0) {
      entry.push(value);
    } else {
      this._map.set(serviceIdentifier, [value]);
    }
  };
  Lookup2.prototype.get = function(serviceIdentifier) {
    if (serviceIdentifier === null || serviceIdentifier === void 0) {
      throw new Error(NULL_ARGUMENT);
    }
    var entry = this._map.get(serviceIdentifier);
    if (entry !== void 0) {
      return entry;
    } else {
      throw new Error(KEY_NOT_FOUND);
    }
  };
  Lookup2.prototype.remove = function(serviceIdentifier) {
    if (serviceIdentifier === null || serviceIdentifier === void 0) {
      throw new Error(NULL_ARGUMENT);
    }
    if (!this._map.delete(serviceIdentifier)) {
      throw new Error(KEY_NOT_FOUND);
    }
  };
  Lookup2.prototype.removeIntersection = function(lookup) {
    var _this = this;
    this.traverse(function(serviceIdentifier, value) {
      var lookupActivations = lookup.hasKey(serviceIdentifier) ? lookup.get(serviceIdentifier) : void 0;
      if (lookupActivations !== void 0) {
        var filteredValues = value.filter(function(lookupValue) {
          return !lookupActivations.some(function(moduleActivation) {
            return lookupValue === moduleActivation;
          });
        });
        _this._setValue(serviceIdentifier, filteredValues);
      }
    });
  };
  Lookup2.prototype.removeByCondition = function(condition) {
    var _this = this;
    var removals = [];
    this._map.forEach(function(entries, key) {
      var updatedEntries = [];
      for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        var remove = condition(entry);
        if (remove) {
          removals.push(entry);
        } else {
          updatedEntries.push(entry);
        }
      }
      _this._setValue(key, updatedEntries);
    });
    return removals;
  };
  Lookup2.prototype.hasKey = function(serviceIdentifier) {
    if (serviceIdentifier === null || serviceIdentifier === void 0) {
      throw new Error(NULL_ARGUMENT);
    }
    return this._map.has(serviceIdentifier);
  };
  Lookup2.prototype.clone = function() {
    var copy = new Lookup2();
    this._map.forEach(function(value, key) {
      value.forEach(function(b) {
        return copy.add(key, isClonable(b) ? b.clone() : b);
      });
    });
    return copy;
  };
  Lookup2.prototype.traverse = function(func) {
    this._map.forEach(function(value, key) {
      func(key, value);
    });
  };
  Lookup2.prototype._setValue = function(serviceIdentifier, value) {
    if (value.length > 0) {
      this._map.set(serviceIdentifier, value);
    } else {
      this._map.delete(serviceIdentifier);
    }
  };
  return Lookup2;
}();
var ModuleActivationStore = function() {
  function ModuleActivationStore2() {
    this._map = new Map();
  }
  ModuleActivationStore2.prototype.remove = function(moduleId) {
    if (this._map.has(moduleId)) {
      var handlers = this._map.get(moduleId);
      this._map.delete(moduleId);
      return handlers;
    }
    return this._getEmptyHandlersStore();
  };
  ModuleActivationStore2.prototype.addDeactivation = function(moduleId, serviceIdentifier, onDeactivation) {
    this._getModuleActivationHandlers(moduleId).onDeactivations.add(serviceIdentifier, onDeactivation);
  };
  ModuleActivationStore2.prototype.addActivation = function(moduleId, serviceIdentifier, onActivation) {
    this._getModuleActivationHandlers(moduleId).onActivations.add(serviceIdentifier, onActivation);
  };
  ModuleActivationStore2.prototype.clone = function() {
    var clone = new ModuleActivationStore2();
    this._map.forEach(function(handlersStore, moduleId) {
      clone._map.set(moduleId, {
        onActivations: handlersStore.onActivations.clone(),
        onDeactivations: handlersStore.onDeactivations.clone()
      });
    });
    return clone;
  };
  ModuleActivationStore2.prototype._getModuleActivationHandlers = function(moduleId) {
    var moduleActivationHandlers = this._map.get(moduleId);
    if (moduleActivationHandlers === void 0) {
      moduleActivationHandlers = this._getEmptyHandlersStore();
      this._map.set(moduleId, moduleActivationHandlers);
    }
    return moduleActivationHandlers;
  };
  ModuleActivationStore2.prototype._getEmptyHandlersStore = function() {
    var handlersStore = {
      onActivations: new Lookup(),
      onDeactivations: new Lookup()
    };
    return handlersStore;
  };
  return ModuleActivationStore2;
}();
var __assign$1 = function() {
  __assign$1 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var __awaiter$3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator$3 = function(thisArg, body) {
  var _ = {label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: []}, f, y, t, g;
  return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {value: op[1], done: false};
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {value: op[0] ? op[1] : void 0, done: true};
  }
};
var __spreadArray$2 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var Container = function() {
  function Container2(containerOptions) {
    var options = containerOptions || {};
    if (typeof options !== "object") {
      throw new Error("" + CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
    }
    if (options.defaultScope === void 0) {
      options.defaultScope = BindingScopeEnum.Transient;
    } else if (options.defaultScope !== BindingScopeEnum.Singleton && options.defaultScope !== BindingScopeEnum.Transient && options.defaultScope !== BindingScopeEnum.Request) {
      throw new Error("" + CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
    }
    if (options.autoBindInjectable === void 0) {
      options.autoBindInjectable = false;
    } else if (typeof options.autoBindInjectable !== "boolean") {
      throw new Error("" + CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
    }
    if (options.skipBaseClassChecks === void 0) {
      options.skipBaseClassChecks = false;
    } else if (typeof options.skipBaseClassChecks !== "boolean") {
      throw new Error("" + CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
    }
    this.options = {
      autoBindInjectable: options.autoBindInjectable,
      defaultScope: options.defaultScope,
      skipBaseClassChecks: options.skipBaseClassChecks
    };
    this.id = id();
    this._bindingDictionary = new Lookup();
    this._snapshots = [];
    this._middleware = null;
    this._activations = new Lookup();
    this._deactivations = new Lookup();
    this.parent = null;
    this._metadataReader = new MetadataReader();
    this._moduleActivationStore = new ModuleActivationStore();
  }
  Container2.merge = function(container1, container2) {
    var containers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      containers[_i - 2] = arguments[_i];
    }
    var container = new Container2();
    var targetContainers = __spreadArray$2([container1, container2], containers, true).map(function(targetContainer) {
      return getBindingDictionary(targetContainer);
    });
    var bindingDictionary = getBindingDictionary(container);
    function copyDictionary(origin, destination) {
      origin.traverse(function(_key, value) {
        value.forEach(function(binding) {
          destination.add(binding.serviceIdentifier, binding.clone());
        });
      });
    }
    targetContainers.forEach(function(targetBindingDictionary) {
      copyDictionary(targetBindingDictionary, bindingDictionary);
    });
    return container;
  };
  Container2.prototype.load = function() {
    var modules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }
    var getHelpers = this._getContainerModuleHelpersFactory();
    for (var _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
      var currentModule = modules_1[_a];
      var containerModuleHelpers = getHelpers(currentModule.id);
      currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction);
    }
  };
  Container2.prototype.loadAsync = function() {
    var modules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }
    return __awaiter$3(this, void 0, void 0, function() {
      var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;
      return __generator$3(this, function(_b) {
        switch (_b.label) {
          case 0:
            getHelpers = this._getContainerModuleHelpersFactory();
            _a = 0, modules_2 = modules;
            _b.label = 1;
          case 1:
            if (!(_a < modules_2.length))
              return [3, 4];
            currentModule = modules_2[_a];
            containerModuleHelpers = getHelpers(currentModule.id);
            return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction)];
          case 2:
            _b.sent();
            _b.label = 3;
          case 3:
            _a++;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  };
  Container2.prototype.unload = function() {
    var _this = this;
    var modules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }
    modules.forEach(function(module) {
      var deactivations = _this._removeModuleBindings(module.id);
      _this._deactivateSingletons(deactivations);
      _this._removeModuleHandlers(module.id);
    });
  };
  Container2.prototype.unloadAsync = function() {
    var modules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }
    return __awaiter$3(this, void 0, void 0, function() {
      var _a, modules_3, module_1, deactivations;
      return __generator$3(this, function(_b) {
        switch (_b.label) {
          case 0:
            _a = 0, modules_3 = modules;
            _b.label = 1;
          case 1:
            if (!(_a < modules_3.length))
              return [3, 4];
            module_1 = modules_3[_a];
            deactivations = this._removeModuleBindings(module_1.id);
            return [4, this._deactivateSingletonsAsync(deactivations)];
          case 2:
            _b.sent();
            this._removeModuleHandlers(module_1.id);
            _b.label = 3;
          case 3:
            _a++;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  };
  Container2.prototype.bind = function(serviceIdentifier) {
    var scope = this.options.defaultScope || BindingScopeEnum.Transient;
    var binding = new Binding(serviceIdentifier, scope);
    this._bindingDictionary.add(serviceIdentifier, binding);
    return new BindingToSyntax(binding);
  };
  Container2.prototype.rebind = function(serviceIdentifier) {
    this.unbind(serviceIdentifier);
    return this.bind(serviceIdentifier);
  };
  Container2.prototype.rebindAsync = function(serviceIdentifier) {
    return __awaiter$3(this, void 0, void 0, function() {
      return __generator$3(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, this.unbindAsync(serviceIdentifier)];
          case 1:
            _a.sent();
            return [2, this.bind(serviceIdentifier)];
        }
      });
    });
  };
  Container2.prototype.unbind = function(serviceIdentifier) {
    if (this._bindingDictionary.hasKey(serviceIdentifier)) {
      var bindings = this._bindingDictionary.get(serviceIdentifier);
      this._deactivateSingletons(bindings);
    }
    this._removeServiceFromDictionary(serviceIdentifier);
  };
  Container2.prototype.unbindAsync = function(serviceIdentifier) {
    return __awaiter$3(this, void 0, void 0, function() {
      var bindings;
      return __generator$3(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!this._bindingDictionary.hasKey(serviceIdentifier))
              return [3, 2];
            bindings = this._bindingDictionary.get(serviceIdentifier);
            return [4, this._deactivateSingletonsAsync(bindings)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            this._removeServiceFromDictionary(serviceIdentifier);
            return [2];
        }
      });
    });
  };
  Container2.prototype.unbindAll = function() {
    var _this = this;
    this._bindingDictionary.traverse(function(_key, value) {
      _this._deactivateSingletons(value);
    });
    this._bindingDictionary = new Lookup();
  };
  Container2.prototype.unbindAllAsync = function() {
    return __awaiter$3(this, void 0, void 0, function() {
      var promises;
      var _this = this;
      return __generator$3(this, function(_a) {
        switch (_a.label) {
          case 0:
            promises = [];
            this._bindingDictionary.traverse(function(_key, value) {
              promises.push(_this._deactivateSingletonsAsync(value));
            });
            return [4, Promise.all(promises)];
          case 1:
            _a.sent();
            this._bindingDictionary = new Lookup();
            return [2];
        }
      });
    });
  };
  Container2.prototype.onActivation = function(serviceIdentifier, onActivation) {
    this._activations.add(serviceIdentifier, onActivation);
  };
  Container2.prototype.onDeactivation = function(serviceIdentifier, onDeactivation) {
    this._deactivations.add(serviceIdentifier, onDeactivation);
  };
  Container2.prototype.isBound = function(serviceIdentifier) {
    var bound = this._bindingDictionary.hasKey(serviceIdentifier);
    if (!bound && this.parent) {
      bound = this.parent.isBound(serviceIdentifier);
    }
    return bound;
  };
  Container2.prototype.isCurrentBound = function(serviceIdentifier) {
    return this._bindingDictionary.hasKey(serviceIdentifier);
  };
  Container2.prototype.isBoundNamed = function(serviceIdentifier, named2) {
    return this.isBoundTagged(serviceIdentifier, NAMED_TAG, named2);
  };
  Container2.prototype.isBoundTagged = function(serviceIdentifier, key, value) {
    var bound = false;
    if (this._bindingDictionary.hasKey(serviceIdentifier)) {
      var bindings = this._bindingDictionary.get(serviceIdentifier);
      var request_1 = createMockRequest(this, serviceIdentifier, key, value);
      bound = bindings.some(function(b) {
        return b.constraint(request_1);
      });
    }
    if (!bound && this.parent) {
      bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
    }
    return bound;
  };
  Container2.prototype.snapshot = function() {
    this._snapshots.push(ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware, this._activations.clone(), this._deactivations.clone(), this._moduleActivationStore.clone()));
  };
  Container2.prototype.restore = function() {
    var snapshot = this._snapshots.pop();
    if (snapshot === void 0) {
      throw new Error(NO_MORE_SNAPSHOTS_AVAILABLE);
    }
    this._bindingDictionary = snapshot.bindings;
    this._activations = snapshot.activations;
    this._deactivations = snapshot.deactivations;
    this._middleware = snapshot.middleware;
    this._moduleActivationStore = snapshot.moduleActivationStore;
  };
  Container2.prototype.createChild = function(containerOptions) {
    var child = new Container2(containerOptions || this.options);
    child.parent = this;
    return child;
  };
  Container2.prototype.applyMiddleware = function() {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      middlewares[_i] = arguments[_i];
    }
    var initial = this._middleware ? this._middleware : this._planAndResolve();
    this._middleware = middlewares.reduce(function(prev, curr) {
      return curr(prev);
    }, initial);
  };
  Container2.prototype.applyCustomMetadataReader = function(metadataReader) {
    this._metadataReader = metadataReader;
  };
  Container2.prototype.get = function(serviceIdentifier) {
    var getArgs = this._getNotAllArgs(serviceIdentifier, false);
    return this._getButThrowIfAsync(getArgs);
  };
  Container2.prototype.getAsync = function(serviceIdentifier) {
    return __awaiter$3(this, void 0, void 0, function() {
      var getArgs;
      return __generator$3(this, function(_a) {
        getArgs = this._getNotAllArgs(serviceIdentifier, false);
        return [2, this._get(getArgs)];
      });
    });
  };
  Container2.prototype.getTagged = function(serviceIdentifier, key, value) {
    var getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
    return this._getButThrowIfAsync(getArgs);
  };
  Container2.prototype.getTaggedAsync = function(serviceIdentifier, key, value) {
    return __awaiter$3(this, void 0, void 0, function() {
      var getArgs;
      return __generator$3(this, function(_a) {
        getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
        return [2, this._get(getArgs)];
      });
    });
  };
  Container2.prototype.getNamed = function(serviceIdentifier, named2) {
    return this.getTagged(serviceIdentifier, NAMED_TAG, named2);
  };
  Container2.prototype.getNamedAsync = function(serviceIdentifier, named2) {
    return this.getTaggedAsync(serviceIdentifier, NAMED_TAG, named2);
  };
  Container2.prototype.getAll = function(serviceIdentifier) {
    var getArgs = this._getAllArgs(serviceIdentifier);
    return this._getButThrowIfAsync(getArgs);
  };
  Container2.prototype.getAllAsync = function(serviceIdentifier) {
    var getArgs = this._getAllArgs(serviceIdentifier);
    return this._getAll(getArgs);
  };
  Container2.prototype.getAllTagged = function(serviceIdentifier, key, value) {
    var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
    return this._getButThrowIfAsync(getArgs);
  };
  Container2.prototype.getAllTaggedAsync = function(serviceIdentifier, key, value) {
    var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
    return this._getAll(getArgs);
  };
  Container2.prototype.getAllNamed = function(serviceIdentifier, named2) {
    return this.getAllTagged(serviceIdentifier, NAMED_TAG, named2);
  };
  Container2.prototype.getAllNamedAsync = function(serviceIdentifier, named2) {
    return this.getAllTaggedAsync(serviceIdentifier, NAMED_TAG, named2);
  };
  Container2.prototype.resolve = function(constructorFunction) {
    var isBound = this.isBound(constructorFunction);
    if (!isBound) {
      this.bind(constructorFunction).toSelf();
    }
    var resolved = this.get(constructorFunction);
    if (!isBound) {
      this.unbind(constructorFunction);
    }
    return resolved;
  };
  Container2.prototype._preDestroy = function(constructor, instance) {
    if (Reflect.hasMetadata(PRE_DESTROY, constructor)) {
      var data = Reflect.getMetadata(PRE_DESTROY, constructor);
      return instance[data.value]();
    }
  };
  Container2.prototype._removeModuleHandlers = function(moduleId) {
    var moduleActivationsHandlers = this._moduleActivationStore.remove(moduleId);
    this._activations.removeIntersection(moduleActivationsHandlers.onActivations);
    this._deactivations.removeIntersection(moduleActivationsHandlers.onDeactivations);
  };
  Container2.prototype._removeModuleBindings = function(moduleId) {
    return this._bindingDictionary.removeByCondition(function(binding) {
      return binding.moduleId === moduleId;
    });
  };
  Container2.prototype._deactivate = function(binding, instance) {
    var _this = this;
    var constructor = Object.getPrototypeOf(instance).constructor;
    try {
      if (this._deactivations.hasKey(binding.serviceIdentifier)) {
        var result = this._deactivateContainer(instance, this._deactivations.get(binding.serviceIdentifier).values());
        if (isPromise(result)) {
          return this._handleDeactivationError(result.then(function() {
            return _this._propagateContainerDeactivationThenBindingAndPreDestroyAsync(binding, instance, constructor);
          }), constructor);
        }
      }
      var propagateDeactivationResult = this._propagateContainerDeactivationThenBindingAndPreDestroy(binding, instance, constructor);
      if (isPromise(propagateDeactivationResult)) {
        return this._handleDeactivationError(propagateDeactivationResult, constructor);
      }
    } catch (ex) {
      throw new Error(ON_DEACTIVATION_ERROR(constructor.name, ex.message));
    }
  };
  Container2.prototype._handleDeactivationError = function(asyncResult, constructor) {
    return __awaiter$3(this, void 0, void 0, function() {
      var ex_1;
      return __generator$3(this, function(_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, asyncResult];
          case 1:
            _a.sent();
            return [3, 3];
          case 2:
            ex_1 = _a.sent();
            throw new Error(ON_DEACTIVATION_ERROR(constructor.name, ex_1.message));
          case 3:
            return [2];
        }
      });
    });
  };
  Container2.prototype._deactivateContainer = function(instance, deactivationsIterator) {
    var _this = this;
    var deactivation = deactivationsIterator.next();
    while (deactivation.value) {
      var result = deactivation.value(instance);
      if (isPromise(result)) {
        return result.then(function() {
          return _this._deactivateContainerAsync(instance, deactivationsIterator);
        });
      }
      deactivation = deactivationsIterator.next();
    }
  };
  Container2.prototype._deactivateContainerAsync = function(instance, deactivationsIterator) {
    return __awaiter$3(this, void 0, void 0, function() {
      var deactivation;
      return __generator$3(this, function(_a) {
        switch (_a.label) {
          case 0:
            deactivation = deactivationsIterator.next();
            _a.label = 1;
          case 1:
            if (!deactivation.value)
              return [3, 3];
            return [4, deactivation.value(instance)];
          case 2:
            _a.sent();
            deactivation = deactivationsIterator.next();
            return [3, 1];
          case 3:
            return [2];
        }
      });
    });
  };
  Container2.prototype._getContainerModuleHelpersFactory = function() {
    var _this = this;
    var setModuleId = function(bindingToSyntax, moduleId) {
      bindingToSyntax._binding.moduleId = moduleId;
    };
    var getBindFunction = function(moduleId) {
      return function(serviceIdentifier) {
        var bindingToSyntax = _this.bind(serviceIdentifier);
        setModuleId(bindingToSyntax, moduleId);
        return bindingToSyntax;
      };
    };
    var getUnbindFunction = function() {
      return function(serviceIdentifier) {
        return _this.unbind(serviceIdentifier);
      };
    };
    var getUnbindAsyncFunction = function() {
      return function(serviceIdentifier) {
        return _this.unbindAsync(serviceIdentifier);
      };
    };
    var getIsboundFunction = function() {
      return function(serviceIdentifier) {
        return _this.isBound(serviceIdentifier);
      };
    };
    var getRebindFunction = function(moduleId) {
      return function(serviceIdentifier) {
        var bindingToSyntax = _this.rebind(serviceIdentifier);
        setModuleId(bindingToSyntax, moduleId);
        return bindingToSyntax;
      };
    };
    var getOnActivationFunction = function(moduleId) {
      return function(serviceIdentifier, onActivation) {
        _this._moduleActivationStore.addActivation(moduleId, serviceIdentifier, onActivation);
        _this.onActivation(serviceIdentifier, onActivation);
      };
    };
    var getOnDeactivationFunction = function(moduleId) {
      return function(serviceIdentifier, onDeactivation) {
        _this._moduleActivationStore.addDeactivation(moduleId, serviceIdentifier, onDeactivation);
        _this.onDeactivation(serviceIdentifier, onDeactivation);
      };
    };
    return function(mId) {
      return {
        bindFunction: getBindFunction(mId),
        isboundFunction: getIsboundFunction(),
        onActivationFunction: getOnActivationFunction(mId),
        onDeactivationFunction: getOnDeactivationFunction(mId),
        rebindFunction: getRebindFunction(mId),
        unbindFunction: getUnbindFunction(),
        unbindAsyncFunction: getUnbindAsyncFunction()
      };
    };
  };
  Container2.prototype._getAll = function(getArgs) {
    return Promise.all(this._get(getArgs));
  };
  Container2.prototype._get = function(getArgs) {
    var planAndResolveArgs = __assign$1(__assign$1({}, getArgs), {contextInterceptor: function(context) {
      return context;
    }, targetType: TargetTypeEnum.Variable});
    if (this._middleware) {
      var middlewareResult = this._middleware(planAndResolveArgs);
      if (middlewareResult === void 0 || middlewareResult === null) {
        throw new Error(INVALID_MIDDLEWARE_RETURN);
      }
      return middlewareResult;
    }
    return this._planAndResolve()(planAndResolveArgs);
  };
  Container2.prototype._getButThrowIfAsync = function(getArgs) {
    var result = this._get(getArgs);
    if (isPromiseOrContainsPromise(result)) {
      throw new Error(LAZY_IN_SYNC(getArgs.serviceIdentifier));
    }
    return result;
  };
  Container2.prototype._getAllArgs = function(serviceIdentifier) {
    var getAllArgs = {
      avoidConstraints: true,
      isMultiInject: true,
      serviceIdentifier
    };
    return getAllArgs;
  };
  Container2.prototype._getNotAllArgs = function(serviceIdentifier, isMultiInject, key, value) {
    var getNotAllArgs = {
      avoidConstraints: false,
      isMultiInject,
      serviceIdentifier,
      key,
      value
    };
    return getNotAllArgs;
  };
  Container2.prototype._planAndResolve = function() {
    var _this = this;
    return function(args) {
      var context = plan(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
      context = args.contextInterceptor(context);
      var result = resolve(context);
      return result;
    };
  };
  Container2.prototype._deactivateIfSingleton = function(binding) {
    var _this = this;
    if (!binding.activated) {
      return;
    }
    if (isPromise(binding.cache)) {
      return binding.cache.then(function(resolved) {
        return _this._deactivate(binding, resolved);
      });
    }
    return this._deactivate(binding, binding.cache);
  };
  Container2.prototype._deactivateSingletons = function(bindings) {
    for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
      var binding = bindings_1[_i];
      var result = this._deactivateIfSingleton(binding);
      if (isPromise(result)) {
        throw new Error(ASYNC_UNBIND_REQUIRED);
      }
    }
  };
  Container2.prototype._deactivateSingletonsAsync = function(bindings) {
    return __awaiter$3(this, void 0, void 0, function() {
      var _this = this;
      return __generator$3(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, Promise.all(bindings.map(function(b) {
              return _this._deactivateIfSingleton(b);
            }))];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  Container2.prototype._propagateContainerDeactivationThenBindingAndPreDestroy = function(binding, instance, constructor) {
    if (this.parent) {
      return this._deactivate.bind(this.parent)(binding, instance);
    } else {
      return this._bindingDeactivationAndPreDestroy(binding, instance, constructor);
    }
  };
  Container2.prototype._propagateContainerDeactivationThenBindingAndPreDestroyAsync = function(binding, instance, constructor) {
    return __awaiter$3(this, void 0, void 0, function() {
      return __generator$3(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!this.parent)
              return [3, 2];
            return [4, this._deactivate.bind(this.parent)(binding, instance)];
          case 1:
            _a.sent();
            return [3, 4];
          case 2:
            return [4, this._bindingDeactivationAndPreDestroyAsync(binding, instance, constructor)];
          case 3:
            _a.sent();
            _a.label = 4;
          case 4:
            return [2];
        }
      });
    });
  };
  Container2.prototype._removeServiceFromDictionary = function(serviceIdentifier) {
    try {
      this._bindingDictionary.remove(serviceIdentifier);
    } catch (e) {
      throw new Error(CANNOT_UNBIND + " " + getServiceIdentifierAsString(serviceIdentifier));
    }
  };
  Container2.prototype._bindingDeactivationAndPreDestroy = function(binding, instance, constructor) {
    var _this = this;
    if (typeof binding.onDeactivation === "function") {
      var result = binding.onDeactivation(instance);
      if (isPromise(result)) {
        return result.then(function() {
          return _this._preDestroy(constructor, instance);
        });
      }
    }
    return this._preDestroy(constructor, instance);
  };
  Container2.prototype._bindingDeactivationAndPreDestroyAsync = function(binding, instance, constructor) {
    return __awaiter$3(this, void 0, void 0, function() {
      return __generator$3(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!(typeof binding.onDeactivation === "function"))
              return [3, 2];
            return [4, binding.onDeactivation(instance)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            return [4, this._preDestroy(constructor, instance)];
          case 3:
            _a.sent();
            return [2];
        }
      });
    });
  };
  return Container2;
}();
var ContainerModule = function() {
  function ContainerModule2(registry) {
    this.id = id();
    this.registry = registry;
  }
  return ContainerModule2;
}();
var AsyncContainerModule = function() {
  function AsyncContainerModule2(registry) {
    this.id = id();
    this.registry = registry;
  }
  return AsyncContainerModule2;
}();
function getFirstArrayDuplicate(array) {
  var seenValues = new Set();
  for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var entry = array_1[_i];
    if (seenValues.has(entry)) {
      return entry;
    } else {
      seenValues.add(entry);
    }
  }
  return void 0;
}
function targetIsConstructorFunction(target) {
  return target.prototype !== void 0;
}
function _throwIfMethodParameter(parameterName) {
  if (parameterName !== void 0) {
    throw new Error(INVALID_DECORATOR_OPERATION);
  }
}
function tagParameter(annotationTarget, parameterName, parameterIndex, metadata) {
  _throwIfMethodParameter(parameterName);
  _tagParameterOrProperty(TAGGED, annotationTarget, parameterIndex.toString(), metadata);
}
function tagProperty(annotationTarget, propertyName, metadata) {
  if (targetIsConstructorFunction(annotationTarget)) {
    throw new Error(INVALID_DECORATOR_OPERATION);
  }
  _tagParameterOrProperty(TAGGED_PROP, annotationTarget.constructor, propertyName, metadata);
}
function _ensureNoMetadataKeyDuplicates(metadata) {
  var metadatas = [];
  if (Array.isArray(metadata)) {
    metadatas = metadata;
    var duplicate = getFirstArrayDuplicate(metadatas.map(function(md) {
      return md.key;
    }));
    if (duplicate !== void 0) {
      throw new Error(DUPLICATED_METADATA + " " + duplicate.toString());
    }
  } else {
    metadatas = [metadata];
  }
  return metadatas;
}
function _tagParameterOrProperty(metadataKey, annotationTarget, key, metadata) {
  var metadatas = _ensureNoMetadataKeyDuplicates(metadata);
  var paramsOrPropertiesMetadata = {};
  if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
    paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
  }
  var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
  if (paramOrPropertyMetadata === void 0) {
    paramOrPropertyMetadata = [];
  } else {
    var _loop_1 = function(m2) {
      if (metadatas.some(function(md) {
        return md.key === m2.key;
      })) {
        throw new Error(DUPLICATED_METADATA + " " + m2.key.toString());
      }
    };
    for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
      var m = paramOrPropertyMetadata_1[_i];
      _loop_1(m);
    }
  }
  paramOrPropertyMetadata.push.apply(paramOrPropertyMetadata, metadatas);
  paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
  Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
}
function createTaggedDecorator(metadata) {
  return function(target, targetKey, indexOrPropertyDescriptor) {
    if (typeof indexOrPropertyDescriptor === "number") {
      tagParameter(target, targetKey, indexOrPropertyDescriptor, metadata);
    } else {
      tagProperty(target, targetKey, metadata);
    }
  };
}
function _decorate(decorators, target) {
  Reflect.decorate(decorators, target);
}
function _param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function decorate(decorator, target, parameterIndexOrProperty) {
  if (typeof parameterIndexOrProperty === "number") {
    _decorate([_param(parameterIndexOrProperty, decorator)], target);
  } else if (typeof parameterIndexOrProperty === "string") {
    Reflect.decorate([decorator], target, parameterIndexOrProperty);
  } else {
    _decorate([decorator], target);
  }
}
function injectable() {
  return function(target) {
    if (Reflect.hasOwnMetadata(PARAM_TYPES, target)) {
      throw new Error(DUPLICATED_INJECTABLE_DECORATOR);
    }
    var types = Reflect.getMetadata(DESIGN_PARAM_TYPES, target) || [];
    Reflect.defineMetadata(PARAM_TYPES, types, target);
    return target;
  };
}
function tagged(metadataKey, metadataValue) {
  return createTaggedDecorator(new Metadata(metadataKey, metadataValue));
}
function named(name) {
  return createTaggedDecorator(new Metadata(NAMED_TAG, name));
}
function injectBase(metadataKey) {
  return function(serviceIdentifier) {
    return function(target, targetKey, indexOrPropertyDescriptor) {
      if (serviceIdentifier === void 0) {
        var className = typeof target === "function" ? target.name : target.constructor.name;
        throw new Error(UNDEFINED_INJECT_ANNOTATION(className));
      }
      return createTaggedDecorator(new Metadata(metadataKey, serviceIdentifier))(target, targetKey, indexOrPropertyDescriptor);
    };
  };
}
var inject = injectBase(INJECT_TAG);
function optional() {
  return createTaggedDecorator(new Metadata(OPTIONAL_TAG, true));
}
function unmanaged() {
  return function(target, targetKey, index) {
    var metadata = new Metadata(UNMANAGED_TAG, true);
    tagParameter(target, targetKey, index, metadata);
  };
}
var multiInject = injectBase(MULTI_INJECT_TAG);
function targetName(name) {
  return function(target, targetKey, index) {
    var metadata = new Metadata(NAME_TAG, name);
    tagParameter(target, targetKey, index, metadata);
  };
}
function propertyEventDecorator(eventKey, errorMessage) {
  return function() {
    return function(target, propertyKey) {
      var metadata = new Metadata(eventKey, propertyKey);
      if (Reflect.hasOwnMetadata(eventKey, target.constructor)) {
        throw new Error(errorMessage);
      }
      Reflect.defineMetadata(eventKey, metadata, target.constructor);
    };
  };
}
var postConstruct = propertyEventDecorator(POST_CONSTRUCT, MULTIPLE_POST_CONSTRUCT_METHODS);
var preDestroy = propertyEventDecorator(PRE_DESTROY, MULTIPLE_PRE_DESTROY_METHODS);
var interfaces;
(function(interfaces2) {
})(interfaces || (interfaces = {}));
var METADATA_KEY = keys;
export {AsyncContainerModule, BindingScopeEnum, BindingTypeEnum, Container, ContainerModule, LazyServiceIdentifer, METADATA_KEY, MetadataReader, TargetTypeEnum, createTaggedDecorator, decorate, getServiceIdentifierAsString, id, inject, injectable, interfaces, multiBindToService, multiInject, named, namedConstraint, optional, postConstruct, preDestroy, tagged, taggedConstraint, targetName, traverseAncerstors, typeConstraint, unmanaged};
export default null;
