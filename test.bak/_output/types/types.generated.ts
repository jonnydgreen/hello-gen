/* eslint-disable */

import { GraphQLResolveInfo } from "graphql";

import { MercuriusContext as Context } from "mercurius";

/** Marks a type as nullable. */
export type Maybe<T> = T | undefined;

/** Marks a type as a nullable Promise. */
export type MaybePromise<T> = Promise<T> | T;

/** Constructs a ParentType from an input type. */
export type ParentType<T> = {
  [TKey in keyof T]: T[TKey] extends (...args: any) => infer TReturn ? TReturn
    : T[TKey];
};

/** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
export type ID = (string | number) & {
  __opaque: "ID";
};

/** An ISO-8601 encoded date string. */
export type Date = any & {
  __opaque: "Date";
};

/** An ISO-8601 encoded UTC date string. */
export type DateTime = any & {
  __opaque: "DateTime";
};

/** A Git object ID. */
export type GitObjectID = any & {
  __opaque: "GitObjectID";
};

/** A fully qualified reference name (e.g. `refs/heads/master`). */
export type GitRefname = any & {
  __opaque: "GitRefname";
};

/** Git SSH string */
export type GitSSHRemote = any & {
  __opaque: "GitSSHRemote";
};

/** An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC. */
export type GitTimestamp = any & {
  __opaque: "GitTimestamp";
};

/** A string containing HTML code. */
export type HTML = any & {
  __opaque: "HTML";
};

/** An ISO-8601 encoded UTC date string with millisecond precision. */
export type PreciseDateTime = any & {
  __opaque: "PreciseDateTime";
};

/** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
export type URI = any & {
  __opaque: "URI";
};

/** A valid x509 certificate string */
export type X509Certificate = any & {
  __opaque: "X509Certificate";
};

/** Properties by which Audit Log connections can be ordered. */
export enum AuditLogOrderField {
  /** Order audit log entries by timestamp */
  CREATED_AT = "CREATED_AT",
}

/** Represents an annotation's information level. */
export enum CheckAnnotationLevel {
  /** An annotation indicating an inescapable error. */
  FAILURE = "FAILURE",
  /** An annotation indicating some information. */
  NOTICE = "NOTICE",
  /** An annotation indicating an ignorable error. */
  WARNING = "WARNING",
}

/** The possible states for a check suite or run conclusion. */
export enum CheckConclusionState {
  /** The check suite or run requires action. */
  ACTION_REQUIRED = "ACTION_REQUIRED",
  /** The check suite or run has been cancelled. */
  CANCELLED = "CANCELLED",
  /** The check suite or run has failed. */
  FAILURE = "FAILURE",
  /** The check suite or run was neutral. */
  NEUTRAL = "NEUTRAL",
  /** The check suite or run was skipped. */
  SKIPPED = "SKIPPED",
  /** The check suite or run was marked stale by GitHub. Only GitHub can use this conclusion. */
  STALE = "STALE",
  /** The check suite or run has failed at startup. */
  STARTUP_FAILURE = "STARTUP_FAILURE",
  /** The check suite or run has succeeded. */
  SUCCESS = "SUCCESS",
  /** The check suite or run has timed out. */
  TIMED_OUT = "TIMED_OUT",
}

/** The possible types of check runs. */
export enum CheckRunType {
  /** Every check run available. */
  ALL = "ALL",
  /** The latest check run. */
  LATEST = "LATEST",
}

/** The possible states for a check suite or run status. */
export enum CheckStatusState {
  /** The check suite or run has been completed. */
  COMPLETED = "COMPLETED",
  /** The check suite or run is in progress. */
  IN_PROGRESS = "IN_PROGRESS",
  /** The check suite or run is in pending state. */
  PENDING = "PENDING",
  /** The check suite or run has been queued. */
  QUEUED = "QUEUED",
  /** The check suite or run has been requested. */
  REQUESTED = "REQUESTED",
  /** The check suite or run is in waiting state. */
  WAITING = "WAITING",
}

/** Collaborators affiliation level with a subject. */
export enum CollaboratorAffiliation {
  /** All collaborators the authenticated user can see. */
  ALL = "ALL",
  /** All collaborators with permissions to an organization-owned subject, regardless of organization membership status. */
  DIRECT = "DIRECT",
  /** All outside collaborators of an organization-owned subject. */
  OUTSIDE = "OUTSIDE",
}

/** A comment author association with repository. */
export enum CommentAuthorAssociation {
  /** Author has been invited to collaborate on the repository. */
  COLLABORATOR = "COLLABORATOR",
  /** Author has previously committed to the repository. */
  CONTRIBUTOR = "CONTRIBUTOR",
  /** Author has not previously committed to GitHub. */
  FIRST_TIMER = "FIRST_TIMER",
  /** Author has not previously committed to the repository. */
  FIRST_TIME_CONTRIBUTOR = "FIRST_TIME_CONTRIBUTOR",
  /** Author is a placeholder for an unclaimed user. */
  MANNEQUIN = "MANNEQUIN",
  /** Author is a member of the organization that owns the repository. */
  MEMBER = "MEMBER",
  /** Author has no association with the repository. */
  NONE = "NONE",
  /** Author is the owner of the repository. */
  OWNER = "OWNER",
}

/** The possible errors that will prevent a user from updating a comment. */
export enum CommentCannotUpdateReason {
  /** Unable to create comment because repository is archived. */
  ARCHIVED = "ARCHIVED",
  /** You cannot update this comment */
  DENIED = "DENIED",
  /** You must be the author or have write access to this repository to update this comment. */
  INSUFFICIENT_ACCESS = "INSUFFICIENT_ACCESS",
  /** Unable to create comment because issue is locked. */
  LOCKED = "LOCKED",
  /** You must be logged in to update this comment. */
  LOGIN_REQUIRED = "LOGIN_REQUIRED",
  /** Repository is under maintenance. */
  MAINTENANCE = "MAINTENANCE",
  /** At least one email address must be verified to update this comment. */
  VERIFIED_EMAIL_REQUIRED = "VERIFIED_EMAIL_REQUIRED",
}

/** Properties by which commit contribution connections can be ordered. */
export enum CommitContributionOrderField {
  /** Order commit contributions by how many commits they represent. */
  COMMIT_COUNT = "COMMIT_COUNT",
  /** Order commit contributions by when they were made. */
  OCCURRED_AT = "OCCURRED_AT",
}

/** Varying levels of contributions from none to many. */
export enum ContributionLevel {
  /** Lowest 25% of days of contributions. */
  FIRST_QUARTILE = "FIRST_QUARTILE",
  /** Highest 25% of days of contributions. More contributions than the third quartile. */
  FOURTH_QUARTILE = "FOURTH_QUARTILE",
  /** No contributions occurred. */
  NONE = "NONE",
  /** Second lowest 25% of days of contributions. More contributions than the first quartile. */
  SECOND_QUARTILE = "SECOND_QUARTILE",
  /** Second highest 25% of days of contributions. More contributions than second quartile, less than the fourth quartile. */
  THIRD_QUARTILE = "THIRD_QUARTILE",
}

/** The possible default permissions for repositories. */
export enum DefaultRepositoryPermissionField {
  /** Can read, write, and administrate repos by default */
  ADMIN = "ADMIN",
  /** No access */
  NONE = "NONE",
  /** Can read repos by default */
  READ = "READ",
  /** Can read and write repos by default */
  WRITE = "WRITE",
}

/** Properties by which deployment connections can be ordered. */
export enum DeploymentOrderField {
  /** Order collection by creation time */
  CREATED_AT = "CREATED_AT",
}

/** The possible protection rule types. */
export enum DeploymentProtectionRuleType {
  /** Required reviewers */
  REQUIRED_REVIEWERS = "REQUIRED_REVIEWERS",
  /** Wait timer */
  WAIT_TIMER = "WAIT_TIMER",
}

/** The possible states for a deployment review. */
export enum DeploymentReviewState {
  /** The deployment was approved. */
  APPROVED = "APPROVED",
  /** The deployment was rejected. */
  REJECTED = "REJECTED",
}

/** The possible states in which a deployment can be. */
export enum DeploymentState {
  /** The pending deployment was not updated after 30 minutes. */
  ABANDONED = "ABANDONED",
  /** The deployment is currently active. */
  ACTIVE = "ACTIVE",
  /** An inactive transient deployment. */
  DESTROYED = "DESTROYED",
  /** The deployment experienced an error. */
  ERROR = "ERROR",
  /** The deployment has failed. */
  FAILURE = "FAILURE",
  /** The deployment is inactive. */
  INACTIVE = "INACTIVE",
  /** The deployment is in progress. */
  IN_PROGRESS = "IN_PROGRESS",
  /** The deployment is pending. */
  PENDING = "PENDING",
  /** The deployment has queued */
  QUEUED = "QUEUED",
  /** The deployment is waiting. */
  WAITING = "WAITING",
}

/** The possible states for a deployment status. */
export enum DeploymentStatusState {
  /** The deployment experienced an error. */
  ERROR = "ERROR",
  /** The deployment has failed. */
  FAILURE = "FAILURE",
  /** The deployment is inactive. */
  INACTIVE = "INACTIVE",
  /** The deployment is in progress. */
  IN_PROGRESS = "IN_PROGRESS",
  /** The deployment is pending. */
  PENDING = "PENDING",
  /** The deployment is queued */
  QUEUED = "QUEUED",
  /** The deployment was successful. */
  SUCCESS = "SUCCESS",
  /** The deployment is waiting. */
  WAITING = "WAITING",
}

/** The possible sides of a diff. */
export enum DiffSide {
  /** The left side of the diff. */
  LEFT = "LEFT",
  /** The right side of the diff. */
  RIGHT = "RIGHT",
}

/** Properties by which discussion connections can be ordered. */
export enum DiscussionOrderField {
  /** Order discussions by creation time. */
  CREATED_AT = "CREATED_AT",
  /** Order discussions by most recent modification time. */
  UPDATED_AT = "UPDATED_AT",
}

/** Properties by which enterprise administrator invitation connections can be ordered. */
export enum EnterpriseAdministratorInvitationOrderField {
  /** Order enterprise administrator member invitations by creation time */
  CREATED_AT = "CREATED_AT",
}

/** The possible administrator roles in an enterprise account. */
export enum EnterpriseAdministratorRole {
  /** Represents a billing manager of the enterprise account. */
  BILLING_MANAGER = "BILLING_MANAGER",
  /** Represents an owner of the enterprise account. */
  OWNER = "OWNER",
}

/** The possible values for the enterprise default repository permission setting. */
export enum EnterpriseDefaultRepositoryPermissionSettingValue {
  /** Organization members will be able to clone, pull, push, and add new collaborators to all organization repositories. */
  ADMIN = "ADMIN",
  /** Organization members will only be able to clone and pull public repositories. */
  NONE = "NONE",
  /** Organizations in the enterprise choose default repository permissions for their members. */
  NO_POLICY = "NO_POLICY",
  /** Organization members will be able to clone and pull all organization repositories. */
  READ = "READ",
  /** Organization members will be able to clone, pull, and push all organization repositories. */
  WRITE = "WRITE",
}

/** The possible values for an enabled/disabled enterprise setting. */
export enum EnterpriseEnabledDisabledSettingValue {
  /** The setting is disabled for organizations in the enterprise. */
  DISABLED = "DISABLED",
  /** The setting is enabled for organizations in the enterprise. */
  ENABLED = "ENABLED",
  /** There is no policy set for organizations in the enterprise. */
  NO_POLICY = "NO_POLICY",
}

/** The possible values for an enabled/no policy enterprise setting. */
export enum EnterpriseEnabledSettingValue {
  /** The setting is enabled for organizations in the enterprise. */
  ENABLED = "ENABLED",
  /** There is no policy set for organizations in the enterprise. */
  NO_POLICY = "NO_POLICY",
}

/** Properties by which enterprise member connections can be ordered. */
export enum EnterpriseMemberOrderField {
  /** Order enterprise members by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order enterprise members by login */
  LOGIN = "LOGIN",
}

/** The possible values for the enterprise members can create repositories setting. */
export enum EnterpriseMembersCanCreateRepositoriesSettingValue {
  /** Members will be able to create public and private repositories. */
  ALL = "ALL",
  /** Members will not be able to create public or private repositories. */
  DISABLED = "DISABLED",
  /** Organization administrators choose whether to allow members to create repositories. */
  NO_POLICY = "NO_POLICY",
  /** Members will be able to create only private repositories. */
  PRIVATE = "PRIVATE",
  /** Members will be able to create only public repositories. */
  PUBLIC = "PUBLIC",
}

/** The possible values for the members can make purchases setting. */
export enum EnterpriseMembersCanMakePurchasesSettingValue {
  /** The setting is disabled for organizations in the enterprise. */
  DISABLED = "DISABLED",
  /** The setting is enabled for organizations in the enterprise. */
  ENABLED = "ENABLED",
}

/** Properties by which Enterprise Server installation connections can be ordered. */
export enum EnterpriseServerInstallationOrderField {
  /** Order Enterprise Server installations by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order Enterprise Server installations by customer name */
  CUSTOMER_NAME = "CUSTOMER_NAME",
  /** Order Enterprise Server installations by host name */
  HOST_NAME = "HOST_NAME",
}

/** Properties by which Enterprise Server user account email connections can be ordered. */
export enum EnterpriseServerUserAccountEmailOrderField {
  /** Order emails by email */
  EMAIL = "EMAIL",
}

/** Properties by which Enterprise Server user account connections can be ordered. */
export enum EnterpriseServerUserAccountOrderField {
  /** Order user accounts by login */
  LOGIN = "LOGIN",
  /** Order user accounts by creation time on the Enterprise Server installation */
  REMOTE_CREATED_AT = "REMOTE_CREATED_AT",
}

/** Properties by which Enterprise Server user accounts upload connections can be ordered. */
export enum EnterpriseServerUserAccountsUploadOrderField {
  /** Order user accounts uploads by creation time */
  CREATED_AT = "CREATED_AT",
}

/** Synchronization state of the Enterprise Server user accounts upload */
export enum EnterpriseServerUserAccountsUploadSyncState {
  /** The synchronization of the upload failed. */
  FAILURE = "FAILURE",
  /** The synchronization of the upload is pending. */
  PENDING = "PENDING",
  /** The synchronization of the upload succeeded. */
  SUCCESS = "SUCCESS",
}

/** The possible roles for enterprise membership. */
export enum EnterpriseUserAccountMembershipRole {
  /** The user is a member of the enterprise membership. */
  MEMBER = "MEMBER",
  /** The user is an owner of the enterprise membership. */
  OWNER = "OWNER",
}

/** The possible GitHub Enterprise deployments where this user can exist. */
export enum EnterpriseUserDeployment {
  /** The user is part of a GitHub Enterprise Cloud deployment. */
  CLOUD = "CLOUD",
  /** The user is part of a GitHub Enterprise Server deployment. */
  SERVER = "SERVER",
}

/** The possible viewed states of a file . */
export enum FileViewedState {
  /** The file has new changes since last viewed. */
  DISMISSED = "DISMISSED",
  /** The file has not been marked as viewed. */
  UNVIEWED = "UNVIEWED",
  /** The file has been marked as viewed. */
  VIEWED = "VIEWED",
}

/** The possible funding platforms for repository funding links. */
export enum FundingPlatform {
  /** Community Bridge funding platform. */
  COMMUNITY_BRIDGE = "COMMUNITY_BRIDGE",
  /** Custom funding platform. */
  CUSTOM = "CUSTOM",
  /** GitHub funding platform. */
  GITHUB = "GITHUB",
  /** IssueHunt funding platform. */
  ISSUEHUNT = "ISSUEHUNT",
  /** Ko-fi funding platform. */
  KO_FI = "KO_FI",
  /** Liberapay funding platform. */
  LIBERAPAY = "LIBERAPAY",
  /** Open Collective funding platform. */
  OPEN_COLLECTIVE = "OPEN_COLLECTIVE",
  /** Otechie funding platform. */
  OTECHIE = "OTECHIE",
  /** Patreon funding platform. */
  PATREON = "PATREON",
  /** Tidelift funding platform. */
  TIDELIFT = "TIDELIFT",
}

/** Properties by which gist connections can be ordered. */
export enum GistOrderField {
  /** Order gists by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order gists by push time */
  PUSHED_AT = "PUSHED_AT",
  /** Order gists by update time */
  UPDATED_AT = "UPDATED_AT",
}

/** The privacy of a Gist */
export enum GistPrivacy {
  /** Gists that are public and secret */
  ALL = "ALL",
  /** Public */
  PUBLIC = "PUBLIC",
  /** Secret */
  SECRET = "SECRET",
}

/** The state of a Git signature. */
export enum GitSignatureState {
  /** The signing certificate or its chain could not be verified */
  BAD_CERT = "BAD_CERT",
  /** Invalid email used for signing */
  BAD_EMAIL = "BAD_EMAIL",
  /** Signing key expired */
  EXPIRED_KEY = "EXPIRED_KEY",
  /** Internal error - the GPG verification service misbehaved */
  GPGVERIFY_ERROR = "GPGVERIFY_ERROR",
  /** Internal error - the GPG verification service is unavailable at the moment */
  GPGVERIFY_UNAVAILABLE = "GPGVERIFY_UNAVAILABLE",
  /** Invalid signature */
  INVALID = "INVALID",
  /** Malformed signature */
  MALFORMED_SIG = "MALFORMED_SIG",
  /** The usage flags for the key that signed this don't allow signing */
  NOT_SIGNING_KEY = "NOT_SIGNING_KEY",
  /** Email used for signing not known to GitHub */
  NO_USER = "NO_USER",
  /** Valid signature, though certificate revocation check failed */
  OCSP_ERROR = "OCSP_ERROR",
  /** Valid signature, pending certificate revocation checking */
  OCSP_PENDING = "OCSP_PENDING",
  /** One or more certificates in chain has been revoked */
  OCSP_REVOKED = "OCSP_REVOKED",
  /** Key used for signing not known to GitHub */
  UNKNOWN_KEY = "UNKNOWN_KEY",
  /** Unknown signature type */
  UNKNOWN_SIG_TYPE = "UNKNOWN_SIG_TYPE",
  /** Unsigned */
  UNSIGNED = "UNSIGNED",
  /** Email used for signing unverified on GitHub */
  UNVERIFIED_EMAIL = "UNVERIFIED_EMAIL",
  /** Valid signature and verified by GitHub */
  VALID = "VALID",
}

/** The possible states in which authentication can be configured with an identity provider. */
export enum IdentityProviderConfigurationState {
  /** Authentication with an identity provider is configured but not enforced. */
  CONFIGURED = "CONFIGURED",
  /** Authentication with an identity provider is configured and enforced. */
  ENFORCED = "ENFORCED",
  /** Authentication with an identity provider is not configured. */
  UNCONFIGURED = "UNCONFIGURED",
}

/** The possible values for the IP allow list enabled setting. */
export enum IpAllowListEnabledSettingValue {
  /** The setting is disabled for the owner. */
  DISABLED = "DISABLED",
  /** The setting is enabled for the owner. */
  ENABLED = "ENABLED",
}

/** Properties by which IP allow list entry connections can be ordered. */
export enum IpAllowListEntryOrderField {
  /** Order IP allow list entries by the allow list value. */
  ALLOW_LIST_VALUE = "ALLOW_LIST_VALUE",
  /** Order IP allow list entries by creation time. */
  CREATED_AT = "CREATED_AT",
}

/** The possible values for the IP allow list configuration for installed GitHub Apps setting. */
export enum IpAllowListForInstalledAppsEnabledSettingValue {
  /** The setting is disabled for the owner. */
  DISABLED = "DISABLED",
  /** The setting is enabled for the owner. */
  ENABLED = "ENABLED",
}

/** Properties by which issue comment connections can be ordered. */
export enum IssueCommentOrderField {
  /** Order issue comments by update time */
  UPDATED_AT = "UPDATED_AT",
}

/** Properties by which issue connections can be ordered. */
export enum IssueOrderField {
  /** Order issues by comment count */
  COMMENTS = "COMMENTS",
  /** Order issues by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order issues by update time */
  UPDATED_AT = "UPDATED_AT",
}

/** The possible states of an issue. */
export enum IssueState {
  /** An issue that has been closed */
  CLOSED = "CLOSED",
  /** An issue that is still open */
  OPEN = "OPEN",
}

/** The possible item types found in a timeline. */
export enum IssueTimelineItemsItemType {
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  ADDED_TO_PROJECT_EVENT = "ADDED_TO_PROJECT_EVENT",
  /** Represents an 'assigned' event on any assignable object. */
  ASSIGNED_EVENT = "ASSIGNED_EVENT",
  /** Represents a 'closed' event on any `Closable`. */
  CLOSED_EVENT = "CLOSED_EVENT",
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  COMMENT_DELETED_EVENT = "COMMENT_DELETED_EVENT",
  /** Represents a 'connected' event on a given issue or pull request. */
  CONNECTED_EVENT = "CONNECTED_EVENT",
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  CONVERTED_NOTE_TO_ISSUE_EVENT = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  /** Represents a mention made by one issue or pull request to another. */
  CROSS_REFERENCED_EVENT = "CROSS_REFERENCED_EVENT",
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  DEMILESTONED_EVENT = "DEMILESTONED_EVENT",
  /** Represents a 'disconnected' event on a given issue or pull request. */
  DISCONNECTED_EVENT = "DISCONNECTED_EVENT",
  /** Represents a comment on an Issue. */
  ISSUE_COMMENT = "ISSUE_COMMENT",
  /** Represents a 'labeled' event on a given issue or pull request. */
  LABELED_EVENT = "LABELED_EVENT",
  /** Represents a 'locked' event on a given issue or pull request. */
  LOCKED_EVENT = "LOCKED_EVENT",
  /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
  MARKED_AS_DUPLICATE_EVENT = "MARKED_AS_DUPLICATE_EVENT",
  /** Represents a 'mentioned' event on a given issue or pull request. */
  MENTIONED_EVENT = "MENTIONED_EVENT",
  /** Represents a 'milestoned' event on a given issue or pull request. */
  MILESTONED_EVENT = "MILESTONED_EVENT",
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  MOVED_COLUMNS_IN_PROJECT_EVENT = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  /** Represents a 'pinned' event on a given issue or pull request. */
  PINNED_EVENT = "PINNED_EVENT",
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  REFERENCED_EVENT = "REFERENCED_EVENT",
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  REMOVED_FROM_PROJECT_EVENT = "REMOVED_FROM_PROJECT_EVENT",
  /** Represents a 'renamed' event on a given issue or pull request */
  RENAMED_TITLE_EVENT = "RENAMED_TITLE_EVENT",
  /** Represents a 'reopened' event on any `Closable`. */
  REOPENED_EVENT = "REOPENED_EVENT",
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  SUBSCRIBED_EVENT = "SUBSCRIBED_EVENT",
  /** Represents a 'transferred' event on a given issue or pull request. */
  TRANSFERRED_EVENT = "TRANSFERRED_EVENT",
  /** Represents an 'unassigned' event on any assignable object. */
  UNASSIGNED_EVENT = "UNASSIGNED_EVENT",
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  UNLABELED_EVENT = "UNLABELED_EVENT",
  /** Represents an 'unlocked' event on a given issue or pull request. */
  UNLOCKED_EVENT = "UNLOCKED_EVENT",
  /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
  UNMARKED_AS_DUPLICATE_EVENT = "UNMARKED_AS_DUPLICATE_EVENT",
  /** Represents an 'unpinned' event on a given issue or pull request. */
  UNPINNED_EVENT = "UNPINNED_EVENT",
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  UNSUBSCRIBED_EVENT = "UNSUBSCRIBED_EVENT",
  /** Represents a 'user_blocked' event on a given user. */
  USER_BLOCKED_EVENT = "USER_BLOCKED_EVENT",
}

/** Properties by which label connections can be ordered. */
export enum LabelOrderField {
  /** Order labels by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order labels by name */
  NAME = "NAME",
}

/** Properties by which language connections can be ordered. */
export enum LanguageOrderField {
  /** Order languages by the size of all files containing the language */
  SIZE = "SIZE",
}

/** The possible reasons that an issue or pull request was locked. */
export enum LockReason {
  /** The issue or pull request was locked because the conversation was off-topic. */
  OFF_TOPIC = "OFF_TOPIC",
  /** The issue or pull request was locked because the conversation was resolved. */
  RESOLVED = "RESOLVED",
  /** The issue or pull request was locked because the conversation was spam. */
  SPAM = "SPAM",
  /** The issue or pull request was locked because the conversation was too heated. */
  TOO_HEATED = "TOO_HEATED",
}

/** Detailed status information about a pull request merge. */
export enum MergeStateStatus {
  /** The head ref is out of date. */
  BEHIND = "BEHIND",
  /** The merge is blocked. */
  BLOCKED = "BLOCKED",
  /** Mergeable and passing commit status. */
  CLEAN = "CLEAN",
  /** The merge commit cannot be cleanly created. */
  DIRTY = "DIRTY",
  /** The merge is blocked due to the pull request being a draft. */
  DRAFT = "DRAFT",
  /** Mergeable with passing commit status and pre-receive hooks. */
  HAS_HOOKS = "HAS_HOOKS",
  /** The state cannot currently be determined. */
  UNKNOWN = "UNKNOWN",
  /** Mergeable with non-passing commit status. */
  UNSTABLE = "UNSTABLE",
}

/** Whether or not a PullRequest can be merged. */
export enum MergeableState {
  /** The pull request cannot be merged due to merge conflicts. */
  CONFLICTING = "CONFLICTING",
  /** The pull request can be merged. */
  MERGEABLE = "MERGEABLE",
  /** The mergeability of the pull request is still being calculated. */
  UNKNOWN = "UNKNOWN",
}

/** Properties by which milestone connections can be ordered. */
export enum MilestoneOrderField {
  /** Order milestones by when they were created. */
  CREATED_AT = "CREATED_AT",
  /** Order milestones by when they are due. */
  DUE_DATE = "DUE_DATE",
  /** Order milestones by their number. */
  NUMBER = "NUMBER",
  /** Order milestones by when they were last updated. */
  UPDATED_AT = "UPDATED_AT",
}

/** The possible states of a milestone. */
export enum MilestoneState {
  /** A milestone that has been closed. */
  CLOSED = "CLOSED",
  /** A milestone that is still open. */
  OPEN = "OPEN",
}

/** The possible values for the notification restriction setting. */
export enum NotificationRestrictionSettingValue {
  /** The setting is disabled for the owner. */
  DISABLED = "DISABLED",
  /** The setting is enabled for the owner. */
  ENABLED = "ENABLED",
}

/** The state of an OAuth Application when it was created. */
export enum OauthApplicationCreateAuditEntryState {
  /** The OAuth Application was active and allowed to have OAuth Accesses. */
  ACTIVE = "ACTIVE",
  /** The OAuth Application was in the process of being deleted. */
  PENDING_DELETION = "PENDING_DELETION",
  /** The OAuth Application was suspended from generating OAuth Accesses due to abuse or security concerns. */
  SUSPENDED = "SUSPENDED",
}

/** The corresponding operation type for the action */
export enum OperationType {
  /** An existing resource was accessed */
  ACCESS = "ACCESS",
  /** A resource performed an authentication event */
  AUTHENTICATION = "AUTHENTICATION",
  /** A new resource was created */
  CREATE = "CREATE",
  /** An existing resource was modified */
  MODIFY = "MODIFY",
  /** An existing resource was removed */
  REMOVE = "REMOVE",
  /** An existing resource was restored */
  RESTORE = "RESTORE",
  /** An existing resource was transferred between multiple resources */
  TRANSFER = "TRANSFER",
}

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  /** Specifies an ascending order for a given `orderBy` argument. */
  ASC = "ASC",
  /** Specifies a descending order for a given `orderBy` argument. */
  DESC = "DESC",
}

/** The permissions available to members on an Organization. */
export enum OrgAddMemberAuditEntryPermission {
  /** Can read, clone, push, and add collaborators to repositories. */
  ADMIN = "ADMIN",
  /** Can read and clone repositories. */
  READ = "READ",
}

/** The billing plans available for organizations. */
export enum OrgCreateAuditEntryBillingPlan {
  /** Team Plan */
  BUSINESS = "BUSINESS",
  /** Enterprise Cloud Plan */
  BUSINESS_PLUS = "BUSINESS_PLUS",
  /** Free Plan */
  FREE = "FREE",
  /** Tiered Per Seat Plan */
  TIERED_PER_SEAT = "TIERED_PER_SEAT",
  /** Legacy Unlimited Plan */
  UNLIMITED = "UNLIMITED",
}

/** The reason a billing manager was removed from an Organization. */
export enum OrgRemoveBillingManagerAuditEntryReason {
  /** SAML external identity missing */
  SAML_EXTERNAL_IDENTITY_MISSING = "SAML_EXTERNAL_IDENTITY_MISSING",
  /** SAML SSO enforcement requires an external identity */
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY =
    "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY",
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE =
    "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",
}

/** The type of membership a user has with an Organization. */
export enum OrgRemoveMemberAuditEntryMembershipType {
  /** Organization administrators have full access and can change several settings,
    including the names of repositories that belong to the Organization and Owners
    team membership. In addition, organization admins can delete the organization
    and all of its repositories. */
  ADMIN = "ADMIN",
  /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
  BILLING_MANAGER = "BILLING_MANAGER",
  /** A direct member is a user that is a member of the Organization. */
  DIRECT_MEMBER = "DIRECT_MEMBER",
  /** An outside collaborator is a person who isn't explicitly a member of the
    Organization, but who has Read, Write, or Admin permissions to one or more
    repositories in the organization. */
  OUTSIDE_COLLABORATOR = "OUTSIDE_COLLABORATOR",
  /** An unaffiliated collaborator is a person who is not a member of the
    Organization and does not have access to any repositories in the Organization. */
  UNAFFILIATED = "UNAFFILIATED",
}

/** The reason a member was removed from an Organization. */
export enum OrgRemoveMemberAuditEntryReason {
  /** SAML external identity missing */
  SAML_EXTERNAL_IDENTITY_MISSING = "SAML_EXTERNAL_IDENTITY_MISSING",
  /** SAML SSO enforcement requires an external identity */
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY =
    "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY",
  /** User was removed from organization during account recovery */
  TWO_FACTOR_ACCOUNT_RECOVERY = "TWO_FACTOR_ACCOUNT_RECOVERY",
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE =
    "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",
  /** User account has been deleted */
  USER_ACCOUNT_DELETED = "USER_ACCOUNT_DELETED",
}

/** The type of membership a user has with an Organization. */
export enum OrgRemoveOutsideCollaboratorAuditEntryMembershipType {
  /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
  BILLING_MANAGER = "BILLING_MANAGER",
  /** An outside collaborator is a person who isn't explicitly a member of the
    Organization, but who has Read, Write, or Admin permissions to one or more
    repositories in the organization. */
  OUTSIDE_COLLABORATOR = "OUTSIDE_COLLABORATOR",
  /** An unaffiliated collaborator is a person who is not a member of the
    Organization and does not have access to any repositories in the organization. */
  UNAFFILIATED = "UNAFFILIATED",
}

/** The reason an outside collaborator was removed from an Organization. */
export enum OrgRemoveOutsideCollaboratorAuditEntryReason {
  /** SAML external identity missing */
  SAML_EXTERNAL_IDENTITY_MISSING = "SAML_EXTERNAL_IDENTITY_MISSING",
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE =
    "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",
}

/** The default permission a repository can have in an Organization. */
export enum OrgUpdateDefaultRepositoryPermissionAuditEntryPermission {
  /** Can read, clone, push, and add collaborators to repositories. */
  ADMIN = "ADMIN",
  /** No default permission value. */
  NONE = "NONE",
  /** Can read and clone repositories. */
  READ = "READ",
  /** Can read, clone and push to repositories. */
  WRITE = "WRITE",
}

/** The permissions available to members on an Organization. */
export enum OrgUpdateMemberAuditEntryPermission {
  /** Can read, clone, push, and add collaborators to repositories. */
  ADMIN = "ADMIN",
  /** Can read and clone repositories. */
  READ = "READ",
}

/** The permissions available for repository creation on an Organization. */
export enum OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility {
  /** All organization members are restricted from creating any repositories. */
  ALL = "ALL",
  /** All organization members are restricted from creating internal repositories. */
  INTERNAL = "INTERNAL",
  /** All organization members are allowed to create any repositories. */
  NONE = "NONE",
  /** All organization members are restricted from creating private repositories. */
  PRIVATE = "PRIVATE",
  /** All organization members are restricted from creating private or internal repositories. */
  PRIVATE_INTERNAL = "PRIVATE_INTERNAL",
  /** All organization members are restricted from creating public repositories. */
  PUBLIC = "PUBLIC",
  /** All organization members are restricted from creating public or internal repositories. */
  PUBLIC_INTERNAL = "PUBLIC_INTERNAL",
  /** All organization members are restricted from creating public or private repositories. */
  PUBLIC_PRIVATE = "PUBLIC_PRIVATE",
}

/** The possible organization invitation roles. */
export enum OrganizationInvitationRole {
  /** The user is invited to be an admin of the organization. */
  ADMIN = "ADMIN",
  /** The user is invited to be a billing manager of the organization. */
  BILLING_MANAGER = "BILLING_MANAGER",
  /** The user is invited to be a direct member of the organization. */
  DIRECT_MEMBER = "DIRECT_MEMBER",
  /** The user's previous role will be reinstated. */
  REINSTATE = "REINSTATE",
}

/** The possible organization invitation types. */
export enum OrganizationInvitationType {
  /** The invitation was to an email address. */
  EMAIL = "EMAIL",
  /** The invitation was to an existing user. */
  USER = "USER",
}

/** The possible roles within an organization for its members. */
export enum OrganizationMemberRole {
  /** The user is an administrator of the organization. */
  ADMIN = "ADMIN",
  /** The user is a member of the organization. */
  MEMBER = "MEMBER",
}

/** The possible values for the members can create repositories setting on an organization. */
export enum OrganizationMembersCanCreateRepositoriesSettingValue {
  /** Members will be able to create public and private repositories. */
  ALL = "ALL",
  /** Members will not be able to create public or private repositories. */
  DISABLED = "DISABLED",
  /** Members will be able to create only private repositories. */
  PRIVATE = "PRIVATE",
}

/** Properties by which organization connections can be ordered. */
export enum OrganizationOrderField {
  /** Order organizations by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order organizations by login */
  LOGIN = "LOGIN",
}

/** Properties by which package file connections can be ordered. */
export enum PackageFileOrderField {
  /** Order package files by creation time */
  CREATED_AT = "CREATED_AT",
}

/** Properties by which package connections can be ordered. */
export enum PackageOrderField {
  /** Order packages by creation time */
  CREATED_AT = "CREATED_AT",
}

/** The possible types of a package. */
export enum PackageType {
  /** A debian package. */
  DEBIAN = "DEBIAN",
  /** A docker image. */
  DOCKER = "DOCKER",
  /** A maven package. */
  MAVEN = "MAVEN",
  /** An npm package. */
  NPM = "NPM",
  /** A nuget package. */
  NUGET = "NUGET",
  /** A python package. */
  PYPI = "PYPI",
  /** A rubygems package. */
  RUBYGEMS = "RUBYGEMS",
}

/** Properties by which package version connections can be ordered. */
export enum PackageVersionOrderField {
  /** Order package versions by creation time */
  CREATED_AT = "CREATED_AT",
}

/** Represents items that can be pinned to a profile page or dashboard. */
export enum PinnableItemType {
  /** A gist. */
  GIST = "GIST",
  /** An issue. */
  ISSUE = "ISSUE",
  /** An organization. */
  ORGANIZATION = "ORGANIZATION",
  /** A project. */
  PROJECT = "PROJECT",
  /** A pull request. */
  PULL_REQUEST = "PULL_REQUEST",
  /** A repository. */
  REPOSITORY = "REPOSITORY",
  /** A team. */
  TEAM = "TEAM",
  /** A user. */
  USER = "USER",
}

/** Preconfigured gradients that may be used to style discussions pinned within a repository. */
export enum PinnedDiscussionGradient {
  /** A gradient of blue to mint */
  BLUE_MINT = "BLUE_MINT",
  /** A gradient of blue to purple */
  BLUE_PURPLE = "BLUE_PURPLE",
  /** A gradient of pink to blue */
  PINK_BLUE = "PINK_BLUE",
  /** A gradient of purple to coral */
  PURPLE_CORAL = "PURPLE_CORAL",
  /** A gradient of red to orange */
  RED_ORANGE = "RED_ORANGE",
}

/** Preconfigured background patterns that may be used to style discussions pinned within a repository. */
export enum PinnedDiscussionPattern {
  /** An upward-facing chevron pattern */
  CHEVRON_UP = "CHEVRON_UP",
  /** A hollow dot pattern */
  DOT = "DOT",
  /** A solid dot pattern */
  DOT_FILL = "DOT_FILL",
  /** A heart pattern */
  HEART_FILL = "HEART_FILL",
  /** A plus sign pattern */
  PLUS = "PLUS",
  /** A lightning bolt pattern */
  ZAP = "ZAP",
}

/** The possible archived states of a project card. */
export enum ProjectCardArchivedState {
  /** A project card that is archived */
  ARCHIVED = "ARCHIVED",
  /** A project card that is not archived */
  NOT_ARCHIVED = "NOT_ARCHIVED",
}

/** Various content states of a ProjectCard */
export enum ProjectCardState {
  /** The card has content only. */
  CONTENT_ONLY = "CONTENT_ONLY",
  /** The card has a note only. */
  NOTE_ONLY = "NOTE_ONLY",
  /** The card is redacted. */
  REDACTED = "REDACTED",
}

/** The semantic purpose of the column - todo, in progress, or done. */
export enum ProjectColumnPurpose {
  /** The column contains cards which are complete */
  DONE = "DONE",
  /** The column contains cards which are currently being worked on */
  IN_PROGRESS = "IN_PROGRESS",
  /** The column contains cards still to be worked on */
  TODO = "TODO",
}

/** Properties by which project connections can be ordered. */
export enum ProjectOrderField {
  /** Order projects by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order projects by name */
  NAME = "NAME",
  /** Order projects by update time */
  UPDATED_AT = "UPDATED_AT",
}

/** State of the project; either 'open' or 'closed' */
export enum ProjectState {
  /** The project is closed. */
  CLOSED = "CLOSED",
  /** The project is open. */
  OPEN = "OPEN",
}

/** GitHub-provided templates for Projects */
export enum ProjectTemplate {
  /** Create a board with v2 triggers to automatically move cards across To do, In progress and Done columns. */
  AUTOMATED_KANBAN_V2 = "AUTOMATED_KANBAN_V2",
  /** Create a board with triggers to automatically move cards across columns with review automation. */
  AUTOMATED_REVIEWS_KANBAN = "AUTOMATED_REVIEWS_KANBAN",
  /** Create a board with columns for To do, In progress and Done. */
  BASIC_KANBAN = "BASIC_KANBAN",
  /** Create a board to triage and prioritize bugs with To do, priority, and Done columns. */
  BUG_TRIAGE = "BUG_TRIAGE",
}

/** Represents available types of methods to use when merging a pull request. */
export enum PullRequestMergeMethod {
  /** Add all commits from the head branch to the base branch with a merge commit. */
  MERGE = "MERGE",
  /** Add all commits from the head branch onto the base branch individually. */
  REBASE = "REBASE",
  /** Combine all commits from the head branch into a single commit in the base branch. */
  SQUASH = "SQUASH",
}

/** Properties by which pull_requests connections can be ordered. */
export enum PullRequestOrderField {
  /** Order pull_requests by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order pull_requests by update time */
  UPDATED_AT = "UPDATED_AT",
}

/** The possible states of a pull request review comment. */
export enum PullRequestReviewCommentState {
  /** A comment that is part of a pending review */
  PENDING = "PENDING",
  /** A comment that is part of a submitted review */
  SUBMITTED = "SUBMITTED",
}

/** The review status of a pull request. */
export enum PullRequestReviewDecision {
  /** The pull request has received an approving review. */
  APPROVED = "APPROVED",
  /** Changes have been requested on the pull request. */
  CHANGES_REQUESTED = "CHANGES_REQUESTED",
  /** A review is required before the pull request can be merged. */
  REVIEW_REQUIRED = "REVIEW_REQUIRED",
}

/** The possible events to perform on a pull request review. */
export enum PullRequestReviewEvent {
  /** Submit feedback and approve merging these changes. */
  APPROVE = "APPROVE",
  /** Submit general feedback without explicit approval. */
  COMMENT = "COMMENT",
  /** Dismiss review so it now longer effects merging. */
  DISMISS = "DISMISS",
  /** Submit feedback that must be addressed before merging. */
  REQUEST_CHANGES = "REQUEST_CHANGES",
}

/** The possible states of a pull request review. */
export enum PullRequestReviewState {
  /** A review allowing the pull request to merge. */
  APPROVED = "APPROVED",
  /** A review blocking the pull request from merging. */
  CHANGES_REQUESTED = "CHANGES_REQUESTED",
  /** An informational review. */
  COMMENTED = "COMMENTED",
  /** A review that has been dismissed. */
  DISMISSED = "DISMISSED",
  /** A review that has not yet been submitted. */
  PENDING = "PENDING",
}

/** The possible states of a pull request. */
export enum PullRequestState {
  /** A pull request that has been closed without being merged. */
  CLOSED = "CLOSED",
  /** A pull request that has been closed by being merged. */
  MERGED = "MERGED",
  /** A pull request that is still open. */
  OPEN = "OPEN",
}

/** The possible item types found in a timeline. */
export enum PullRequestTimelineItemsItemType {
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  ADDED_TO_PROJECT_EVENT = "ADDED_TO_PROJECT_EVENT",
  /** Represents an 'assigned' event on any assignable object. */
  ASSIGNED_EVENT = "ASSIGNED_EVENT",
  /** Represents a 'automatic_base_change_failed' event on a given pull request. */
  AUTOMATIC_BASE_CHANGE_FAILED_EVENT = "AUTOMATIC_BASE_CHANGE_FAILED_EVENT",
  /** Represents a 'automatic_base_change_succeeded' event on a given pull request. */
  AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT =
    "AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT",
  /** Represents a 'auto_merge_disabled' event on a given pull request. */
  AUTO_MERGE_DISABLED_EVENT = "AUTO_MERGE_DISABLED_EVENT",
  /** Represents a 'auto_merge_enabled' event on a given pull request. */
  AUTO_MERGE_ENABLED_EVENT = "AUTO_MERGE_ENABLED_EVENT",
  /** Represents a 'auto_rebase_enabled' event on a given pull request. */
  AUTO_REBASE_ENABLED_EVENT = "AUTO_REBASE_ENABLED_EVENT",
  /** Represents a 'auto_squash_enabled' event on a given pull request. */
  AUTO_SQUASH_ENABLED_EVENT = "AUTO_SQUASH_ENABLED_EVENT",
  /** Represents a 'base_ref_changed' event on a given issue or pull request. */
  BASE_REF_CHANGED_EVENT = "BASE_REF_CHANGED_EVENT",
  /** Represents a 'base_ref_deleted' event on a given pull request. */
  BASE_REF_DELETED_EVENT = "BASE_REF_DELETED_EVENT",
  /** Represents a 'base_ref_force_pushed' event on a given pull request. */
  BASE_REF_FORCE_PUSHED_EVENT = "BASE_REF_FORCE_PUSHED_EVENT",
  /** Represents a 'closed' event on any `Closable`. */
  CLOSED_EVENT = "CLOSED_EVENT",
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  COMMENT_DELETED_EVENT = "COMMENT_DELETED_EVENT",
  /** Represents a 'connected' event on a given issue or pull request. */
  CONNECTED_EVENT = "CONNECTED_EVENT",
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  CONVERTED_NOTE_TO_ISSUE_EVENT = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  /** Represents a 'convert_to_draft' event on a given pull request. */
  CONVERT_TO_DRAFT_EVENT = "CONVERT_TO_DRAFT_EVENT",
  /** Represents a mention made by one issue or pull request to another. */
  CROSS_REFERENCED_EVENT = "CROSS_REFERENCED_EVENT",
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  DEMILESTONED_EVENT = "DEMILESTONED_EVENT",
  /** Represents a 'deployed' event on a given pull request. */
  DEPLOYED_EVENT = "DEPLOYED_EVENT",
  /** Represents a 'deployment_environment_changed' event on a given pull request. */
  DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT = "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT",
  /** Represents a 'disconnected' event on a given issue or pull request. */
  DISCONNECTED_EVENT = "DISCONNECTED_EVENT",
  /** Represents a 'head_ref_deleted' event on a given pull request. */
  HEAD_REF_DELETED_EVENT = "HEAD_REF_DELETED_EVENT",
  /** Represents a 'head_ref_force_pushed' event on a given pull request. */
  HEAD_REF_FORCE_PUSHED_EVENT = "HEAD_REF_FORCE_PUSHED_EVENT",
  /** Represents a 'head_ref_restored' event on a given pull request. */
  HEAD_REF_RESTORED_EVENT = "HEAD_REF_RESTORED_EVENT",
  /** Represents a comment on an Issue. */
  ISSUE_COMMENT = "ISSUE_COMMENT",
  /** Represents a 'labeled' event on a given issue or pull request. */
  LABELED_EVENT = "LABELED_EVENT",
  /** Represents a 'locked' event on a given issue or pull request. */
  LOCKED_EVENT = "LOCKED_EVENT",
  /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
  MARKED_AS_DUPLICATE_EVENT = "MARKED_AS_DUPLICATE_EVENT",
  /** Represents a 'mentioned' event on a given issue or pull request. */
  MENTIONED_EVENT = "MENTIONED_EVENT",
  /** Represents a 'merged' event on a given pull request. */
  MERGED_EVENT = "MERGED_EVENT",
  /** Represents a 'milestoned' event on a given issue or pull request. */
  MILESTONED_EVENT = "MILESTONED_EVENT",
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  MOVED_COLUMNS_IN_PROJECT_EVENT = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  /** Represents a 'pinned' event on a given issue or pull request. */
  PINNED_EVENT = "PINNED_EVENT",
  /** Represents a Git commit part of a pull request. */
  PULL_REQUEST_COMMIT = "PULL_REQUEST_COMMIT",
  /** Represents a commit comment thread part of a pull request. */
  PULL_REQUEST_COMMIT_COMMENT_THREAD = "PULL_REQUEST_COMMIT_COMMENT_THREAD",
  /** A review object for a given pull request. */
  PULL_REQUEST_REVIEW = "PULL_REQUEST_REVIEW",
  /** A threaded list of comments for a given pull request. */
  PULL_REQUEST_REVIEW_THREAD = "PULL_REQUEST_REVIEW_THREAD",
  /** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
  PULL_REQUEST_REVISION_MARKER = "PULL_REQUEST_REVISION_MARKER",
  /** Represents a 'ready_for_review' event on a given pull request. */
  READY_FOR_REVIEW_EVENT = "READY_FOR_REVIEW_EVENT",
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  REFERENCED_EVENT = "REFERENCED_EVENT",
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  REMOVED_FROM_PROJECT_EVENT = "REMOVED_FROM_PROJECT_EVENT",
  /** Represents a 'renamed' event on a given issue or pull request */
  RENAMED_TITLE_EVENT = "RENAMED_TITLE_EVENT",
  /** Represents a 'reopened' event on any `Closable`. */
  REOPENED_EVENT = "REOPENED_EVENT",
  /** Represents a 'review_dismissed' event on a given issue or pull request. */
  REVIEW_DISMISSED_EVENT = "REVIEW_DISMISSED_EVENT",
  /** Represents an 'review_requested' event on a given pull request. */
  REVIEW_REQUESTED_EVENT = "REVIEW_REQUESTED_EVENT",
  /** Represents an 'review_request_removed' event on a given pull request. */
  REVIEW_REQUEST_REMOVED_EVENT = "REVIEW_REQUEST_REMOVED_EVENT",
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  SUBSCRIBED_EVENT = "SUBSCRIBED_EVENT",
  /** Represents a 'transferred' event on a given issue or pull request. */
  TRANSFERRED_EVENT = "TRANSFERRED_EVENT",
  /** Represents an 'unassigned' event on any assignable object. */
  UNASSIGNED_EVENT = "UNASSIGNED_EVENT",
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  UNLABELED_EVENT = "UNLABELED_EVENT",
  /** Represents an 'unlocked' event on a given issue or pull request. */
  UNLOCKED_EVENT = "UNLOCKED_EVENT",
  /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
  UNMARKED_AS_DUPLICATE_EVENT = "UNMARKED_AS_DUPLICATE_EVENT",
  /** Represents an 'unpinned' event on a given issue or pull request. */
  UNPINNED_EVENT = "UNPINNED_EVENT",
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  UNSUBSCRIBED_EVENT = "UNSUBSCRIBED_EVENT",
  /** Represents a 'user_blocked' event on a given user. */
  USER_BLOCKED_EVENT = "USER_BLOCKED_EVENT",
}

/** The possible target states when updating a pull request. */
export enum PullRequestUpdateState {
  /** A pull request that has been closed without being merged. */
  CLOSED = "CLOSED",
  /** A pull request that is still open. */
  OPEN = "OPEN",
}

/** Emojis that can be attached to Issues, Pull Requests and Comments. */
export enum ReactionContent {
  /** Represents the `:confused:` emoji. */
  CONFUSED = "CONFUSED",
  /** Represents the `:eyes:` emoji. */
  EYES = "EYES",
  /** Represents the `:heart:` emoji. */
  HEART = "HEART",
  /** Represents the `:hooray:` emoji. */
  HOORAY = "HOORAY",
  /** Represents the `:laugh:` emoji. */
  LAUGH = "LAUGH",
  /** Represents the `:rocket:` emoji. */
  ROCKET = "ROCKET",
  /** Represents the `:-1:` emoji. */
  THUMBS_DOWN = "THUMBS_DOWN",
  /** Represents the `:+1:` emoji. */
  THUMBS_UP = "THUMBS_UP",
}

/** A list of fields that reactions can be ordered by. */
export enum ReactionOrderField {
  /** Allows ordering a list of reactions by when they were created. */
  CREATED_AT = "CREATED_AT",
}

/** Properties by which ref connections can be ordered. */
export enum RefOrderField {
  /** Order refs by their alphanumeric name */
  ALPHABETICAL = "ALPHABETICAL",
  /** Order refs by underlying commit date if the ref prefix is refs/tags/ */
  TAG_COMMIT_DATE = "TAG_COMMIT_DATE",
}

/** Properties by which release connections can be ordered. */
export enum ReleaseOrderField {
  /** Order releases by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order releases alphabetically by name */
  NAME = "NAME",
}

/** The privacy of a repository */
export enum RepoAccessAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  PRIVATE = "PRIVATE",
  /** The repository is visible to everyone. */
  PUBLIC = "PUBLIC",
}

/** The privacy of a repository */
export enum RepoAddMemberAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  PRIVATE = "PRIVATE",
  /** The repository is visible to everyone. */
  PUBLIC = "PUBLIC",
}

/** The privacy of a repository */
export enum RepoArchivedAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  PRIVATE = "PRIVATE",
  /** The repository is visible to everyone. */
  PUBLIC = "PUBLIC",
}

/** The merge options available for pull requests to this repository. */
export enum RepoChangeMergeSettingAuditEntryMergeType {
  /** The pull request is added to the base branch in a merge commit. */
  MERGE = "MERGE",
  /** Commits from the pull request are added onto the base branch individually without a merge commit. */
  REBASE = "REBASE",
  /** The pull request's commits are squashed into a single commit before they are merged to the base branch. */
  SQUASH = "SQUASH",
}

/** The privacy of a repository */
export enum RepoCreateAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  PRIVATE = "PRIVATE",
  /** The repository is visible to everyone. */
  PUBLIC = "PUBLIC",
}

/** The privacy of a repository */
export enum RepoDestroyAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  PRIVATE = "PRIVATE",
  /** The repository is visible to everyone. */
  PUBLIC = "PUBLIC",
}

/** The privacy of a repository */
export enum RepoRemoveMemberAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  PRIVATE = "PRIVATE",
  /** The repository is visible to everyone. */
  PUBLIC = "PUBLIC",
}

/** The reasons a piece of content can be reported or minimized. */
export enum ReportedContentClassifiers {
  /** An abusive or harassing piece of content */
  ABUSE = "ABUSE",
  /** A duplicated piece of content */
  DUPLICATE = "DUPLICATE",
  /** An irrelevant piece of content */
  OFF_TOPIC = "OFF_TOPIC",
  /** An outdated piece of content */
  OUTDATED = "OUTDATED",
  /** The content has been resolved */
  RESOLVED = "RESOLVED",
  /** A spammy piece of content */
  SPAM = "SPAM",
}

/** The affiliation of a user to a repository */
export enum RepositoryAffiliation {
  /** Repositories that the user has been added to as a collaborator. */
  COLLABORATOR = "COLLABORATOR",
  /** Repositories that the user has access to through being a member of an
    organization. This includes every repository on every team that the user is on. */
  ORGANIZATION_MEMBER = "ORGANIZATION_MEMBER",
  /** Repositories that are owned by the authenticated user. */
  OWNER = "OWNER",
}

/** The reason a repository is listed as 'contributed'. */
export enum RepositoryContributionType {
  /** Created a commit */
  COMMIT = "COMMIT",
  /** Created an issue */
  ISSUE = "ISSUE",
  /** Created a pull request */
  PULL_REQUEST = "PULL_REQUEST",
  /** Reviewed a pull request */
  PULL_REQUEST_REVIEW = "PULL_REQUEST_REVIEW",
  /** Created the repository */
  REPOSITORY = "REPOSITORY",
}

/** A repository interaction limit. */
export enum RepositoryInteractionLimit {
  /** Users that are not collaborators will not be able to interact with the repository. */
  COLLABORATORS_ONLY = "COLLABORATORS_ONLY",
  /** Users that have not previously committed to a repository’s default branch will be unable to interact with the repository. */
  CONTRIBUTORS_ONLY = "CONTRIBUTORS_ONLY",
  /** Users that have recently created their account will be unable to interact with the repository. */
  EXISTING_USERS = "EXISTING_USERS",
  /** No interaction limits are enabled. */
  NO_LIMIT = "NO_LIMIT",
}

/** The length for a repository interaction limit to be enabled for. */
export enum RepositoryInteractionLimitExpiry {
  /** The interaction limit will expire after 1 day. */
  ONE_DAY = "ONE_DAY",
  /** The interaction limit will expire after 1 month. */
  ONE_MONTH = "ONE_MONTH",
  /** The interaction limit will expire after 1 week. */
  ONE_WEEK = "ONE_WEEK",
  /** The interaction limit will expire after 6 months. */
  SIX_MONTHS = "SIX_MONTHS",
  /** The interaction limit will expire after 3 days. */
  THREE_DAYS = "THREE_DAYS",
}

/** Indicates where an interaction limit is configured. */
export enum RepositoryInteractionLimitOrigin {
  /** A limit that is configured at the organization level. */
  ORGANIZATION = "ORGANIZATION",
  /** A limit that is configured at the repository level. */
  REPOSITORY = "REPOSITORY",
  /** A limit that is configured at the user-wide level. */
  USER = "USER",
}

/** Properties by which repository invitation connections can be ordered. */
export enum RepositoryInvitationOrderField {
  /** Order repository invitations by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order repository invitations by invitee login */
  INVITEE_LOGIN = "INVITEE_LOGIN",
}

/** The possible reasons a given repository could be in a locked state. */
export enum RepositoryLockReason {
  /** The repository is locked due to a billing related reason. */
  BILLING = "BILLING",
  /** The repository is locked due to a migration. */
  MIGRATING = "MIGRATING",
  /** The repository is locked due to a move. */
  MOVING = "MOVING",
  /** The repository is locked due to a rename. */
  RENAME = "RENAME",
}

/** Properties by which repository connections can be ordered. */
export enum RepositoryOrderField {
  /** Order repositories by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order repositories by name */
  NAME = "NAME",
  /** Order repositories by push time */
  PUSHED_AT = "PUSHED_AT",
  /** Order repositories by number of stargazers */
  STARGAZERS = "STARGAZERS",
  /** Order repositories by update time */
  UPDATED_AT = "UPDATED_AT",
}

/** The access level to a repository */
export enum RepositoryPermission {
  /** Can read, clone, and push to this repository. Can also manage issues, pull
    requests, and repository settings, including adding collaborators */
  ADMIN = "ADMIN",
  /** Can read, clone, and push to this repository. They can also manage issues, pull requests, and some repository settings */
  MAINTAIN = "MAINTAIN",
  /** Can read and clone this repository. Can also open and comment on issues and pull requests */
  READ = "READ",
  /** Can read and clone this repository. Can also manage issues and pull requests */
  TRIAGE = "TRIAGE",
  /** Can read, clone, and push to this repository. Can also manage issues and pull requests */
  WRITE = "WRITE",
}

/** The privacy of a repository */
export enum RepositoryPrivacy {
  /** Private */
  PRIVATE = "PRIVATE",
  /** Public */
  PUBLIC = "PUBLIC",
}

/** The repository's visibility level. */
export enum RepositoryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  PRIVATE = "PRIVATE",
  /** The repository is visible to everyone. */
  PUBLIC = "PUBLIC",
}

/** The possible states that can be requested when creating a check run. */
export enum RequestableCheckStatusState {
  /** The check suite or run has been completed. */
  COMPLETED = "COMPLETED",
  /** The check suite or run is in progress. */
  IN_PROGRESS = "IN_PROGRESS",
  /** The check suite or run is in pending state. */
  PENDING = "PENDING",
  /** The check suite or run has been queued. */
  QUEUED = "QUEUED",
  /** The check suite or run is in waiting state. */
  WAITING = "WAITING",
}

/** The possible digest algorithms used to sign SAML requests for an identity provider. */
export enum SamlDigestAlgorithm {
  /** SHA1 */
  SHA1 = "SHA1",
  /** SHA256 */
  SHA256 = "SHA256",
  /** SHA384 */
  SHA384 = "SHA384",
  /** SHA512 */
  SHA512 = "SHA512",
}

/** The possible signature algorithms used to sign SAML requests for a Identity Provider. */
export enum SamlSignatureAlgorithm {
  /** RSA-SHA1 */
  RSA_SHA1 = "RSA_SHA1",
  /** RSA-SHA256 */
  RSA_SHA256 = "RSA_SHA256",
  /** RSA-SHA384 */
  RSA_SHA384 = "RSA_SHA384",
  /** RSA-SHA512 */
  RSA_SHA512 = "RSA_SHA512",
}

/** Properties by which saved reply connections can be ordered. */
export enum SavedReplyOrderField {
  /** Order saved reply by when they were updated. */
  UPDATED_AT = "UPDATED_AT",
}

/** Represents the individual results of a search. */
export enum SearchType {
  /** Returns matching discussions in repositories. */
  DISCUSSION = "DISCUSSION",
  /** Returns results matching issues in repositories. */
  ISSUE = "ISSUE",
  /** Returns results matching repositories. */
  REPOSITORY = "REPOSITORY",
  /** Returns results matching users and organizations on GitHub. */
  USER = "USER",
}

/** The possible ecosystems of a security vulnerability's package. */
export enum SecurityAdvisoryEcosystem {
  /** PHP packages hosted at packagist.org */
  COMPOSER = "COMPOSER",
  /** Go modules */
  GO = "GO",
  /** Java artifacts hosted at the Maven central repository */
  MAVEN = "MAVEN",
  /** JavaScript packages hosted at npmjs.com */
  NPM = "NPM",
  /** .NET packages hosted at the NuGet Gallery */
  NUGET = "NUGET",
  /** Python packages hosted at PyPI.org */
  PIP = "PIP",
  /** Ruby gems hosted at RubyGems.org */
  RUBYGEMS = "RUBYGEMS",
}

/** Identifier formats available for advisories. */
export enum SecurityAdvisoryIdentifierType {
  /** Common Vulnerabilities and Exposures Identifier. */
  CVE = "CVE",
  /** GitHub Security Advisory ID. */
  GHSA = "GHSA",
}

/** Properties by which security advisory connections can be ordered. */
export enum SecurityAdvisoryOrderField {
  /** Order advisories by publication time */
  PUBLISHED_AT = "PUBLISHED_AT",
  /** Order advisories by update time */
  UPDATED_AT = "UPDATED_AT",
}

/** Severity of the vulnerability. */
export enum SecurityAdvisorySeverity {
  /** Critical. */
  CRITICAL = "CRITICAL",
  /** High. */
  HIGH = "HIGH",
  /** Low. */
  LOW = "LOW",
  /** Moderate. */
  MODERATE = "MODERATE",
}

/** Properties by which security vulnerability connections can be ordered. */
export enum SecurityVulnerabilityOrderField {
  /** Order vulnerability by update time */
  UPDATED_AT = "UPDATED_AT",
}

/** Properties by which sponsorable connections can be ordered. */
export enum SponsorableOrderField {
  /** Order sponsorable entities by login (username). */
  LOGIN = "LOGIN",
}

/** The different kinds of goals a GitHub Sponsors member can have. */
export enum SponsorsGoalKind {
  /** The goal is about getting a certain dollar amount from sponsorships each month. */
  MONTHLY_SPONSORSHIP_AMOUNT = "MONTHLY_SPONSORSHIP_AMOUNT",
  /** The goal is about reaching a certain number of sponsors. */
  TOTAL_SPONSORS_COUNT = "TOTAL_SPONSORS_COUNT",
}

/** Properties by which Sponsors tiers connections can be ordered. */
export enum SponsorsTierOrderField {
  /** Order tiers by creation time. */
  CREATED_AT = "CREATED_AT",
  /** Order tiers by their monthly price in cents */
  MONTHLY_PRICE_IN_CENTS = "MONTHLY_PRICE_IN_CENTS",
}

/** Properties by which sponsorship connections can be ordered. */
export enum SponsorshipOrderField {
  /** Order sponsorship by creation time. */
  CREATED_AT = "CREATED_AT",
}

/** The privacy of a sponsorship */
export enum SponsorshipPrivacy {
  /** Private */
  PRIVATE = "PRIVATE",
  /** Public */
  PUBLIC = "PUBLIC",
}

/** Properties by which star connections can be ordered. */
export enum StarOrderField {
  /** Allows ordering a list of stars by when they were created. */
  STARRED_AT = "STARRED_AT",
}

/** The possible commit status states. */
export enum StatusState {
  /** Status is errored. */
  ERROR = "ERROR",
  /** Status is expected. */
  EXPECTED = "EXPECTED",
  /** Status is failing. */
  FAILURE = "FAILURE",
  /** Status is pending. */
  PENDING = "PENDING",
  /** Status is successful. */
  SUCCESS = "SUCCESS",
}

/** The possible states of a subscription. */
export enum SubscriptionState {
  /** The User is never notified. */
  IGNORED = "IGNORED",
  /** The User is notified of all conversations. */
  SUBSCRIBED = "SUBSCRIBED",
  /** The User is only notified when participating or @mentioned. */
  UNSUBSCRIBED = "UNSUBSCRIBED",
}

/** Properties by which team discussion comment connections can be ordered. */
export enum TeamDiscussionCommentOrderField {
  /** Allows sequential ordering of team discussion comments (which is equivalent to chronological ordering). */
  NUMBER = "NUMBER",
}

/** Properties by which team discussion connections can be ordered. */
export enum TeamDiscussionOrderField {
  /** Allows chronological ordering of team discussions. */
  CREATED_AT = "CREATED_AT",
}

/** Properties by which team member connections can be ordered. */
export enum TeamMemberOrderField {
  /** Order team members by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order team members by login */
  LOGIN = "LOGIN",
}

/** The possible team member roles; either 'maintainer' or 'member'. */
export enum TeamMemberRole {
  /** A team maintainer has permission to add and remove team members. */
  MAINTAINER = "MAINTAINER",
  /** A team member has no administrative permissions on the team. */
  MEMBER = "MEMBER",
}

/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
export enum TeamMembershipType {
  /** Includes immediate and child team members for the team. */
  ALL = "ALL",
  /** Includes only child team members for the team. */
  CHILD_TEAM = "CHILD_TEAM",
  /** Includes only immediate members of the team. */
  IMMEDIATE = "IMMEDIATE",
}

/** Properties by which team connections can be ordered. */
export enum TeamOrderField {
  /** Allows ordering a list of teams by name. */
  NAME = "NAME",
}

/** The possible team privacy values. */
export enum TeamPrivacy {
  /** A secret team can only be seen by its members. */
  SECRET = "SECRET",
  /** A visible team can be seen and @mentioned by every member of the organization. */
  VISIBLE = "VISIBLE",
}

/** Properties by which team repository connections can be ordered. */
export enum TeamRepositoryOrderField {
  /** Order repositories by creation time */
  CREATED_AT = "CREATED_AT",
  /** Order repositories by name */
  NAME = "NAME",
  /** Order repositories by permission */
  PERMISSION = "PERMISSION",
  /** Order repositories by push time */
  PUSHED_AT = "PUSHED_AT",
  /** Order repositories by number of stargazers */
  STARGAZERS = "STARGAZERS",
  /** Order repositories by update time */
  UPDATED_AT = "UPDATED_AT",
}

/** The possible team review assignment algorithms */
export enum TeamReviewAssignmentAlgorithm {
  /** Balance review load across the entire team */
  LOAD_BALANCE = "LOAD_BALANCE",
  /** Alternate reviews between each team member */
  ROUND_ROBIN = "ROUND_ROBIN",
}

/** The role of a user on a team. */
export enum TeamRole {
  /** User has admin rights on the team. */
  ADMIN = "ADMIN",
  /** User is a member of the team. */
  MEMBER = "MEMBER",
}

/** Reason that the suggested topic is declined. */
export enum TopicSuggestionDeclineReason {
  /** The suggested topic is not relevant to the repository. */
  NOT_RELEVANT = "NOT_RELEVANT",
  /** The viewer does not like the suggested topic. */
  PERSONAL_PREFERENCE = "PERSONAL_PREFERENCE",
  /** The suggested topic is too general for the repository. */
  TOO_GENERAL = "TOO_GENERAL",
  /** The suggested topic is too specific for the repository (e.g. #ruby-on-rails-version-4-2-1). */
  TOO_SPECIFIC = "TOO_SPECIFIC",
}

/** The possible durations that a user can be blocked for. */
export enum UserBlockDuration {
  /** The user was blocked for 1 day */
  ONE_DAY = "ONE_DAY",
  /** The user was blocked for 30 days */
  ONE_MONTH = "ONE_MONTH",
  /** The user was blocked for 7 days */
  ONE_WEEK = "ONE_WEEK",
  /** The user was blocked permanently */
  PERMANENT = "PERMANENT",
  /** The user was blocked for 3 days */
  THREE_DAYS = "THREE_DAYS",
}

/** Properties by which user status connections can be ordered. */
export enum UserStatusOrderField {
  /** Order user statuses by when they were updated. */
  UPDATED_AT = "UPDATED_AT",
}

/** Properties by which verifiable domain connections can be ordered. */
export enum VerifiableDomainOrderField {
  /** Order verifiable domains by their creation date. */
  CREATED_AT = "CREATED_AT",
  /** Order verifiable domains by the domain name. */
  DOMAIN = "DOMAIN",
}

/** Autogenerated input type of AcceptEnterpriseAdministratorInvitation */
export interface AcceptEnterpriseAdministratorInvitationInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The id of the invitation being accepted */
  invitationId: ID;
}

/** Autogenerated input type of AcceptTopicSuggestion */
export interface AcceptTopicSuggestionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The name of the suggested topic. */
  name: string;
  /** The Node ID of the repository. */
  repositoryId: ID;
}

/** Autogenerated input type of AddAssigneesToAssignable */
export interface AddAssigneesToAssignableInput {
  /** The id of the assignable object to add assignees to. */
  assignableId: ID;
  /** The id of users to add as assignees. */
  assigneeIds: ID[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated input type of AddComment */
export interface AddCommentInput {
  /** The contents of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the subject to modify. */
  subjectId: ID;
}

/** Autogenerated input type of AddDiscussionComment */
export interface AddDiscussionCommentInput {
  /** The contents of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the discussion to comment on. */
  discussionId: ID;
  /** The Node ID of the discussion comment within this discussion to reply to. */
  replyToId?: ID;
}

/** Autogenerated input type of AddEnterpriseSupportEntitlement */
export interface AddEnterpriseSupportEntitlementInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the Enterprise which the admin belongs to. */
  enterpriseId: ID;
  /** The login of a member who will receive the support entitlement. */
  login: string;
}

/** Autogenerated input type of AddLabelsToLabelable */
export interface AddLabelsToLabelableInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ids of the labels to add. */
  labelIds: ID[];
  /** The id of the labelable object to add labels to. */
  labelableId: ID;
}

/** Autogenerated input type of AddProjectCard */
export interface AddProjectCardInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The content of the card. Must be a member of the ProjectCardItem union */
  contentId?: ID;
  /** The note on the card. */
  note?: string;
  /** The Node ID of the ProjectColumn. */
  projectColumnId: ID;
}

/** Autogenerated input type of AddProjectColumn */
export interface AddProjectColumnInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The name of the column. */
  name: string;
  /** The Node ID of the project. */
  projectId: ID;
}

/** Autogenerated input type of AddPullRequestReviewComment */
export interface AddPullRequestReviewCommentInput {
  /** The text of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The SHA of the commit to comment on. */
  commitOID?: GitObjectID;
  /** The comment id to reply to. */
  inReplyTo?: ID;
  /** The relative path of the file to comment on. */
  path?: string;
  /** The line index in the diff to comment on. */
  position?: number;
  /** The node ID of the pull request reviewing */
  pullRequestId?: ID;
  /** The Node ID of the review to modify. */
  pullRequestReviewId?: ID;
}

/** Autogenerated input type of AddPullRequestReview */
export interface AddPullRequestReviewInput {
  /** The contents of the review body comment. */
  body?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The review line comments. */
  comments?: Maybe<DraftPullRequestReviewComment>[];
  /** The commit OID the review pertains to. */
  commitOID?: GitObjectID;
  /** The event to perform on the pull request review. */
  event?: PullRequestReviewEvent;
  /** The Node ID of the pull request to modify. */
  pullRequestId: ID;
  /** The review line comment threads. */
  threads?: Maybe<DraftPullRequestReviewThread>[];
}

/** Autogenerated input type of AddPullRequestReviewThread */
export interface AddPullRequestReviewThreadInput {
  /** Body of the thread's first comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The line of the blob to which the thread refers. The end of the line range for multi-line comments. */
  line: number;
  /** Path to the file being commented on. */
  path: string;
  /** The node ID of the pull request reviewing */
  pullRequestId?: ID;
  /** The Node ID of the review to modify. */
  pullRequestReviewId?: ID;
  /** The side of the diff on which the line resides. For multi-line comments, this is the side for the end of the line range. */
  side?: DiffSide;
  /** The first line of the range to which the comment refers. */
  startLine?: number;
  /** The side of the diff on which the start line resides. */
  startSide?: DiffSide;
}

/** Autogenerated input type of AddReaction */
export interface AddReactionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The name of the emoji to react with. */
  content: ReactionContent;
  /** The Node ID of the subject to modify. */
  subjectId: ID;
}

/** Autogenerated input type of AddStar */
export interface AddStarInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Starrable ID to star. */
  starrableId: ID;
}

/** Autogenerated input type of AddUpvote */
export interface AddUpvoteInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the discussion or comment to upvote. */
  subjectId: ID;
}

/** Autogenerated input type of AddVerifiableDomain */
export interface AddVerifiableDomainInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The URL of the domain */
  domain: URI;
  /** The ID of the owner to add the domain to */
  ownerId: ID;
}

/** Autogenerated input type of ApproveDeployments */
export interface ApproveDeploymentsInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Optional comment for approving deployments */
  comment?: string;
  /** The ids of environments to reject deployments */
  environmentIds: ID[];
  /** The node ID of the workflow run containing the pending deployments. */
  workflowRunId: ID;
}

/** Autogenerated input type of ApproveVerifiableDomain */
export interface ApproveVerifiableDomainInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the verifiable domain to approve. */
  id: ID;
}

/** Autogenerated input type of ArchiveRepository */
export interface ArchiveRepositoryInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the repository to mark as archived. */
  repositoryId: ID;
}

/** Ordering options for Audit Log connections. */
export interface AuditLogOrder {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field to order Audit Logs by. */
  field?: AuditLogOrderField;
}

/** Autogenerated input type of CancelEnterpriseAdminInvitation */
export interface CancelEnterpriseAdminInvitationInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the pending enterprise administrator invitation. */
  invitationId: ID;
}

/** Autogenerated input type of ChangeUserStatus */
export interface ChangeUserStatusInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The emoji to represent your status. Can either be a native Unicode emoji or an emoji name with colons, e.g., :grinning:. */
  emoji?: string;
  /** If set, the user status will not be shown after this date. */
  expiresAt?: DateTime;
  /** Whether this status should indicate you are not fully available on GitHub, e.g., you are away. */
  limitedAvailability?: boolean;
  /** A short description of your current status. */
  message?: string;
  /** The ID of the organization whose members will be allowed to see the status. If
    omitted, the status will be publicly visible. */
  organizationId?: ID;
}

/** Information from a check run analysis to specific lines of code. */
export interface CheckAnnotationData {
  /** Represents an annotation's information level */
  annotationLevel: CheckAnnotationLevel;
  /** The location of the annotation */
  location: CheckAnnotationRange;
  /** A short description of the feedback for these lines of code. */
  message: string;
  /** The path of the file to add an annotation to. */
  path: string;
  /** Details about this annotation. */
  rawDetails?: string;
  /** The title that represents the annotation. */
  title?: string;
}

/** Information from a check run analysis to specific lines of code. */
export interface CheckAnnotationRange {
  /** The ending column of the range. */
  endColumn?: number;
  /** The ending line of the range. */
  endLine: number;
  /** The starting column of the range. */
  startColumn?: number;
  /** The starting line of the range. */
  startLine: number;
}

/** Possible further actions the integrator can perform. */
export interface CheckRunAction {
  /** A short explanation of what this action would do. */
  description: string;
  /** A reference for the action on the integrator's system. */
  identifier: string;
  /** The text to be displayed on a button in the web UI. */
  label: string;
}

/** The filters that are available when fetching check runs. */
export interface CheckRunFilter {
  /** Filters the check runs created by this application ID. */
  appId?: number;
  /** Filters the check runs by this name. */
  checkName?: string;
  /** Filters the check runs by this type. */
  checkType?: CheckRunType;
  /** Filters the check runs by this status. */
  status?: CheckStatusState;
}

/** Descriptive details about the check run. */
export interface CheckRunOutput {
  /** The annotations that are made as part of the check run. */
  annotations?: CheckAnnotationData[];
  /** Images attached to the check run output displayed in the GitHub pull request UI. */
  images?: CheckRunOutputImage[];
  /** The summary of the check run (supports Commonmark). */
  summary: string;
  /** The details of the check run (supports Commonmark). */
  text?: string;
  /** A title to provide for this check run. */
  title: string;
}

/** Images attached to the check run output displayed in the GitHub pull request UI. */
export interface CheckRunOutputImage {
  /** The alternative text for the image. */
  alt: string;
  /** A short image description. */
  caption?: string;
  /** The full URL of the image. */
  imageUrl: URI;
}

/** The auto-trigger preferences that are available for check suites. */
export interface CheckSuiteAutoTriggerPreference {
  /** The node ID of the application that owns the check suite. */
  appId: ID;
  /** Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository. */
  setting: boolean;
}

/** The filters that are available when fetching check suites. */
export interface CheckSuiteFilter {
  /** Filters the check suites created by this application ID. */
  appId?: number;
  /** Filters the check suites by this name. */
  checkName?: string;
}

/** Autogenerated input type of ClearLabelsFromLabelable */
export interface ClearLabelsFromLabelableInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The id of the labelable object to clear the labels from. */
  labelableId: ID;
}

/** Autogenerated input type of CloneProject */
export interface CloneProjectInput {
  /** The description of the project. */
  body?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Whether or not to clone the source project's workflows. */
  includeWorkflows: boolean;
  /** The name of the project. */
  name: string;
  /** The visibility of the project, defaults to false (private). */
  public?: boolean;
  /** The source project to clone. */
  sourceId: ID;
  /** The owner ID to create the project under. */
  targetOwnerId: ID;
}

/** Autogenerated input type of CloneTemplateRepository */
export interface CloneTemplateRepositoryInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** A short description of the new repository. */
  description?: string;
  /** Whether to copy all branches from the template to the new repository. Defaults
    to copying only the default branch of the template. */
  includeAllBranches?: boolean;
  /** The name of the new repository. */
  name: string;
  /** The ID of the owner for the new repository. */
  ownerId: ID;
  /** The Node ID of the template repository. */
  repositoryId: ID;
  /** Indicates the repository's visibility level. */
  visibility: RepositoryVisibility;
}

/** Autogenerated input type of CloseIssue */
export interface CloseIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** ID of the issue to be closed. */
  issueId: ID;
}

/** Autogenerated input type of ClosePullRequest */
export interface ClosePullRequestInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** ID of the pull request to be closed. */
  pullRequestId: ID;
}

/** Specifies an author for filtering Git commits. */
export interface CommitAuthor {
  /** Email addresses to filter by. Commits authored by any of the specified email addresses will be returned. */
  emails?: string[];
  /** ID of a User to filter by. If non-null, only commits authored by this user
    will be returned. This field takes precedence over emails. */
  id?: ID;
}

/** Ordering options for commit contribution connections. */
export interface CommitContributionOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field by which to order commit contributions. */
  field: CommitContributionOrderField;
}

/** Ordering options for contribution connections. */
export interface ContributionOrder {
  /** The ordering direction. */
  direction: OrderDirection;
}

/** Autogenerated input type of ConvertProjectCardNoteToIssue */
export interface ConvertProjectCardNoteToIssueInput {
  /** The body of the newly created issue. */
  body?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ProjectCard ID to convert. */
  projectCardId: ID;
  /** The ID of the repository to create the issue in. */
  repositoryId: ID;
  /** The title of the newly created issue. Defaults to the card's note text. */
  title?: string;
}

/** Autogenerated input type of ConvertPullRequestToDraft */
export interface ConvertPullRequestToDraftInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** ID of the pull request to convert to draft */
  pullRequestId: ID;
}

/** Autogenerated input type of CreateBranchProtectionRule */
export interface CreateBranchProtectionRuleInput {
  /** Can this branch be deleted. */
  allowsDeletions?: boolean;
  /** Are force pushes allowed on this branch. */
  allowsForcePushes?: boolean;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: boolean;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: boolean;
  /** The glob-like pattern used to determine matching branches. */
  pattern: string;
  /** A list of User, Team or App IDs allowed to push to matching branches. */
  pushActorIds?: ID[];
  /** The global relay id of the repository in which a new branch protection rule should be created in. */
  repositoryId: ID;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: number;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: string[];
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: boolean;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: boolean;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: boolean;
  /** Are conversations required to be resolved before merging. */
  requiresConversationResolution?: boolean;
  /** Are merge commits prohibited from being pushed to this branch. */
  requiresLinearHistory?: boolean;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: boolean;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: boolean;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: boolean;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: boolean;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: ID[];
}

/** Autogenerated input type of CreateCheckRun */
export interface CreateCheckRunInput {
  /** Possible further actions the integrator can perform, which a user may trigger. */
  actions?: CheckRunAction[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The time that the check run finished. */
  completedAt?: DateTime;
  /** The final conclusion of the check. */
  conclusion?: CheckConclusionState;
  /** The URL of the integrator's site that has the full details of the check. */
  detailsUrl?: URI;
  /** A reference for the run on the integrator's system. */
  externalId?: string;
  /** The SHA of the head commit. */
  headSha: GitObjectID;
  /** The name of the check. */
  name: string;
  /** Descriptive details about the run. */
  output?: CheckRunOutput;
  /** The node ID of the repository. */
  repositoryId: ID;
  /** The time that the check run began. */
  startedAt?: DateTime;
  /** The current status. */
  status?: RequestableCheckStatusState;
}

/** Autogenerated input type of CreateCheckSuite */
export interface CreateCheckSuiteInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The SHA of the head commit. */
  headSha: GitObjectID;
  /** The Node ID of the repository. */
  repositoryId: ID;
}

/** Autogenerated input type of CreateContentAttachment */
export interface CreateContentAttachmentInput {
  /** The body of the content attachment, which may contain markdown. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The node ID of the content_reference. */
  contentReferenceId: ID;
  /** The title of the content attachment. */
  title: string;
}

/** Autogenerated input type of CreateDeployment */
export interface CreateDeploymentInput {
  /** Attempt to automatically merge the default branch into the requested ref, defaults to true. */
  autoMerge?: boolean;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Short description of the deployment. */
  description?: string;
  /** Name for the target deployment environment. */
  environment?: string;
  /** JSON payload with extra information about the deployment. */
  payload?: string;
  /** The node ID of the ref to be deployed. */
  refId: ID;
  /** The node ID of the repository. */
  repositoryId: ID;
  /** The status contexts to verify against commit status checks. To bypass required
    contexts, pass an empty array. Defaults to all unique contexts. */
  requiredContexts?: string[];
  /** Specifies a task to execute. */
  task?: string;
}

/** Autogenerated input type of CreateDeploymentStatus */
export interface CreateDeploymentStatusInput {
  /** Adds a new inactive status to all non-transient, non-production environment
    deployments with the same repository and environment name as the created
    status's deployment. */
  autoInactive?: boolean;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The node ID of the deployment. */
  deploymentId: ID;
  /** A short description of the status. Maximum length of 140 characters. */
  description?: string;
  /** If provided, updates the environment of the deploy. Otherwise, does not modify the environment. */
  environment?: string;
  /** Sets the URL for accessing your environment. */
  environmentUrl?: string;
  /** The log URL to associate with this status.       This URL should contain
    output to keep the user updated while the task is running       or serve as
    historical information for what happened in the deployment. */
  logUrl?: string;
  /** The state of the deployment. */
  state: DeploymentStatusState;
}

/** Autogenerated input type of CreateDiscussion */
export interface CreateDiscussionInput {
  /** The body of the discussion. */
  body: string;
  /** The id of the discussion category to associate with this discussion. */
  categoryId: ID;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The id of the repository on which to create the discussion. */
  repositoryId: ID;
  /** The title of the discussion. */
  title: string;
}

/** Autogenerated input type of CreateEnterpriseOrganization */
export interface CreateEnterpriseOrganizationInput {
  /** The logins for the administrators of the new organization. */
  adminLogins: string[];
  /** The email used for sending billing receipts. */
  billingEmail: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise owning the new organization. */
  enterpriseId: ID;
  /** The login of the new organization. */
  login: string;
  /** The profile name of the new organization. */
  profileName: string;
}

/** Autogenerated input type of CreateEnvironment */
export interface CreateEnvironmentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The name of the environment. */
  name: string;
  /** The node ID of the repository. */
  repositoryId: ID;
}

/** Autogenerated input type of CreateIpAllowListEntry */
export interface CreateIpAllowListEntryInput {
  /** An IP address or range of addresses in CIDR notation. */
  allowListValue: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Whether the IP allow list entry is active when an IP allow list is enabled. */
  isActive: boolean;
  /** An optional name for the IP allow list entry. */
  name?: string;
  /** The ID of the owner for which to create the new IP allow list entry. */
  ownerId: ID;
}

/** Autogenerated input type of CreateIssue */
export interface CreateIssueInput {
  /** The Node ID for the user assignee for this issue. */
  assigneeIds?: ID[];
  /** The body for the issue description. */
  body?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The name of an issue template in the repository, assigns labels and assignees from the template to the issue */
  issueTemplate?: string;
  /** An array of Node IDs of labels for this issue. */
  labelIds?: ID[];
  /** The Node ID of the milestone for this issue. */
  milestoneId?: ID;
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: ID[];
  /** The Node ID of the repository. */
  repositoryId: ID;
  /** The title for the issue. */
  title: string;
}

/** Autogenerated input type of CreateLabel */
export interface CreateLabelInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** A 6 character hex code, without the leading #, identifying the color of the label. */
  color: string;
  /** A brief description of the label, such as its purpose. */
  description?: string;
  /** The name of the label. */
  name: string;
  /** The Node ID of the repository. */
  repositoryId: ID;
}

/** Autogenerated input type of CreateProject */
export interface CreateProjectInput {
  /** The description of project. */
  body?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The name of project. */
  name: string;
  /** The owner ID to create the project under. */
  ownerId: ID;
  /** A list of repository IDs to create as linked repositories for the project */
  repositoryIds?: ID[];
  /** The name of the GitHub-provided template. */
  template?: ProjectTemplate;
}

/** Autogenerated input type of CreatePullRequest */
export interface CreatePullRequestInput {
  /** The name of the branch you want your changes pulled into. This should be an existing branch
    on the current repository. You cannot update the base branch on a pull request to point
    to another repository. */
  baseRefName: string;
  /** The contents of the pull request. */
  body?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Indicates whether this pull request should be a draft. */
  draft?: boolean;
  /** The name of the branch where your changes are implemented. For cross-repository pull requests
    in the same network, namespace `head_ref_name` with a user like this: `username:branch`. */
  headRefName: string;
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: boolean;
  /** The Node ID of the repository. */
  repositoryId: ID;
  /** The title of the pull request. */
  title: string;
}

/** Autogenerated input type of CreateRef */
export interface CreateRefInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The fully qualified name of the new Ref (ie: `refs/heads/my_new_branch`). */
  name: string;
  /** The GitObjectID that the new Ref shall target. Must point to a commit. */
  oid: GitObjectID;
  /** The Node ID of the Repository to create the Ref in. */
  repositoryId: ID;
}

/** Autogenerated input type of CreateRepository */
export interface CreateRepositoryInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** A short description of the new repository. */
  description?: string;
  /** Indicates if the repository should have the issues feature enabled. */
  hasIssuesEnabled?: boolean;
  /** Indicates if the repository should have the wiki feature enabled. */
  hasWikiEnabled?: boolean;
  /** The URL for a web page about this repository. */
  homepageUrl?: URI;
  /** The name of the new repository. */
  name: string;
  /** The ID of the owner for the new repository. */
  ownerId?: ID;
  /** When an organization is specified as the owner, this ID identifies the team
    that should be granted access to the new repository. */
  teamId?: ID;
  /** Whether this repository should be marked as a template such that anyone who
    can access it can create new repositories with the same files and directory structure. */
  template?: boolean;
  /** Indicates the repository's visibility level. */
  visibility: RepositoryVisibility;
}

/** Autogenerated input type of CreateTeamDiscussionComment */
export interface CreateTeamDiscussionCommentInput {
  /** The content of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the discussion to which the comment belongs. */
  discussionId: ID;
}

/** Autogenerated input type of CreateTeamDiscussion */
export interface CreateTeamDiscussionInput {
  /** The content of the discussion. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** If true, restricts the visibility of this discussion to team members and
    organization admins. If false or not specified, allows any organization member
    to view this discussion. */
  private?: boolean;
  /** The ID of the team to which the discussion belongs. */
  teamId: ID;
  /** The title of the discussion. */
  title: string;
}

/** Autogenerated input type of DeclineTopicSuggestion */
export interface DeclineTopicSuggestionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The name of the suggested topic. */
  name: string;
  /** The reason why the suggested topic is declined. */
  reason: TopicSuggestionDeclineReason;
  /** The Node ID of the repository. */
  repositoryId: ID;
}

/** Autogenerated input type of DeleteBranchProtectionRule */
export interface DeleteBranchProtectionRuleInput {
  /** The global relay id of the branch protection rule to be deleted. */
  branchProtectionRuleId: ID;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated input type of DeleteDeployment */
export interface DeleteDeploymentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the deployment to be deleted. */
  id: ID;
}

/** Autogenerated input type of DeleteDiscussionComment */
export interface DeleteDiscussionCommentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node id of the discussion comment to delete. */
  id: ID;
}

/** Autogenerated input type of DeleteDiscussion */
export interface DeleteDiscussionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The id of the discussion to delete. */
  id: ID;
}

/** Autogenerated input type of DeleteEnvironment */
export interface DeleteEnvironmentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the environment to be deleted. */
  id: ID;
}

/** Autogenerated input type of DeleteIpAllowListEntry */
export interface DeleteIpAllowListEntryInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the IP allow list entry to delete. */
  ipAllowListEntryId: ID;
}

/** Autogenerated input type of DeleteIssueComment */
export interface DeleteIssueCommentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the comment to delete. */
  id: ID;
}

/** Autogenerated input type of DeleteIssue */
export interface DeleteIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the issue to delete. */
  issueId: ID;
}

/** Autogenerated input type of DeleteLabel */
export interface DeleteLabelInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the label to be deleted. */
  id: ID;
}

/** Autogenerated input type of DeletePackageVersion */
export interface DeletePackageVersionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the package version to be deleted. */
  packageVersionId: ID;
}

/** Autogenerated input type of DeleteProjectCard */
export interface DeleteProjectCardInput {
  /** The id of the card to delete. */
  cardId: ID;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated input type of DeleteProjectColumn */
export interface DeleteProjectColumnInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The id of the column to delete. */
  columnId: ID;
}

/** Autogenerated input type of DeleteProject */
export interface DeleteProjectInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Project ID to update. */
  projectId: ID;
}

/** Autogenerated input type of DeletePullRequestReviewComment */
export interface DeletePullRequestReviewCommentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the comment to delete. */
  id: ID;
}

/** Autogenerated input type of DeletePullRequestReview */
export interface DeletePullRequestReviewInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the pull request review to delete. */
  pullRequestReviewId: ID;
}

/** Autogenerated input type of DeleteRef */
export interface DeleteRefInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the Ref to be deleted. */
  refId: ID;
}

/** Autogenerated input type of DeleteTeamDiscussionComment */
export interface DeleteTeamDiscussionCommentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the comment to delete. */
  id: ID;
}

/** Autogenerated input type of DeleteTeamDiscussion */
export interface DeleteTeamDiscussionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The discussion ID to delete. */
  id: ID;
}

/** Autogenerated input type of DeleteVerifiableDomain */
export interface DeleteVerifiableDomainInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the verifiable domain to delete. */
  id: ID;
}

/** Ordering options for deployment connections */
export interface DeploymentOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order deployments by. */
  field: DeploymentOrderField;
}

/** Autogenerated input type of DisablePullRequestAutoMerge */
export interface DisablePullRequestAutoMergeInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** ID of the pull request to disable auto merge on. */
  pullRequestId: ID;
}

/** Ways in which lists of discussions can be ordered upon return. */
export interface DiscussionOrder {
  /** The direction in which to order discussions by the specified field. */
  direction: OrderDirection;
  /** The field by which to order discussions. */
  field: DiscussionOrderField;
}

/** Autogenerated input type of DismissPullRequestReview */
export interface DismissPullRequestReviewInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The contents of the pull request review dismissal message. */
  message: string;
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: ID;
}

/** Specifies a review comment to be left with a Pull Request Review. */
export interface DraftPullRequestReviewComment {
  /** Body of the comment to leave. */
  body: string;
  /** Path to the file being commented on. */
  path: string;
  /** Position in the file to leave a comment on. */
  position: number;
}

/** Specifies a review comment thread to be left with a Pull Request Review. */
export interface DraftPullRequestReviewThread {
  /** Body of the comment to leave. */
  body: string;
  /** The line of the blob to which the thread refers. The end of the line range for multi-line comments. */
  line: number;
  /** Path to the file being commented on. */
  path: string;
  /** The side of the diff on which the line resides. For multi-line comments, this is the side for the end of the line range. */
  side?: DiffSide;
  /** The first line of the range to which the comment refers. */
  startLine?: number;
  /** The side of the diff on which the start line resides. */
  startSide?: DiffSide;
}

/** Autogenerated input type of EnablePullRequestAutoMerge */
export interface EnablePullRequestAutoMergeInput {
  /** The email address to associate with this merge. */
  authorEmail?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Commit body to use for the commit when the PR is mergable; if omitted, a default message will be used. */
  commitBody?: string;
  /** Commit headline to use for the commit when the PR is mergable; if omitted, a default message will be used. */
  commitHeadline?: string;
  /** The merge method to use. If omitted, defaults to 'MERGE' */
  mergeMethod?: PullRequestMergeMethod;
  /** ID of the pull request to enable auto-merge on. */
  pullRequestId: ID;
}

/** Ordering options for enterprise administrator invitation connections */
export interface EnterpriseAdministratorInvitationOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order enterprise administrator invitations by. */
  field: EnterpriseAdministratorInvitationOrderField;
}

/** Ordering options for enterprise member connections. */
export interface EnterpriseMemberOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order enterprise members by. */
  field: EnterpriseMemberOrderField;
}

/** Ordering options for Enterprise Server installation connections. */
export interface EnterpriseServerInstallationOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order Enterprise Server installations by. */
  field: EnterpriseServerInstallationOrderField;
}

/** Ordering options for Enterprise Server user account email connections. */
export interface EnterpriseServerUserAccountEmailOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order emails by. */
  field: EnterpriseServerUserAccountEmailOrderField;
}

/** Ordering options for Enterprise Server user account connections. */
export interface EnterpriseServerUserAccountOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order user accounts by. */
  field: EnterpriseServerUserAccountOrderField;
}

/** Ordering options for Enterprise Server user accounts upload connections. */
export interface EnterpriseServerUserAccountsUploadOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order user accounts uploads by. */
  field: EnterpriseServerUserAccountsUploadOrderField;
}

/** Autogenerated input type of FollowUser */
export interface FollowUserInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** ID of the user to follow. */
  userId: ID;
}

/** Ordering options for gist connections */
export interface GistOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order repositories by. */
  field: GistOrderField;
}

/** Autogenerated input type of ImportProject */
export interface ImportProjectInput {
  /** The description of Project. */
  body?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** A list of columns containing issues and pull requests. */
  columnImports: ProjectColumnImport[];
  /** The name of Project. */
  name: string;
  /** The name of the Organization or User to create the Project under. */
  ownerName: string;
  /** Whether the Project is public or not. */
  public?: boolean;
}

/** Autogenerated input type of InviteEnterpriseAdmin */
export interface InviteEnterpriseAdminInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The email of the person to invite as an administrator. */
  email?: string;
  /** The ID of the enterprise to which you want to invite an administrator. */
  enterpriseId: ID;
  /** The login of a user to invite as an administrator. */
  invitee?: string;
  /** The role of the administrator. */
  role?: EnterpriseAdministratorRole;
}

/** Ordering options for IP allow list entry connections. */
export interface IpAllowListEntryOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order IP allow list entries by. */
  field: IpAllowListEntryOrderField;
}

/** Ways in which lists of issue comments can be ordered upon return. */
export interface IssueCommentOrder {
  /** The direction in which to order issue comments by the specified field. */
  direction: OrderDirection;
  /** The field in which to order issue comments by. */
  field: IssueCommentOrderField;
}

/** Ways in which to filter lists of issues. */
export interface IssueFilters {
  /** List issues assigned to given name. Pass in `null` for issues with no assigned
    user, and `*` for issues assigned to any user. */
  assignee?: string;
  /** List issues created by given name. */
  createdBy?: string;
  /** List issues where the list of label names exist on the issue. */
  labels?: string[];
  /** List issues where the given name is mentioned in the issue. */
  mentioned?: string;
  /** List issues by given milestone argument. If an string representation of an
    integer is passed, it should refer to a milestone by its number field. Pass in
    `null` for issues with no milestone, and `*` for issues that are assigned to any milestone. */
  milestone?: string;
  /** List issues that have been updated at or after the given date. */
  since?: DateTime;
  /** List issues filtered by the list of states given. */
  states?: IssueState[];
  /** List issues subscribed to by viewer. */
  viewerSubscribed?: boolean;
}

/** Ways in which lists of issues can be ordered upon return. */
export interface IssueOrder {
  /** The direction in which to order issues by the specified field. */
  direction: OrderDirection;
  /** The field in which to order issues by. */
  field: IssueOrderField;
}

/** Ways in which lists of labels can be ordered upon return. */
export interface LabelOrder {
  /** The direction in which to order labels by the specified field. */
  direction: OrderDirection;
  /** The field in which to order labels by. */
  field: LabelOrderField;
}

/** Ordering options for language connections. */
export interface LanguageOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order languages by. */
  field: LanguageOrderField;
}

/** Autogenerated input type of LinkRepositoryToProject */
export interface LinkRepositoryToProjectInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the Project to link to a Repository */
  projectId: ID;
  /** The ID of the Repository to link to a Project. */
  repositoryId: ID;
}

/** Autogenerated input type of LockLockable */
export interface LockLockableInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** A reason for why the item will be locked. */
  lockReason?: LockReason;
  /** ID of the item to be locked. */
  lockableId: ID;
}

/** Autogenerated input type of MarkDiscussionCommentAsAnswer */
export interface MarkDiscussionCommentAsAnswerInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the discussion comment to mark as an answer. */
  id: ID;
}

/** Autogenerated input type of MarkFileAsViewed */
export interface MarkFileAsViewedInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The path of the file to mark as viewed */
  path: string;
  /** The Node ID of the pull request. */
  pullRequestId: ID;
}

/** Autogenerated input type of MarkPullRequestReadyForReview */
export interface MarkPullRequestReadyForReviewInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** ID of the pull request to be marked as ready for review. */
  pullRequestId: ID;
}

/** Autogenerated input type of MergeBranch */
export interface MergeBranchInput {
  /** The email address to associate with this commit. */
  authorEmail?: string;
  /** The name of the base branch that the provided head will be merged into. */
  base: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Message to use for the merge commit. If omitted, a default will be used. */
  commitMessage?: string;
  /** The head to merge into the base branch. This can be a branch name or a commit GitObjectID. */
  head: string;
  /** The Node ID of the Repository containing the base branch that will be modified. */
  repositoryId: ID;
}

/** Autogenerated input type of MergePullRequest */
export interface MergePullRequestInput {
  /** The email address to associate with this merge. */
  authorEmail?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Commit body to use for the merge commit; if omitted, a default message will be used */
  commitBody?: string;
  /** Commit headline to use for the merge commit; if omitted, a default message will be used. */
  commitHeadline?: string;
  /** OID that the pull request head ref must match to allow merge; if omitted, no check is performed. */
  expectedHeadOid?: GitObjectID;
  /** The merge method to use. If omitted, defaults to 'MERGE' */
  mergeMethod?: PullRequestMergeMethod;
  /** ID of the pull request to be merged. */
  pullRequestId: ID;
}

/** Ordering options for milestone connections. */
export interface MilestoneOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order milestones by. */
  field: MilestoneOrderField;
}

/** Autogenerated input type of MinimizeComment */
export interface MinimizeCommentInput {
  /** The classification of comment */
  classifier: ReportedContentClassifiers;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the subject to modify. */
  subjectId: ID;
}

/** Autogenerated input type of MoveProjectCard */
export interface MoveProjectCardInput {
  /** Place the new card after the card with this id. Pass null to place it at the top. */
  afterCardId?: ID;
  /** The id of the card to move. */
  cardId: ID;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The id of the column to move it into. */
  columnId: ID;
}

/** Autogenerated input type of MoveProjectColumn */
export interface MoveProjectColumnInput {
  /** Place the new column after the column with this id. Pass null to place it at the front. */
  afterColumnId?: ID;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The id of the column to move. */
  columnId: ID;
}

/** Ordering options for organization connections. */
export interface OrganizationOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order organizations by. */
  field: OrganizationOrderField;
}

/** Ways in which lists of package files can be ordered upon return. */
export interface PackageFileOrder {
  /** The direction in which to order package files by the specified field. */
  direction?: OrderDirection;
  /** The field in which to order package files by. */
  field?: PackageFileOrderField;
}

/** Ways in which lists of packages can be ordered upon return. */
export interface PackageOrder {
  /** The direction in which to order packages by the specified field. */
  direction?: OrderDirection;
  /** The field in which to order packages by. */
  field?: PackageOrderField;
}

/** Ways in which lists of package versions can be ordered upon return. */
export interface PackageVersionOrder {
  /** The direction in which to order package versions by the specified field. */
  direction?: OrderDirection;
  /** The field in which to order package versions by. */
  field?: PackageVersionOrderField;
}

/** Autogenerated input type of PinIssue */
export interface PinIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the issue to be pinned */
  issueId: ID;
}

/** An issue or PR and its owning repository to be used in a project card. */
export interface ProjectCardImport {
  /** The issue or pull request number. */
  number: number;
  /** Repository name with owner (owner/repository). */
  repository: string;
}

/** A project column and a list of its issues and PRs. */
export interface ProjectColumnImport {
  /** The name of the column. */
  columnName: string;
  /** A list of issues and pull requests in the column. */
  issues?: ProjectCardImport[];
  /** The position of the column, starting from 0. */
  position: number;
}

/** Ways in which lists of projects can be ordered upon return. */
export interface ProjectOrder {
  /** The direction in which to order projects by the specified field. */
  direction: OrderDirection;
  /** The field in which to order projects by. */
  field: ProjectOrderField;
}

/** Ways in which lists of issues can be ordered upon return. */
export interface PullRequestOrder {
  /** The direction in which to order pull requests by the specified field. */
  direction: OrderDirection;
  /** The field in which to order pull requests by. */
  field: PullRequestOrderField;
}

/** Ways in which lists of reactions can be ordered upon return. */
export interface ReactionOrder {
  /** The direction in which to order reactions by the specified field. */
  direction: OrderDirection;
  /** The field in which to order reactions by. */
  field: ReactionOrderField;
}

/** Ways in which lists of git refs can be ordered upon return. */
export interface RefOrder {
  /** The direction in which to order refs by the specified field. */
  direction: OrderDirection;
  /** The field in which to order refs by. */
  field: RefOrderField;
}

/** A ref update */
export interface RefUpdate {
  /** The value this ref should be updated to. */
  afterOid: GitObjectID;
  /** The value this ref needs to point to before the update. */
  beforeOid?: GitObjectID;
  /** Force a non fast-forward update. */
  force?: boolean;
  /** The fully qualified name of the ref to be update. For example `refs/heads/branch-name` */
  name: GitRefname;
}

/** Autogenerated input type of RegenerateEnterpriseIdentityProviderRecoveryCodes */
export interface RegenerateEnterpriseIdentityProviderRecoveryCodesInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set an identity provider. */
  enterpriseId: ID;
}

/** Autogenerated input type of RegenerateVerifiableDomainToken */
export interface RegenerateVerifiableDomainTokenInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the verifiable domain to regenerate the verification token of. */
  id: ID;
}

/** Autogenerated input type of RejectDeployments */
export interface RejectDeploymentsInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Optional comment for rejecting deployments */
  comment?: string;
  /** The ids of environments to reject deployments */
  environmentIds: ID[];
  /** The node ID of the workflow run containing the pending deployments. */
  workflowRunId: ID;
}

/** Ways in which lists of releases can be ordered upon return. */
export interface ReleaseOrder {
  /** The direction in which to order releases by the specified field. */
  direction: OrderDirection;
  /** The field in which to order releases by. */
  field: ReleaseOrderField;
}

/** Autogenerated input type of RemoveAssigneesFromAssignable */
export interface RemoveAssigneesFromAssignableInput {
  /** The id of the assignable object to remove assignees from. */
  assignableId: ID;
  /** The id of users to remove as assignees. */
  assigneeIds: ID[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated input type of RemoveEnterpriseAdmin */
export interface RemoveEnterpriseAdminInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Enterprise ID from which to remove the administrator. */
  enterpriseId: ID;
  /** The login of the user to remove as an administrator. */
  login: string;
}

/** Autogenerated input type of RemoveEnterpriseIdentityProvider */
export interface RemoveEnterpriseIdentityProviderInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise from which to remove the identity provider. */
  enterpriseId: ID;
}

/** Autogenerated input type of RemoveEnterpriseOrganization */
export interface RemoveEnterpriseOrganizationInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise from which the organization should be removed. */
  enterpriseId: ID;
  /** The ID of the organization to remove from the enterprise. */
  organizationId: ID;
}

/** Autogenerated input type of RemoveEnterpriseSupportEntitlement */
export interface RemoveEnterpriseSupportEntitlementInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the Enterprise which the admin belongs to. */
  enterpriseId: ID;
  /** The login of a member who will lose the support entitlement. */
  login: string;
}

/** Autogenerated input type of RemoveLabelsFromLabelable */
export interface RemoveLabelsFromLabelableInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ids of labels to remove. */
  labelIds: ID[];
  /** The id of the Labelable to remove labels from. */
  labelableId: ID;
}

/** Autogenerated input type of RemoveOutsideCollaborator */
export interface RemoveOutsideCollaboratorInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the organization to remove the outside collaborator from. */
  organizationId: ID;
  /** The ID of the outside collaborator to remove. */
  userId: ID;
}

/** Autogenerated input type of RemoveReaction */
export interface RemoveReactionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The name of the emoji reaction to remove. */
  content: ReactionContent;
  /** The Node ID of the subject to modify. */
  subjectId: ID;
}

/** Autogenerated input type of RemoveStar */
export interface RemoveStarInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Starrable ID to unstar. */
  starrableId: ID;
}

/** Autogenerated input type of RemoveUpvote */
export interface RemoveUpvoteInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the discussion or comment to remove upvote. */
  subjectId: ID;
}

/** Autogenerated input type of ReopenIssue */
export interface ReopenIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** ID of the issue to be opened. */
  issueId: ID;
}

/** Autogenerated input type of ReopenPullRequest */
export interface ReopenPullRequestInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** ID of the pull request to be reopened. */
  pullRequestId: ID;
}

/** Ordering options for repository invitation connections. */
export interface RepositoryInvitationOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order repository invitations by. */
  field: RepositoryInvitationOrderField;
}

/** Ordering options for repository connections */
export interface RepositoryOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order repositories by. */
  field: RepositoryOrderField;
}

/** Autogenerated input type of RequestReviews */
export interface RequestReviewsInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the pull request to modify. */
  pullRequestId: ID;
  /** The Node IDs of the team to request. */
  teamIds?: ID[];
  /** Add users to the set rather than replace. */
  union?: boolean;
  /** The Node IDs of the user to request. */
  userIds?: ID[];
}

/** Autogenerated input type of RerequestCheckSuite */
export interface RerequestCheckSuiteInput {
  /** The Node ID of the check suite. */
  checkSuiteId: ID;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the repository. */
  repositoryId: ID;
}

/** Autogenerated input type of ResolveReviewThread */
export interface ResolveReviewThreadInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the thread to resolve */
  threadId: ID;
}

/** Ordering options for saved reply connections. */
export interface SavedReplyOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order saved replies by. */
  field: SavedReplyOrderField;
}

/** An advisory identifier to filter results on. */
export interface SecurityAdvisoryIdentifierFilter {
  /** The identifier type. */
  type: SecurityAdvisoryIdentifierType;
  /** The identifier string. Supports exact or partial matching. */
  value: string;
}

/** Ordering options for security advisory connections */
export interface SecurityAdvisoryOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order security advisories by. */
  field: SecurityAdvisoryOrderField;
}

/** Ordering options for security vulnerability connections */
export interface SecurityVulnerabilityOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order security vulnerabilities by. */
  field: SecurityVulnerabilityOrderField;
}

/** Autogenerated input type of SetEnterpriseIdentityProvider */
export interface SetEnterpriseIdentityProviderInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The digest algorithm used to sign SAML requests for the identity provider. */
  digestMethod: SamlDigestAlgorithm;
  /** The ID of the enterprise on which to set an identity provider. */
  enterpriseId: ID;
  /** The x509 certificate used by the identity provider to sign assertions and responses. */
  idpCertificate: string;
  /** The Issuer Entity ID for the SAML identity provider */
  issuer?: string;
  /** The signature algorithm used to sign SAML requests for the identity provider. */
  signatureMethod: SamlSignatureAlgorithm;
  /** The URL endpoint for the identity provider's SAML SSO. */
  ssoUrl: URI;
}

/** Autogenerated input type of SetOrganizationInteractionLimit */
export interface SetOrganizationInteractionLimitInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** When this limit should expire. */
  expiry?: RepositoryInteractionLimitExpiry;
  /** The limit to set. */
  limit: RepositoryInteractionLimit;
  /** The ID of the organization to set a limit for. */
  organizationId: ID;
}

/** Autogenerated input type of SetRepositoryInteractionLimit */
export interface SetRepositoryInteractionLimitInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** When this limit should expire. */
  expiry?: RepositoryInteractionLimitExpiry;
  /** The limit to set. */
  limit: RepositoryInteractionLimit;
  /** The ID of the repository to set a limit for. */
  repositoryId: ID;
}

/** Autogenerated input type of SetUserInteractionLimit */
export interface SetUserInteractionLimitInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** When this limit should expire. */
  expiry?: RepositoryInteractionLimitExpiry;
  /** The limit to set. */
  limit: RepositoryInteractionLimit;
  /** The ID of the user to set a limit for. */
  userId: ID;
}

/** Ordering options for connections to get sponsorable entities for GitHub Sponsors. */
export interface SponsorableOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order sponsorable entities by. */
  field: SponsorableOrderField;
}

/** Ordering options for Sponsors tiers connections. */
export interface SponsorsTierOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order tiers by. */
  field: SponsorsTierOrderField;
}

/** Ordering options for sponsorship connections. */
export interface SponsorshipOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order sponsorship by. */
  field: SponsorshipOrderField;
}

/** Ways in which star connections can be ordered. */
export interface StarOrder {
  /** The direction in which to order nodes. */
  direction: OrderDirection;
  /** The field in which to order nodes by. */
  field: StarOrderField;
}

/** Autogenerated input type of SubmitPullRequestReview */
export interface SubmitPullRequestReviewInput {
  /** The text field to set on the Pull Request Review. */
  body?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The event to send to the Pull Request Review. */
  event: PullRequestReviewEvent;
  /** The Pull Request ID to submit any pending reviews. */
  pullRequestId?: ID;
  /** The Pull Request Review ID to submit. */
  pullRequestReviewId?: ID;
}

/** Ways in which team discussion comment connections can be ordered. */
export interface TeamDiscussionCommentOrder {
  /** The direction in which to order nodes. */
  direction: OrderDirection;
  /** The field by which to order nodes. */
  field: TeamDiscussionCommentOrderField;
}

/** Ways in which team discussion connections can be ordered. */
export interface TeamDiscussionOrder {
  /** The direction in which to order nodes. */
  direction: OrderDirection;
  /** The field by which to order nodes. */
  field: TeamDiscussionOrderField;
}

/** Ordering options for team member connections */
export interface TeamMemberOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order team members by. */
  field: TeamMemberOrderField;
}

/** Ways in which team connections can be ordered. */
export interface TeamOrder {
  /** The direction in which to order nodes. */
  direction: OrderDirection;
  /** The field in which to order nodes by. */
  field: TeamOrderField;
}

/** Ordering options for team repository connections */
export interface TeamRepositoryOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order repositories by. */
  field: TeamRepositoryOrderField;
}

/** Autogenerated input type of TransferIssue */
export interface TransferIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the issue to be transferred */
  issueId: ID;
  /** The Node ID of the repository the issue should be transferred to */
  repositoryId: ID;
}

/** Autogenerated input type of UnarchiveRepository */
export interface UnarchiveRepositoryInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the repository to unarchive. */
  repositoryId: ID;
}

/** Autogenerated input type of UnfollowUser */
export interface UnfollowUserInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** ID of the user to unfollow. */
  userId: ID;
}

/** Autogenerated input type of UnlinkRepositoryFromProject */
export interface UnlinkRepositoryFromProjectInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the Project linked to the Repository. */
  projectId: ID;
  /** The ID of the Repository linked to the Project. */
  repositoryId: ID;
}

/** Autogenerated input type of UnlockLockable */
export interface UnlockLockableInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** ID of the item to be unlocked. */
  lockableId: ID;
}

/** Autogenerated input type of UnmarkDiscussionCommentAsAnswer */
export interface UnmarkDiscussionCommentAsAnswerInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the discussion comment to unmark as an answer. */
  id: ID;
}

/** Autogenerated input type of UnmarkFileAsViewed */
export interface UnmarkFileAsViewedInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The path of the file to mark as unviewed */
  path: string;
  /** The Node ID of the pull request. */
  pullRequestId: ID;
}

/** Autogenerated input type of UnmarkIssueAsDuplicate */
export interface UnmarkIssueAsDuplicateInput {
  /** ID of the issue or pull request currently considered canonical/authoritative/original. */
  canonicalId: ID;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** ID of the issue or pull request currently marked as a duplicate. */
  duplicateId: ID;
}

/** Autogenerated input type of UnminimizeComment */
export interface UnminimizeCommentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the subject to modify. */
  subjectId: ID;
}

/** Autogenerated input type of UnpinIssue */
export interface UnpinIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the issue to be unpinned */
  issueId: ID;
}

/** Autogenerated input type of UnresolveReviewThread */
export interface UnresolveReviewThreadInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the thread to unresolve */
  threadId: ID;
}

/** Autogenerated input type of UpdateBranchProtectionRule */
export interface UpdateBranchProtectionRuleInput {
  /** Can this branch be deleted. */
  allowsDeletions?: boolean;
  /** Are force pushes allowed on this branch. */
  allowsForcePushes?: boolean;
  /** The global relay id of the branch protection rule to be updated. */
  branchProtectionRuleId: ID;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: boolean;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: boolean;
  /** The glob-like pattern used to determine matching branches. */
  pattern?: string;
  /** A list of User, Team or App IDs allowed to push to matching branches. */
  pushActorIds?: ID[];
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: number;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: string[];
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: boolean;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: boolean;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: boolean;
  /** Are conversations required to be resolved before merging. */
  requiresConversationResolution?: boolean;
  /** Are merge commits prohibited from being pushed to this branch. */
  requiresLinearHistory?: boolean;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: boolean;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: boolean;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: boolean;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: boolean;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: ID[];
}

/** Autogenerated input type of UpdateCheckRun */
export interface UpdateCheckRunInput {
  /** Possible further actions the integrator can perform, which a user may trigger. */
  actions?: CheckRunAction[];
  /** The node of the check. */
  checkRunId: ID;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The time that the check run finished. */
  completedAt?: DateTime;
  /** The final conclusion of the check. */
  conclusion?: CheckConclusionState;
  /** The URL of the integrator's site that has the full details of the check. */
  detailsUrl?: URI;
  /** A reference for the run on the integrator's system. */
  externalId?: string;
  /** The name of the check. */
  name?: string;
  /** Descriptive details about the run. */
  output?: CheckRunOutput;
  /** The node ID of the repository. */
  repositoryId: ID;
  /** The time that the check run began. */
  startedAt?: DateTime;
  /** The current status. */
  status?: RequestableCheckStatusState;
}

/** Autogenerated input type of UpdateCheckSuitePreferences */
export interface UpdateCheckSuitePreferencesInput {
  /** The check suite preferences to modify. */
  autoTriggerPreferences: CheckSuiteAutoTriggerPreference[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the repository. */
  repositoryId: ID;
}

/** Autogenerated input type of UpdateDiscussionComment */
export interface UpdateDiscussionCommentInput {
  /** The new contents of the comment body. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the discussion comment to update. */
  commentId: ID;
}

/** Autogenerated input type of UpdateDiscussion */
export interface UpdateDiscussionInput {
  /** The new contents of the discussion body. */
  body?: string;
  /** The Node ID of a discussion category within the same repository to change this discussion to. */
  categoryId?: ID;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the discussion to update. */
  discussionId: ID;
  /** The new discussion title. */
  title?: string;
}

/** Autogenerated input type of UpdateEnterpriseAdministratorRole */
export interface UpdateEnterpriseAdministratorRoleInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the Enterprise which the admin belongs to. */
  enterpriseId: ID;
  /** The login of a administrator whose role is being changed. */
  login: string;
  /** The new role for the Enterprise administrator. */
  role: EnterpriseAdministratorRole;
}

/** Autogenerated input type of UpdateEnterpriseAllowPrivateRepositoryForkingSetting */
export interface UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the allow private repository forking setting. */
  enterpriseId: ID;
  /** The value for the allow private repository forking setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseDefaultRepositoryPermissionSetting */
export interface UpdateEnterpriseDefaultRepositoryPermissionSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the base repository permission setting. */
  enterpriseId: ID;
  /** The value for the base repository permission setting on the enterprise. */
  settingValue: EnterpriseDefaultRepositoryPermissionSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting */
export interface UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the members can change repository visibility setting. */
  enterpriseId: ID;
  /** The value for the members can change repository visibility setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseMembersCanCreateRepositoriesSetting */
export interface UpdateEnterpriseMembersCanCreateRepositoriesSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the members can create repositories setting. */
  enterpriseId: ID;
  /** Allow members to create internal repositories. Defaults to current value. */
  membersCanCreateInternalRepositories?: boolean;
  /** Allow members to create private repositories. Defaults to current value. */
  membersCanCreatePrivateRepositories?: boolean;
  /** Allow members to create public repositories. Defaults to current value. */
  membersCanCreatePublicRepositories?: boolean;
  /** When false, allow member organizations to set their own repository creation member privileges. */
  membersCanCreateRepositoriesPolicyEnabled?: boolean;
  /** Value for the members can create repositories setting on the enterprise. This
    or the granular public/private/internal allowed fields (but not both) must be provided. */
  settingValue?: EnterpriseMembersCanCreateRepositoriesSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseMembersCanDeleteIssuesSetting */
export interface UpdateEnterpriseMembersCanDeleteIssuesSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the members can delete issues setting. */
  enterpriseId: ID;
  /** The value for the members can delete issues setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseMembersCanDeleteRepositoriesSetting */
export interface UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the members can delete repositories setting. */
  enterpriseId: ID;
  /** The value for the members can delete repositories setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseMembersCanInviteCollaboratorsSetting */
export interface UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the members can invite collaborators setting. */
  enterpriseId: ID;
  /** The value for the members can invite collaborators setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseMembersCanMakePurchasesSetting */
export interface UpdateEnterpriseMembersCanMakePurchasesSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the members can make purchases setting. */
  enterpriseId: ID;
  /** The value for the members can make purchases setting on the enterprise. */
  settingValue: EnterpriseMembersCanMakePurchasesSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting */
export interface UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the members can update protected branches setting. */
  enterpriseId: ID;
  /** The value for the members can update protected branches setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseMembersCanViewDependencyInsightsSetting */
export interface UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the members can view dependency insights setting. */
  enterpriseId: ID;
  /** The value for the members can view dependency insights setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseOrganizationProjectsSetting */
export interface UpdateEnterpriseOrganizationProjectsSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the organization projects setting. */
  enterpriseId: ID;
  /** The value for the organization projects setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseProfile */
export interface UpdateEnterpriseProfileInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The description of the enterprise. */
  description?: string;
  /** The Enterprise ID to update. */
  enterpriseId: ID;
  /** The location of the enterprise. */
  location?: string;
  /** The name of the enterprise. */
  name?: string;
  /** The URL of the enterprise's website. */
  websiteUrl?: string;
}

/** Autogenerated input type of UpdateEnterpriseRepositoryProjectsSetting */
export interface UpdateEnterpriseRepositoryProjectsSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the repository projects setting. */
  enterpriseId: ID;
  /** The value for the repository projects setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseTeamDiscussionsSetting */
export interface UpdateEnterpriseTeamDiscussionsSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the team discussions setting. */
  enterpriseId: ID;
  /** The value for the team discussions setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue;
}

/** Autogenerated input type of UpdateEnterpriseTwoFactorAuthenticationRequiredSetting */
export interface UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the enterprise on which to set the two factor authentication required setting. */
  enterpriseId: ID;
  /** The value for the two factor authentication required setting on the enterprise. */
  settingValue: EnterpriseEnabledSettingValue;
}

/** Autogenerated input type of UpdateEnvironment */
export interface UpdateEnvironmentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The node ID of the environment. */
  environmentId: ID;
  /** The ids of users or teams that can approve deployments to this environment */
  reviewers?: ID[];
  /** The wait timer in minutes. */
  waitTimer?: number;
}

/** Autogenerated input type of UpdateIpAllowListEnabledSetting */
export interface UpdateIpAllowListEnabledSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the owner on which to set the IP allow list enabled setting. */
  ownerId: ID;
  /** The value for the IP allow list enabled setting. */
  settingValue: IpAllowListEnabledSettingValue;
}

/** Autogenerated input type of UpdateIpAllowListEntry */
export interface UpdateIpAllowListEntryInput {
  /** An IP address or range of addresses in CIDR notation. */
  allowListValue: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the IP allow list entry to update. */
  ipAllowListEntryId: ID;
  /** Whether the IP allow list entry is active when an IP allow list is enabled. */
  isActive: boolean;
  /** An optional name for the IP allow list entry. */
  name?: string;
}

/** Autogenerated input type of UpdateIpAllowListForInstalledAppsEnabledSetting */
export interface UpdateIpAllowListForInstalledAppsEnabledSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the owner. */
  ownerId: ID;
  /** The value for the IP allow list configuration for installed GitHub Apps setting. */
  settingValue: IpAllowListForInstalledAppsEnabledSettingValue;
}

/** Autogenerated input type of UpdateIssueComment */
export interface UpdateIssueCommentInput {
  /** The updated text of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the IssueComment to modify. */
  id: ID;
}

/** Autogenerated input type of UpdateIssue */
export interface UpdateIssueInput {
  /** An array of Node IDs of users for this issue. */
  assigneeIds?: ID[];
  /** The body for the issue description. */
  body?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the Issue to modify. */
  id: ID;
  /** An array of Node IDs of labels for this issue. */
  labelIds?: ID[];
  /** The Node ID of the milestone for this issue. */
  milestoneId?: ID;
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: ID[];
  /** The desired issue state. */
  state?: IssueState;
  /** The title for the issue. */
  title?: string;
}

/** Autogenerated input type of UpdateLabel */
export interface UpdateLabelInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** A 6 character hex code, without the leading #, identifying the updated color of the label. */
  color?: string;
  /** A brief description of the label, such as its purpose. */
  description?: string;
  /** The Node ID of the label to be updated. */
  id: ID;
  /** The updated name of the label. */
  name?: string;
}

/** Autogenerated input type of UpdateNotificationRestrictionSetting */
export interface UpdateNotificationRestrictionSettingInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the owner on which to set the restrict notifications setting. */
  ownerId: ID;
  /** The value for the restrict notifications setting. */
  settingValue: NotificationRestrictionSettingValue;
}

/** Autogenerated input type of UpdateProjectCard */
export interface UpdateProjectCardInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Whether or not the ProjectCard should be archived */
  isArchived?: boolean;
  /** The note of ProjectCard. */
  note?: string;
  /** The ProjectCard ID to update. */
  projectCardId: ID;
}

/** Autogenerated input type of UpdateProjectColumn */
export interface UpdateProjectColumnInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The name of project column. */
  name: string;
  /** The ProjectColumn ID to update. */
  projectColumnId: ID;
}

/** Autogenerated input type of UpdateProject */
export interface UpdateProjectInput {
  /** The description of project. */
  body?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The name of project. */
  name?: string;
  /** The Project ID to update. */
  projectId: ID;
  /** Whether the project is public or not. */
  public?: boolean;
  /** Whether the project is open or closed. */
  state?: ProjectState;
}

/** Autogenerated input type of UpdatePullRequest */
export interface UpdatePullRequestInput {
  /** An array of Node IDs of users for this pull request. */
  assigneeIds?: ID[];
  /** The name of the branch you want your changes pulled into. This should be an existing branch
    on the current repository. */
  baseRefName?: string;
  /** The contents of the pull request. */
  body?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** An array of Node IDs of labels for this pull request. */
  labelIds?: ID[];
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: boolean;
  /** The Node ID of the milestone for this pull request. */
  milestoneId?: ID;
  /** An array of Node IDs for projects associated with this pull request. */
  projectIds?: ID[];
  /** The Node ID of the pull request. */
  pullRequestId: ID;
  /** The target state of the pull request. */
  state?: PullRequestUpdateState;
  /** The title of the pull request. */
  title?: string;
}

/** Autogenerated input type of UpdatePullRequestReviewComment */
export interface UpdatePullRequestReviewCommentInput {
  /** The text of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the comment to modify. */
  pullRequestReviewCommentId: ID;
}

/** Autogenerated input type of UpdatePullRequestReview */
export interface UpdatePullRequestReviewInput {
  /** The contents of the pull request review body. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: ID;
}

/** Autogenerated input type of UpdateRef */
export interface UpdateRefInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Permit updates of branch Refs that are not fast-forwards? */
  force?: boolean;
  /** The GitObjectID that the Ref shall be updated to target. */
  oid: GitObjectID;
  /** The Node ID of the Ref to be updated. */
  refId: ID;
}

/** Autogenerated input type of UpdateRefs */
export interface UpdateRefsInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** A list of ref updates. */
  refUpdates: RefUpdate[];
  /** The Node ID of the repository. */
  repositoryId: ID;
}

/** Autogenerated input type of UpdateRepository */
export interface UpdateRepositoryInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** A new description for the repository. Pass an empty string to erase the existing description. */
  description?: string;
  /** Indicates if the repository should have the issues feature enabled. */
  hasIssuesEnabled?: boolean;
  /** Indicates if the repository should have the project boards feature enabled. */
  hasProjectsEnabled?: boolean;
  /** Indicates if the repository should have the wiki feature enabled. */
  hasWikiEnabled?: boolean;
  /** The URL for a web page about this repository. Pass an empty string to erase the existing URL. */
  homepageUrl?: URI;
  /** The new name of the repository. */
  name?: string;
  /** The ID of the repository to update. */
  repositoryId: ID;
  /** Whether this repository should be marked as a template such that anyone who
    can access it can create new repositories with the same files and directory structure. */
  template?: boolean;
}

/** Autogenerated input type of UpdateSubscription */
export interface UpdateSubscriptionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new state of the subscription. */
  state: SubscriptionState;
  /** The Node ID of the subscribable object to modify. */
  subscribableId: ID;
}

/** Autogenerated input type of UpdateTeamDiscussionComment */
export interface UpdateTeamDiscussionCommentInput {
  /** The updated text of the comment. */
  body: string;
  /** The current version of the body content. */
  bodyVersion?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the comment to modify. */
  id: ID;
}

/** Autogenerated input type of UpdateTeamDiscussion */
export interface UpdateTeamDiscussionInput {
  /** The updated text of the discussion. */
  body?: string;
  /** The current version of the body content. If provided, this update operation
    will be rejected if the given version does not match the latest version on the server. */
  bodyVersion?: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the discussion to modify. */
  id: ID;
  /** If provided, sets the pinned state of the updated discussion. */
  pinned?: boolean;
  /** The updated title of the discussion. */
  title?: string;
}

/** Autogenerated input type of UpdateTeamReviewAssignment */
export interface UpdateTeamReviewAssignmentInput {
  /** The algorithm to use for review assignment */
  algorithm?: TeamReviewAssignmentAlgorithm;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Turn on or off review assignment */
  enabled: boolean;
  /** An array of team member IDs to exclude */
  excludedTeamMemberIds?: ID[];
  /** The Node ID of the team to update review assignments of */
  id: ID;
  /** Notify the entire team of the PR if it is delegated */
  notifyTeam?: boolean;
  /** The number of team members to assign */
  teamMemberCount?: number;
}

/** Autogenerated input type of UpdateTopics */
export interface UpdateTopicsInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Node ID of the repository. */
  repositoryId: ID;
  /** An array of topic names. */
  topicNames: string[];
}

/** Ordering options for user status connections. */
export interface UserStatusOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order user statuses by. */
  field: UserStatusOrderField;
}

/** Ordering options for verifiable domain connections. */
export interface VerifiableDomainOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order verifiable domains by. */
  field: VerifiableDomainOrderField;
}

/** Autogenerated input type of VerifyVerifiableDomain */
export interface VerifyVerifiableDomainInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ID of the verifiable domain to verify. */
  id: ID;
}

/** Argument input type for ActorAvatarUrlInput. */
export interface ActorAvatarUrlInput {
  /** The size of the resulting square image. */
  size?: number;
}

/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export interface Actor {
  /** A URL pointing to the actor's public avatar. */
  avatarUrl(
    root: ParentType<Actor>,
    args: ActorAvatarUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<URI>;
  /** The username of the actor. */
  login: string;
  /** The HTTP path for this actor. */
  resourcePath: URI;
  /** The HTTP URL for this actor. */
  url: URI;
}

/** Argument input type for AssignableAssigneesInput. */
export interface AssignableAssigneesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** An object that can have users assigned to it. */
export interface Assignable {
  /** A list of Users assigned to this object. */
  assignees(
    root: ParentType<Assignable>,
    args: AssignableAssigneesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserConnection>;
}

/** An entry in the audit log. */
export interface AuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** An object that can be closed */
export interface Closable {
  /** `true` if the object is closed (definition of closed may depend on type) */
  closed: boolean;
  /** Identifies the date and time when the object was closed. */
  closedAt?: DateTime;
}

/** Argument input type for CommentUserContentEditsInput. */
export interface CommentUserContentEditsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Represents a comment. */
export interface Comment {
  /** The actor who authored the comment. */
  author?: Actor;
  /** Author's association with the subject of the comment. */
  authorAssociation: CommentAuthorAssociation;
  /** The body as Markdown. */
  body: string;
  /** The body rendered to HTML. */
  bodyHTML: HTML;
  /** The body rendered to text. */
  bodyText: string;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Check if this comment was created via an email reply. */
  createdViaEmail: boolean;
  /** The actor who edited the comment. */
  editor?: Actor;
  id: ID;
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: boolean;
  /** The moment the editor made the last edit */
  lastEditedAt?: DateTime;
  /** Identifies when the comment was published at. */
  publishedAt?: DateTime;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** A list of edits to this content. */
  userContentEdits?(
    root: ParentType<Comment>,
    args: CommentUserContentEditsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UserContentEditConnection>>;
  /** Did the viewer author this comment. */
  viewerDidAuthor: boolean;
}

/** Represents a contribution a user made on GitHub, such as opening an issue. */
export interface Contribution {
  /** Whether this contribution is associated with a record you do not have access to. For
    example, your own 'first issue' contribution may have been made on a repository you can no
    longer access. */
  isRestricted: boolean;
  /** When this contribution was made. */
  occurredAt: DateTime;
  /** The HTTP path for this contribution. */
  resourcePath: URI;
  /** The HTTP URL for this contribution. */
  url: URI;
  /** The user who made this contribution. */
  user: User;
}

/** Entities that can be deleted. */
export interface Deletable {
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: boolean;
}

/** Metadata for an audit entry containing enterprise account information. */
export interface EnterpriseAuditEntryData {
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: URI;
  /** The slug of the enterprise. */
  enterpriseSlug?: string;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: URI;
}

/** Represents a Git object. */
export interface GitObject {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: string;
  /** The HTTP path for this Git object */
  commitResourcePath: URI;
  /** The HTTP URL for this Git object */
  commitUrl: URI;
  id: ID;
  /** The Git object ID */
  oid: GitObjectID;
  /** The Repository the Git object belongs to */
  repository: Repository;
}

/** Information about a signature (GPG or S/MIME) on a Commit or Tag. */
export interface GitSignature {
  /** Email used to sign this object. */
  email: string;
  /** True if the signature is valid and verified by GitHub. */
  isValid: boolean;
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: string;
  /** ASCII-armored signature header from object. */
  signature: string;
  /** GitHub user corresponding to the email signing this commit. */
  signer?: User;
  /** The state of this signature. `VALID` if signature is valid and verified by
    GitHub, otherwise represents reason why signature is considered invalid. */
  state: GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: boolean;
}

/** An individual line of a hovercard */
export interface HovercardContext {
  /** A string describing this context */
  message: string;
  /** An octicon to accompany this context */
  octicon: string;
}

/** Argument input type for LabelableLabelsInput. */
export interface LabelableLabelsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for labels returned from the connection. */
  orderBy?: LabelOrder;
}

/** An object that can have labels assigned to it. */
export interface Labelable {
  /** A list of labels associated with the object. */
  labels?(
    root: ParentType<Labelable>,
    args: LabelableLabelsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<LabelConnection>>;
}

/** An object that can be locked. */
export interface Lockable {
  /** Reason that the conversation was locked. */
  activeLockReason?: LockReason;
  /** `true` if the object is locked */
  locked: boolean;
}

/** Argument input type for MemberStatusableMemberStatusesInput. */
export interface MemberStatusableMemberStatusesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for user statuses returned from the connection. */
  orderBy?: UserStatusOrder;
}

/** Entities that have members who can set status messages. */
export interface MemberStatusable {
  /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
  memberStatuses(
    root: ParentType<MemberStatusable>,
    args: MemberStatusableMemberStatusesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserStatusConnection>;
}

/** Entities that can be minimized. */
export interface Minimizable {
  /** Returns whether or not a comment has been minimized. */
  isMinimized: boolean;
  /** Returns why the comment was minimized. */
  minimizedReason?: string;
  /** Check if the current viewer can minimize this object. */
  viewerCanMinimize: boolean;
}

/** An object with an ID. */
export interface Node {
  /** ID of the object. */
  id: ID;
}

/** Metadata for an audit entry with action oauth_application.* */
export interface OauthApplicationAuditEntryData {
  /** The name of the OAuth Application. */
  oauthApplicationName?: string;
  /** The HTTP path for the OAuth Application */
  oauthApplicationResourcePath?: URI;
  /** The HTTP URL for the OAuth Application */
  oauthApplicationUrl?: URI;
}

/** Metadata for an audit entry with action org.* */
export interface OrganizationAuditEntryData {
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
}

/** Argument input type for PackageOwnerPackagesInput. */
export interface PackageOwnerPackagesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Find packages by their names. */
  names?: Maybe<string>[];
  /** Ordering of the returned packages. */
  orderBy?: PackageOrder;
  /** Filter registry package by type. */
  packageType?: PackageType;
  /** Find packages in a repository by ID. */
  repositoryId?: ID;
}

/** Represents an owner of a package. */
export interface PackageOwner {
  id: ID;
  /** A list of packages under the owner. */
  packages(
    root: ParentType<PackageOwner>,
    args: PackageOwnerPackagesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PackageConnection>;
}

/** Argument input type for ProfileOwnerAnyPinnableItemsInput. */
export interface ProfileOwnerAnyPinnableItemsInput {
  /** Filter to only a particular kind of pinnable item. */
  type?: PinnableItemType;
}

/** Argument input type for ProfileOwnerPinnableItemsInput. */
export interface ProfileOwnerPinnableItemsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filter the types of pinnable items that are returned. */
  types?: PinnableItemType[];
}

/** Argument input type for ProfileOwnerPinnedItemsInput. */
export interface ProfileOwnerPinnedItemsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filter the types of pinned items that are returned. */
  types?: PinnableItemType[];
}

/** Represents any entity on GitHub that has a profile page. */
export interface ProfileOwner {
  /** Determine if this repository owner has any items that can be pinned to their profile. */
  anyPinnableItems(
    root: ParentType<ProfileOwner>,
    args: ProfileOwnerAnyPinnableItemsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<boolean>;
  /** The public profile email. */
  email?: string;
  id: ID;
  /** Showcases a selection of repositories and gists that the profile owner has
    either curated or that have been selected automatically based on popularity. */
  itemShowcase: ProfileItemShowcase;
  /** The public profile location. */
  location?: string;
  /** The username used to login. */
  login: string;
  /** The public profile name. */
  name?: string;
  /** A list of repositories and gists this profile owner can pin to their profile. */
  pinnableItems(
    root: ParentType<ProfileOwner>,
    args: ProfileOwnerPinnableItemsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PinnableItemConnection>;
  /** A list of repositories and gists this profile owner has pinned to their profile */
  pinnedItems(
    root: ParentType<ProfileOwner>,
    args: ProfileOwnerPinnedItemsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PinnableItemConnection>;
  /** Returns how many more items this profile owner can pin to their profile. */
  pinnedItemsRemaining: number;
  /** Can the viewer pin repositories and gists to the profile? */
  viewerCanChangePinnedItems: boolean;
  /** The public profile website URL. */
  websiteUrl?: URI;
}

/** Argument input type for ProjectOwnerProjectInput. */
export interface ProjectOwnerProjectInput {
  /** The project number to find. */
  number: number;
}

/** Argument input type for ProjectOwnerProjectsInput. */
export interface ProjectOwnerProjectsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for projects returned from the connection */
  orderBy?: ProjectOrder;
  /** Query to search projects by, currently only searching by name. */
  search?: string;
  /** A list of states to filter the projects by. */
  states?: ProjectState[];
}

/** Represents an owner of a Project. */
export interface ProjectOwner {
  id: ID;
  /** Find project by number. */
  project?(
    root: ParentType<ProjectOwner>,
    args: ProjectOwnerProjectInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Project>>;
  /** A list of projects under the owner. */
  projects(
    root: ParentType<ProjectOwner>,
    args: ProjectOwnerProjectsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ProjectConnection>;
  /** The HTTP path listing owners projects */
  projectsResourcePath: URI;
  /** The HTTP URL listing owners projects */
  projectsUrl: URI;
  /** Can the current viewer create new projects on this owner. */
  viewerCanCreateProjects: boolean;
}

/** Argument input type for ReactableReactionsInput. */
export interface ReactableReactionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Allows filtering Reactions by emoji. */
  content?: ReactionContent;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows specifying the order in which reactions are returned. */
  orderBy?: ReactionOrder;
}

/** Represents a subject that can be reacted on. */
export interface Reactable {
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: ReactionGroup[];
  /** A list of Reactions left on the Issue. */
  reactions(
    root: ParentType<Reactable>,
    args: ReactableReactionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactionConnection>;
  /** Can user react to this subject */
  viewerCanReact: boolean;
}

/** Metadata for an audit entry with action repo.* */
export interface RepositoryAuditEntryData {
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
}

/** Argument input type for RepositoryDiscussionAuthorRepositoryDiscussionsInput. */
export interface RepositoryDiscussionAuthorRepositoryDiscussionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Filter discussions to only those that have been answered or not. Defaults to
    including both answered and unanswered discussions. */
  answered?: boolean;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for discussions returned from the connection. */
  orderBy?: DiscussionOrder;
  /** Filter discussions to only those in a specific repository. */
  repositoryId?: ID;
}

/** Represents an author of discussions in repositories. */
export interface RepositoryDiscussionAuthor {
  /** Discussions this user has started. */
  repositoryDiscussions(
    root: ParentType<RepositoryDiscussionAuthor>,
    args: RepositoryDiscussionAuthorRepositoryDiscussionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DiscussionConnection>;
}

/** Argument input type for RepositoryDiscussionCommentAuthorRepositoryDiscussionCommentsInput. */
export interface RepositoryDiscussionCommentAuthorRepositoryDiscussionCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filter discussion comments to only those that were marked as the answer */
  onlyAnswers?: boolean;
  /** Filter discussion comments to only those in a specific repository. */
  repositoryId?: ID;
}

/** Represents an author of discussion comments in repositories. */
export interface RepositoryDiscussionCommentAuthor {
  /** Discussion comments this user has authored. */
  repositoryDiscussionComments(
    root: ParentType<RepositoryDiscussionCommentAuthor>,
    args: RepositoryDiscussionCommentAuthorRepositoryDiscussionCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DiscussionCommentConnection>;
}

/** Argument input type for RepositoryInfoShortDescriptionHTMLInput. */
export interface RepositoryInfoShortDescriptionHTMLInput {
  /** How many characters to return. */
  limit?: number;
}

/** A subset of repository info. */
export interface RepositoryInfo {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The description of the repository. */
  description?: string;
  /** The description of the repository rendered to HTML. */
  descriptionHTML: HTML;
  /** Returns how many forks there are of this repository in the whole network. */
  forkCount: number;
  /** Indicates if the repository has issues feature enabled. */
  hasIssuesEnabled: boolean;
  /** Indicates if the repository has the Projects feature enabled. */
  hasProjectsEnabled: boolean;
  /** Indicates if the repository has wiki feature enabled. */
  hasWikiEnabled: boolean;
  /** The repository's URL. */
  homepageUrl?: URI;
  /** Indicates if the repository is unmaintained. */
  isArchived: boolean;
  /** Identifies if the repository is a fork. */
  isFork: boolean;
  /** Indicates if a repository is either owned by an organization, or is a private fork of an organization repository. */
  isInOrganization: boolean;
  /** Indicates if the repository has been locked or not. */
  isLocked: boolean;
  /** Identifies if the repository is a mirror. */
  isMirror: boolean;
  /** Identifies if the repository is private or internal. */
  isPrivate: boolean;
  /** Identifies if the repository is a template that can be used to generate new repositories. */
  isTemplate: boolean;
  /** The license associated with the repository */
  licenseInfo?: License;
  /** The reason the repository has been locked. */
  lockReason?: RepositoryLockReason;
  /** The repository's original mirror URL. */
  mirrorUrl?: URI;
  /** The name of the repository. */
  name: string;
  /** The repository's name with owner. */
  nameWithOwner: string;
  /** The image used to represent this repository in Open Graph data. */
  openGraphImageUrl: URI;
  /** The User owner of the repository. */
  owner: RepositoryOwner;
  /** Identifies when the repository was last pushed to. */
  pushedAt?: DateTime;
  /** The HTTP path for this repository */
  resourcePath: URI;
  /** A description of the repository, rendered to HTML without any links in it. */
  shortDescriptionHTML(
    root: ParentType<RepositoryInfo>,
    args: RepositoryInfoShortDescriptionHTMLInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<HTML>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this repository */
  url: URI;
  /** Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar. */
  usesCustomOpenGraphImage: boolean;
}

/** Represents a object that belongs to a repository. */
export interface RepositoryNode {
  /** The repository associated with this node. */
  repository: Repository;
}

/** Argument input type for RepositoryOwnerAvatarUrlInput. */
export interface RepositoryOwnerAvatarUrlInput {
  /** The size of the resulting square image. */
  size?: number;
}

/** Argument input type for RepositoryOwnerRepositoriesInput. */
export interface RepositoryOwnerRepositoriesInput {
  /** Array of viewer's affiliation options for repositories returned from the
    connection. For example, OWNER will include only repositories that the
    current viewer owns. */
  affiliations?: Maybe<RepositoryAffiliation>[];
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** If non-null, filters repositories according to whether they are forks of another repository */
  isFork?: boolean;
  /** If non-null, filters repositories according to whether they have been locked */
  isLocked?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for repositories returned from the connection */
  orderBy?: RepositoryOrder;
  /** Array of owner's affiliation options for repositories returned from the
    connection. For example, OWNER will include only repositories that the
    organization or user being viewed owns. */
  ownerAffiliations?: Maybe<RepositoryAffiliation>[];
  /** If non-null, filters repositories according to privacy */
  privacy?: RepositoryPrivacy;
}

/** Argument input type for RepositoryOwnerRepositoryInput. */
export interface RepositoryOwnerRepositoryInput {
  /** Name of Repository to find. */
  name: string;
}

/** Represents an owner of a Repository. */
export interface RepositoryOwner {
  /** A URL pointing to the owner's public avatar. */
  avatarUrl(
    root: ParentType<RepositoryOwner>,
    args: RepositoryOwnerAvatarUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<URI>;
  id: ID;
  /** The username used to login. */
  login: string;
  /** A list of repositories that the user owns. */
  repositories(
    root: ParentType<RepositoryOwner>,
    args: RepositoryOwnerRepositoriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<RepositoryConnection>;
  /** Find Repository. */
  repository?(
    root: ParentType<RepositoryOwner>,
    args: RepositoryOwnerRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Repository>>;
  /** The HTTP URL for the owner. */
  resourcePath: URI;
  /** The HTTP URL for the owner. */
  url: URI;
}

/** Argument input type for RequirableByPullRequestIsRequiredInput. */
export interface RequirableByPullRequestIsRequiredInput {
  /** The id of the pull request this is required for */
  pullRequestId?: ID;
  /** The number of the pull request this is required for */
  pullRequestNumber?: number;
}

/** Represents a type that can be required by a pull request for merging. */
export interface RequirableByPullRequest {
  /** Whether this is required to pass before merging for a specific pull request. */
  isRequired(
    root: ParentType<RequirableByPullRequest>,
    args: RequirableByPullRequestIsRequiredInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<boolean>;
}

/** Argument input type for SponsorableIsSponsoredByInput. */
export interface SponsorableIsSponsoredByInput {
  /** The target account's login. */
  accountLogin: string;
}

/** Argument input type for SponsorableSponsorshipsAsMaintainerInput. */
export interface SponsorableSponsorshipsAsMaintainerInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Whether or not to include private sponsorships in the result set */
  includePrivate?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for sponsorships returned from this connection. If left
    blank, the sponsorships will be ordered based on relevancy to the viewer. */
  orderBy?: SponsorshipOrder;
}

/** Argument input type for SponsorableSponsorshipsAsSponsorInput. */
export interface SponsorableSponsorshipsAsSponsorInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for sponsorships returned from this connection. If left
    blank, the sponsorships will be ordered based on relevancy to the viewer. */
  orderBy?: SponsorshipOrder;
}

/** Entities that can be sponsored through GitHub Sponsors */
export interface Sponsorable {
  /** True if this user/organization has a GitHub Sponsors listing. */
  hasSponsorsListing: boolean;
  /** Check if the given account is sponsoring this user/organization. */
  isSponsoredBy(
    root: ParentType<Sponsorable>,
    args: SponsorableIsSponsoredByInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<boolean>;
  /** True if the viewer is sponsored by this user/organization. */
  isSponsoringViewer: boolean;
  /** The GitHub Sponsors listing for this user or organization. */
  sponsorsListing?: SponsorsListing;
  /** The viewer's sponsorship of this entity. */
  sponsorshipForViewerAsSponsor?: Sponsorship;
  /** This object's sponsorships as the maintainer. */
  sponsorshipsAsMaintainer(
    root: ParentType<Sponsorable>,
    args: SponsorableSponsorshipsAsMaintainerInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SponsorshipConnection>;
  /** This object's sponsorships as the sponsor. */
  sponsorshipsAsSponsor(
    root: ParentType<Sponsorable>,
    args: SponsorableSponsorshipsAsSponsorInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SponsorshipConnection>;
  /** Whether or not the viewer is able to sponsor this user/organization. */
  viewerCanSponsor: boolean;
  /** True if the viewer is sponsoring this user/organization. */
  viewerIsSponsoring: boolean;
}

/** Argument input type for StarrableStargazersInput. */
export interface StarrableStargazersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Order for connection */
  orderBy?: StarOrder;
}

/** Things that can be starred. */
export interface Starrable {
  id: ID;
  /** Returns a count of how many stargazers there are on this object */
  stargazerCount: number;
  /** A list of users who have starred this starrable. */
  stargazers(
    root: ParentType<Starrable>,
    args: StarrableStargazersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<StargazerConnection>;
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  viewerHasStarred: boolean;
}

/** Entities that can be subscribed to for web and email notifications. */
export interface Subscribable {
  id: ID;
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: boolean;
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: SubscriptionState;
}

/** Metadata for an audit entry with action team.* */
export interface TeamAuditEntryData {
  /** The team associated with the action */
  team?: Team;
  /** The name of the team */
  teamName?: string;
  /** The HTTP path for this team */
  teamResourcePath?: URI;
  /** The HTTP URL for this team */
  teamUrl?: URI;
}

/** Metadata for an audit entry with a topic. */
export interface TopicAuditEntryData {
  /** The name of the topic added to the repository */
  topic?: Topic;
  /** The name of the topic added to the repository */
  topicName?: string;
}

/** Represents a type that can be retrieved by a URL. */
export interface UniformResourceLocatable {
  /** The HTML path to this resource. */
  resourcePath: URI;
  /** The URL to this resource. */
  url: URI;
}

/** Entities that can be updated. */
export interface Updatable {
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
}

/** Comments that can be updated. */
export interface UpdatableComment {
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: CommentCannotUpdateReason[];
}

/** A subject that may be upvoted. */
export interface Votable {
  /** Number of upvotes that this subject has received. */
  upvoteCount: number;
  /** Whether or not the current user can add or remove an upvote on this subject. */
  viewerCanUpvote: boolean;
  /** Whether or not the current user has already upvoted this subject. */
  viewerHasUpvoted: boolean;
}

/** Autogenerated return type of AcceptEnterpriseAdministratorInvitation */
export interface AcceptEnterpriseAdministratorInvitationPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The invitation that was accepted. */
  invitation?: EnterpriseAdministratorInvitation;
  /** A message confirming the result of accepting an administrator invitation. */
  message?: string;
}

/** Autogenerated return type of AcceptTopicSuggestion */
export interface AcceptTopicSuggestionPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The accepted topic. */
  topic?: Topic;
}

/** Location information for an actor */
export interface ActorLocation {
  /** City */
  city?: string;
  /** Country name */
  country?: string;
  /** Country code */
  countryCode?: string;
  /** Region name */
  region?: string;
  /** Region or state code */
  regionCode?: string;
}

/** Autogenerated return type of AddAssigneesToAssignable */
export interface AddAssigneesToAssignablePayload {
  /** The item that was assigned. */
  assignable?: Assignable;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of AddComment */
export interface AddCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The edge from the subject's comment connection. */
  commentEdge?: IssueCommentEdge;
  /** The subject */
  subject?: Node;
  /** The edge from the subject's timeline connection. */
  timelineEdge?: IssueTimelineItemEdge;
}

/** Autogenerated return type of AddDiscussionComment */
export interface AddDiscussionCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The newly created discussion comment. */
  comment?: DiscussionComment;
}

/** Autogenerated return type of AddEnterpriseSupportEntitlement */
export interface AddEnterpriseSupportEntitlementPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** A message confirming the result of adding the support entitlement. */
  message?: string;
}

/** Autogenerated return type of AddLabelsToLabelable */
export interface AddLabelsToLabelablePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The item that was labeled. */
  labelable?: Labelable;
}

/** Autogenerated return type of AddProjectCard */
export interface AddProjectCardPayload {
  /** The edge from the ProjectColumn's card connection. */
  cardEdge?: ProjectCardEdge;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The ProjectColumn */
  projectColumn?: ProjectColumn;
}

/** Autogenerated return type of AddProjectColumn */
export interface AddProjectColumnPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The edge from the project's column connection. */
  columnEdge?: ProjectColumnEdge;
  /** The project */
  project?: Project;
}

/** Autogenerated return type of AddPullRequestReviewComment */
export interface AddPullRequestReviewCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The newly created comment. */
  comment?: PullRequestReviewComment;
  /** The edge from the review's comment connection. */
  commentEdge?: PullRequestReviewCommentEdge;
}

/** Autogenerated return type of AddPullRequestReview */
export interface AddPullRequestReviewPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The newly created pull request review. */
  pullRequestReview?: PullRequestReview;
  /** The edge from the pull request's review connection. */
  reviewEdge?: PullRequestReviewEdge;
}

/** Autogenerated return type of AddPullRequestReviewThread */
export interface AddPullRequestReviewThreadPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The newly created thread. */
  thread?: PullRequestReviewThread;
}

/** Autogenerated return type of AddReaction */
export interface AddReactionPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The reaction object. */
  reaction?: Reaction;
  /** The reactable subject. */
  subject?: Reactable;
}

/** Autogenerated return type of AddStar */
export interface AddStarPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The starrable. */
  starrable?: Starrable;
}

/** Autogenerated return type of AddUpvote */
export interface AddUpvotePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The votable subject. */
  subject?: Votable;
}

/** Autogenerated return type of AddVerifiableDomain */
export interface AddVerifiableDomainPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The verifiable domain that was added. */
  domain?: VerifiableDomain;
}

/** Represents a 'added_to_project' event on a given issue or pull request. */
export interface AddedToProjectEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** Project referenced by event. */
  project?: Project;
  /** Project card referenced by this project event. */
  projectCard?: ProjectCard;
  /** Column name referenced by this project event. */
  projectColumnName: string;
}

/** Argument input type for AppIpAllowListEntriesInput. */
export interface AppIpAllowListEntriesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for IP allow list entries returned. */
  orderBy?: IpAllowListEntryOrder;
}

/** Argument input type for AppLogoUrlInput. */
export interface AppLogoUrlInput {
  /** The size of the resulting image. */
  size?: number;
}

/** A GitHub App. */
export interface App {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The description of the app. */
  description?: string;
  id: ID;
  /** The IP addresses of the app. */
  ipAllowListEntries(
    root: ParentType<App>,
    args: AppIpAllowListEntriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IpAllowListEntryConnection>;
  /** The hex color code, without the leading '#', for the logo background. */
  logoBackgroundColor: string;
  /** A URL pointing to the app's logo. */
  logoUrl(
    root: ParentType<App>,
    args: AppLogoUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<URI>;
  /** The name of the app. */
  name: string;
  /** A slug based on the name of the app for use in URLs. */
  slug: string;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The URL to the app's homepage. */
  url: URI;
}

/** Autogenerated return type of ApproveDeployments */
export interface ApproveDeploymentsPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The affected deployments. */
  deployments?: Deployment[];
}

/** Autogenerated return type of ApproveVerifiableDomain */
export interface ApproveVerifiableDomainPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The verifiable domain that was approved. */
  domain?: VerifiableDomain;
}

/** Autogenerated return type of ArchiveRepository */
export interface ArchiveRepositoryPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The repository that was marked as archived. */
  repository?: Repository;
}

/** Represents an 'assigned' event on any assignable object. */
export interface AssignedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the assignable associated with the event. */
  assignable: Assignable;
  /** Identifies the user or mannequin that was assigned. */
  assignee?: Assignee;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Identifies the user who was assigned. */
  user?: User;
}

/** Represents a 'auto_merge_disabled' event on a given pull request. */
export interface AutoMergeDisabledEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The user who disabled auto-merge for this Pull Request */
  disabler?: User;
  id: ID;
  /** PullRequest referenced by event */
  pullRequest?: PullRequest;
  /** The reason auto-merge was disabled */
  reason?: string;
  /** The reason_code relating to why auto-merge was disabled */
  reasonCode?: string;
}

/** Represents a 'auto_merge_enabled' event on a given pull request. */
export interface AutoMergeEnabledEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The user who enabled auto-merge for this Pull Request */
  enabler?: User;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest?: PullRequest;
}

/** Represents an auto-merge request for a pull request */
export interface AutoMergeRequest {
  /** The email address of the author of this auto-merge request. */
  authorEmail?: string;
  /** The commit message of the auto-merge request. */
  commitBody?: string;
  /** The commit title of the auto-merge request. */
  commitHeadline?: string;
  /** When was this auto-merge request was enabled. */
  enabledAt?: DateTime;
  /** The actor who created the auto-merge request. */
  enabledBy?: Actor;
  /** The merge method of the auto-merge request. */
  mergeMethod: PullRequestMergeMethod;
  /** The pull request that this auto-merge request is set against. */
  pullRequest: PullRequest;
}

/** Represents a 'auto_rebase_enabled' event on a given pull request. */
export interface AutoRebaseEnabledEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The user who enabled auto-merge (rebase) for this Pull Request */
  enabler?: User;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest?: PullRequest;
}

/** Represents a 'auto_squash_enabled' event on a given pull request. */
export interface AutoSquashEnabledEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The user who enabled auto-merge (squash) for this Pull Request */
  enabler?: User;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest?: PullRequest;
}

/** Represents a 'automatic_base_change_failed' event on a given pull request. */
export interface AutomaticBaseChangeFailedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** The new base for this PR */
  newBase: string;
  /** The old base for this PR */
  oldBase: string;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
}

/** Represents a 'automatic_base_change_succeeded' event on a given pull request. */
export interface AutomaticBaseChangeSucceededEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** The new base for this PR */
  newBase: string;
  /** The old base for this PR */
  oldBase: string;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
}

/** Represents a 'base_ref_changed' event on a given issue or pull request. */
export interface BaseRefChangedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the name of the base ref for the pull request after it was changed. */
  currentRefName: string;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** Identifies the name of the base ref for the pull request before it was changed. */
  previousRefName: string;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
}

/** Represents a 'base_ref_deleted' event on a given pull request. */
export interface BaseRefDeletedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the name of the Ref associated with the `base_ref_deleted` event. */
  baseRefName?: string;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest?: PullRequest;
}

/** Represents a 'base_ref_force_pushed' event on a given pull request. */
export interface BaseRefForcePushedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the after commit SHA for the 'base_ref_force_pushed' event. */
  afterCommit?: Commit;
  /** Identifies the before commit SHA for the 'base_ref_force_pushed' event. */
  beforeCommit?: Commit;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
  /** Identifies the fully qualified ref name for the 'base_ref_force_pushed' event. */
  ref?: Ref;
}

/** Represents a Git blame. */
export interface Blame {
  /** The list of ranges from a Git blame. */
  ranges: BlameRange[];
}

/** Represents a range of information from a Git blame. */
export interface BlameRange {
  /** Identifies the recency of the change, from 1 (new) to 10 (old). This is
    calculated as a 2-quantile and determines the length of distance between the
    median age of all the changes in the file and the recency of the current
    range's change. */
  age: number;
  /** Identifies the line author */
  commit: Commit;
  /** The ending line for the range */
  endingLine: number;
  /** The starting line for the range */
  startingLine: number;
}

/** Represents a Git blob. */
export interface Blob {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: string;
  /** Byte size of Blob object */
  byteSize: number;
  /** The HTTP path for this Git object */
  commitResourcePath: URI;
  /** The HTTP URL for this Git object */
  commitUrl: URI;
  id: ID;
  /** Indicates whether the Blob is binary or text. Returns null if unable to determine the encoding. */
  isBinary?: boolean;
  /** Indicates whether the contents is truncated */
  isTruncated: boolean;
  /** The Git object ID */
  oid: GitObjectID;
  /** The Repository the Git object belongs to */
  repository: Repository;
  /** UTF8 text data or null if the Blob is binary */
  text?: string;
}

/** Argument input type for BotAvatarUrlInput. */
export interface BotAvatarUrlInput {
  /** The size of the resulting square image. */
  size?: number;
}

/** A special type of user which takes actions on behalf of GitHub Apps. */
export interface Bot {
  /** A URL pointing to the GitHub App's public avatar. */
  avatarUrl(
    root: ParentType<Bot>,
    args: BotAvatarUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<URI>;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** The username of the actor. */
  login: string;
  /** The HTTP path for this bot */
  resourcePath: URI;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this bot */
  url: URI;
}

/** Argument input type for BranchProtectionRuleBranchProtectionRuleConflictsInput. */
export interface BranchProtectionRuleBranchProtectionRuleConflictsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for BranchProtectionRuleMatchingRefsInput. */
export interface BranchProtectionRuleMatchingRefsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filters refs with query on name */
  query?: string;
}

/** Argument input type for BranchProtectionRulePushAllowancesInput. */
export interface BranchProtectionRulePushAllowancesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for BranchProtectionRuleReviewDismissalAllowancesInput. */
export interface BranchProtectionRuleReviewDismissalAllowancesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A branch protection rule. */
export interface BranchProtectionRule {
  /** Can this branch be deleted. */
  allowsDeletions: boolean;
  /** Are force pushes allowed on this branch. */
  allowsForcePushes: boolean;
  /** A list of conflicts matching branches protection rule and other branch protection rules */
  branchProtectionRuleConflicts(
    root: ParentType<BranchProtectionRule>,
    args: BranchProtectionRuleBranchProtectionRuleConflictsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<BranchProtectionRuleConflictConnection>;
  /** The actor who created this branch protection rule. */
  creator?: Actor;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews: boolean;
  id: ID;
  /** Can admins overwrite branch protection. */
  isAdminEnforced: boolean;
  /** Repository refs that are protected by this rule */
  matchingRefs(
    root: ParentType<BranchProtectionRule>,
    args: BranchProtectionRuleMatchingRefsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<RefConnection>;
  /** Identifies the protection rule pattern. */
  pattern: string;
  /** A list push allowances for this branch protection rule. */
  pushAllowances(
    root: ParentType<BranchProtectionRule>,
    args: BranchProtectionRulePushAllowancesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PushAllowanceConnection>;
  /** The repository associated with this branch protection rule. */
  repository?: Repository;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: number;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<string>[];
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews: boolean;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews: boolean;
  /** Are commits required to be signed. */
  requiresCommitSignatures: boolean;
  /** Are conversations required to be resolved before merging. */
  requiresConversationResolution: boolean;
  /** Are merge commits prohibited from being pushed to this branch. */
  requiresLinearHistory: boolean;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks: boolean;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks: boolean;
  /** Is pushing to matching branches restricted. */
  restrictsPushes: boolean;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals: boolean;
  /** A list review dismissal allowances for this branch protection rule. */
  reviewDismissalAllowances(
    root: ParentType<BranchProtectionRule>,
    args: BranchProtectionRuleReviewDismissalAllowancesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReviewDismissalAllowanceConnection>;
}

/** A conflict between two branch protection rules. */
export interface BranchProtectionRuleConflict {
  /** Identifies the branch protection rule. */
  branchProtectionRule?: BranchProtectionRule;
  /** Identifies the conflicting branch protection rule. */
  conflictingBranchProtectionRule?: BranchProtectionRule;
  /** Identifies the branch ref that has conflicting rules */
  ref?: Ref;
}

/** The connection type for BranchProtectionRuleConflict. */
export interface BranchProtectionRuleConflictConnection {
  /** A list of edges. */
  edges?: Maybe<BranchProtectionRuleConflictEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<BranchProtectionRuleConflict>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface BranchProtectionRuleConflictEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: BranchProtectionRuleConflict;
}

/** The connection type for BranchProtectionRule. */
export interface BranchProtectionRuleConnection {
  /** A list of edges. */
  edges?: Maybe<BranchProtectionRuleEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<BranchProtectionRule>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface BranchProtectionRuleEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: BranchProtectionRule;
}

/** The Common Vulnerability Scoring System */
export interface CVSS {
  /** The CVSS score associated with this advisory */
  score: number;
  /** The CVSS vector string associated with this advisory */
  vectorString?: string;
}

/** A common weakness enumeration */
export interface CWE {
  /** The id of the CWE */
  cweId: string;
  /** A detailed description of this CWE */
  description: string;
  /** ID of the object. */
  id: ID;
  /** The name of this CWE */
  name: string;
}

/** The connection type for CWE. */
export interface CWEConnection {
  /** A list of edges. */
  edges?: Maybe<CWEEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<CWE>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface CWEEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: CWE;
}

/** Autogenerated return type of CancelEnterpriseAdminInvitation */
export interface CancelEnterpriseAdminInvitationPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The invitation that was canceled. */
  invitation?: EnterpriseAdministratorInvitation;
  /** A message confirming the result of canceling an administrator invitation. */
  message?: string;
}

/** Autogenerated return type of ChangeUserStatus */
export interface ChangeUserStatusPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Your updated status. */
  status?: UserStatus;
}

/** A single check annotation. */
export interface CheckAnnotation {
  /** The annotation's severity level. */
  annotationLevel?: CheckAnnotationLevel;
  /** The path to the file that this annotation was made on. */
  blobUrl: URI;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The position of this annotation. */
  location: CheckAnnotationSpan;
  /** The annotation's message. */
  message: string;
  /** The path that this annotation was made on. */
  path: string;
  /** Additional information about the annotation. */
  rawDetails?: string;
  /** The annotation's title */
  title?: string;
}

/** The connection type for CheckAnnotation. */
export interface CheckAnnotationConnection {
  /** A list of edges. */
  edges?: Maybe<CheckAnnotationEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<CheckAnnotation>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface CheckAnnotationEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: CheckAnnotation;
}

/** A character position in a check annotation. */
export interface CheckAnnotationPosition {
  /** Column number (1 indexed). */
  column?: number;
  /** Line number (1 indexed). */
  line: number;
}

/** An inclusive pair of positions for a check annotation. */
export interface CheckAnnotationSpan {
  /** End position (inclusive). */
  end: CheckAnnotationPosition;
  /** Start position (inclusive). */
  start: CheckAnnotationPosition;
}

/** Argument input type for CheckRunAnnotationsInput. */
export interface CheckRunAnnotationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for CheckRunIsRequiredInput. */
export interface CheckRunIsRequiredInput {
  /** The id of the pull request this is required for */
  pullRequestId?: ID;
  /** The number of the pull request this is required for */
  pullRequestNumber?: number;
}

/** Argument input type for CheckRunStepsInput. */
export interface CheckRunStepsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Step number */
  number?: number;
}

/** A check run. */
export interface CheckRun {
  /** The check run's annotations */
  annotations?(
    root: ParentType<CheckRun>,
    args: CheckRunAnnotationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CheckAnnotationConnection>>;
  /** The check suite that this run is a part of. */
  checkSuite: CheckSuite;
  /** Identifies the date and time when the check run was completed. */
  completedAt?: DateTime;
  /** The conclusion of the check run. */
  conclusion?: CheckConclusionState;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The corresponding deployment for this job, if any */
  deployment?: Deployment;
  /** The URL from which to find full details of the check run on the integrator's site. */
  detailsUrl?: URI;
  /** A reference for the check run on the integrator's system. */
  externalId?: string;
  id: ID;
  /** Whether this is required to pass before merging for a specific pull request. */
  isRequired(
    root: ParentType<CheckRun>,
    args: CheckRunIsRequiredInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<boolean>;
  /** The name of the check for this check run. */
  name: string;
  /** Information about a pending deployment, if any, in this check run */
  pendingDeploymentRequest?: DeploymentRequest;
  /** The permalink to the check run summary. */
  permalink: URI;
  /** The repository associated with this check run. */
  repository: Repository;
  /** The HTTP path for this check run. */
  resourcePath: URI;
  /** Identifies the date and time when the check run was started. */
  startedAt?: DateTime;
  /** The current status of the check run. */
  status: CheckStatusState;
  /** The check run's steps */
  steps?(
    root: ParentType<CheckRun>,
    args: CheckRunStepsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CheckStepConnection>>;
  /** A string representing the check run's summary */
  summary?: string;
  /** A string representing the check run's text */
  text?: string;
  /** A string representing the check run */
  title?: string;
  /** The HTTP URL for this check run. */
  url: URI;
}

/** The connection type for CheckRun. */
export interface CheckRunConnection {
  /** A list of edges. */
  edges?: Maybe<CheckRunEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<CheckRun>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface CheckRunEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: CheckRun;
}

/** A single check step. */
export interface CheckStep {
  /** Identifies the date and time when the check step was completed. */
  completedAt?: DateTime;
  /** The conclusion of the check step. */
  conclusion?: CheckConclusionState;
  /** A reference for the check step on the integrator's system. */
  externalId?: string;
  /** The step's name. */
  name: string;
  /** The index of the step in the list of steps of the parent check run. */
  number: number;
  /** Number of seconds to completion. */
  secondsToCompletion?: number;
  /** Identifies the date and time when the check step was started. */
  startedAt?: DateTime;
  /** The current status of the check step. */
  status: CheckStatusState;
}

/** The connection type for CheckStep. */
export interface CheckStepConnection {
  /** A list of edges. */
  edges?: Maybe<CheckStepEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<CheckStep>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface CheckStepEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: CheckStep;
}

/** Argument input type for CheckSuiteCheckRunsInput. */
export interface CheckSuiteCheckRunsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Filters the check runs by this type. */
  filterBy?: CheckRunFilter;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for CheckSuiteMatchingPullRequestsInput. */
export interface CheckSuiteMatchingPullRequestsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** The base ref name to filter the pull requests by. */
  baseRefName?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** The head ref name to filter the pull requests by. */
  headRefName?: string;
  /** A list of label names to filter the pull requests by. */
  labels?: string[];
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for pull requests returned from the connection. */
  orderBy?: IssueOrder;
  /** A list of states to filter the pull requests by. */
  states?: PullRequestState[];
}

/** A check suite. */
export interface CheckSuite {
  /** The GitHub App which created this check suite. */
  app?: App;
  /** The name of the branch for this check suite. */
  branch?: Ref;
  /** The check runs associated with a check suite. */
  checkRuns?(
    root: ParentType<CheckSuite>,
    args: CheckSuiteCheckRunsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CheckRunConnection>>;
  /** The commit for this check suite */
  commit: Commit;
  /** The conclusion of this check suite. */
  conclusion?: CheckConclusionState;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The user who triggered the check suite. */
  creator?: User;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** A list of open pull requests matching the check suite. */
  matchingPullRequests?(
    root: ParentType<CheckSuite>,
    args: CheckSuiteMatchingPullRequestsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<PullRequestConnection>>;
  /** The push that triggered this check suite. */
  push?: Push;
  /** The repository associated with this check suite. */
  repository: Repository;
  /** The HTTP path for this check suite */
  resourcePath: URI;
  /** The status of this check suite. */
  status: CheckStatusState;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this check suite */
  url: URI;
  /** The workflow run associated with this check suite. */
  workflowRun?: WorkflowRun;
}

/** The connection type for CheckSuite. */
export interface CheckSuiteConnection {
  /** A list of edges. */
  edges?: Maybe<CheckSuiteEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<CheckSuite>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface CheckSuiteEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: CheckSuite;
}

/** Autogenerated return type of ClearLabelsFromLabelable */
export interface ClearLabelsFromLabelablePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The item that was unlabeled. */
  labelable?: Labelable;
}

/** Autogenerated return type of CloneProject */
export interface CloneProjectPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The id of the JobStatus for populating cloned fields. */
  jobStatusId?: string;
  /** The new cloned project. */
  project?: Project;
}

/** Autogenerated return type of CloneTemplateRepository */
export interface CloneTemplateRepositoryPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new repository. */
  repository?: Repository;
}

/** Autogenerated return type of CloseIssue */
export interface CloseIssuePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The issue that was closed. */
  issue?: Issue;
}

/** Autogenerated return type of ClosePullRequest */
export interface ClosePullRequestPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The pull request that was closed. */
  pullRequest?: PullRequest;
}

/** Represents a 'closed' event on any `Closable`. */
export interface ClosedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Object that was closed. */
  closable: Closable;
  /** Object which triggered the creation of this event. */
  closer?: Closer;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** The HTTP path for this closed event. */
  resourcePath: URI;
  /** The HTTP URL for this closed event. */
  url: URI;
}

/** The Code of Conduct for a repository */
export interface CodeOfConduct {
  /** The body of the Code of Conduct */
  body?: string;
  id: ID;
  /** The key for the Code of Conduct */
  key: string;
  /** The formal name of the Code of Conduct */
  name: string;
  /** The HTTP path for this Code of Conduct */
  resourcePath?: URI;
  /** The HTTP URL for this Code of Conduct */
  url?: URI;
}

/** Represents a 'comment_deleted' event on a given issue or pull request. */
export interface CommentDeletedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The user who authored the deleted comment. */
  deletedCommentAuthor?: Actor;
  id: ID;
}

/** Argument input type for CommitAssociatedPullRequestsInput. */
export interface CommitAssociatedPullRequestsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for pull requests. */
  orderBy?: PullRequestOrder;
}

/** Argument input type for CommitAuthorsInput. */
export interface CommitAuthorsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for CommitBlameInput. */
export interface CommitBlameInput {
  /** The file whose Git blame information you want. */
  path: string;
}

/** Argument input type for CommitCheckSuitesInput. */
export interface CommitCheckSuitesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Filters the check suites by this type. */
  filterBy?: CheckSuiteFilter;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for CommitCommentsInput. */
export interface CommitCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for CommitDeploymentsInput. */
export interface CommitDeploymentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Environments to list deployments for */
  environments?: string[];
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for deployments returned from the connection. */
  orderBy?: DeploymentOrder;
}

/** Argument input type for CommitFileInput. */
export interface CommitFileInput {
  /** The path for the file */
  path: string;
}

/** Argument input type for CommitHistoryInput. */
export interface CommitHistoryInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** If non-null, filters history to only show commits with matching authorship. */
  author?: CommitAuthor;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** If non-null, filters history to only show commits touching files under this path. */
  path?: string;
  /** Allows specifying a beginning time or date for fetching commits. */
  since?: GitTimestamp;
  /** Allows specifying an ending time or date for fetching commits. */
  until?: GitTimestamp;
}

/** Argument input type for CommitParentsInput. */
export interface CommitParentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for CommitSubmodulesInput. */
export interface CommitSubmodulesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Represents a Git commit. */
export interface Commit {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: string;
  /** The number of additions in this commit. */
  additions: number;
  /** The merged Pull Request that introduced the commit to the repository. If the
    commit is not present in the default branch, additionally returns open Pull
    Requests associated with the commit */
  associatedPullRequests?(
    root: ParentType<Commit>,
    args: CommitAssociatedPullRequestsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<PullRequestConnection>>;
  /** Authorship details of the commit. */
  author?: GitActor;
  /** Check if the committer and the author match. */
  authoredByCommitter: boolean;
  /** The datetime when this commit was authored. */
  authoredDate: DateTime;
  /** The list of authors for this commit based on the git author and the Co-authored-by
    message trailer. The git author will always be first. */
  authors(
    root: ParentType<Commit>,
    args: CommitAuthorsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<GitActorConnection>;
  /** Fetches `git blame` information. */
  blame(
    root: ParentType<Commit>,
    args: CommitBlameInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Blame>;
  /** The number of changed files in this commit. */
  changedFiles: number;
  /** The check suites associated with a commit. */
  checkSuites?(
    root: ParentType<Commit>,
    args: CommitCheckSuitesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CheckSuiteConnection>>;
  /** Comments made on the commit. */
  comments(
    root: ParentType<Commit>,
    args: CommitCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CommitCommentConnection>;
  /** The HTTP path for this Git object */
  commitResourcePath: URI;
  /** The HTTP URL for this Git object */
  commitUrl: URI;
  /** The datetime when this commit was committed. */
  committedDate: DateTime;
  /** Check if committed via GitHub web UI. */
  committedViaWeb: boolean;
  /** Committer details of the commit. */
  committer?: GitActor;
  /** The number of deletions in this commit. */
  deletions: number;
  /** The deployments associated with a commit. */
  deployments?(
    root: ParentType<Commit>,
    args: CommitDeploymentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeploymentConnection>>;
  /** The tree entry representing the file located at the given path. */
  file?(
    root: ParentType<Commit>,
    args: CommitFileInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<TreeEntry>>;
  /** The linear commit history starting from (and including) this commit, in the same order as `git log`. */
  history(
    root: ParentType<Commit>,
    args: CommitHistoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CommitHistoryConnection>;
  id: ID;
  /** The Git commit message */
  message: string;
  /** The Git commit message body */
  messageBody: string;
  /** The commit message body rendered to HTML. */
  messageBodyHTML: HTML;
  /** The Git commit message headline */
  messageHeadline: string;
  /** The commit message headline rendered to HTML. */
  messageHeadlineHTML: HTML;
  /** The Git object ID */
  oid: GitObjectID;
  /** The organization this commit was made on behalf of. */
  onBehalfOf?: Organization;
  /** The parents of a commit. */
  parents(
    root: ParentType<Commit>,
    args: CommitParentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CommitConnection>;
  /** The datetime when this commit was pushed. */
  pushedDate?: DateTime;
  /** The Repository this commit belongs to */
  repository: Repository;
  /** The HTTP path for this commit */
  resourcePath: URI;
  /** Commit signing information, if present. */
  signature?: GitSignature;
  /** Status information for this commit */
  status?: Status;
  /** Check and Status rollup information for this commit. */
  statusCheckRollup?: StatusCheckRollup;
  /** Returns a list of all submodules in this repository as of this Commit parsed from the .gitmodules file. */
  submodules(
    root: ParentType<Commit>,
    args: CommitSubmodulesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SubmoduleConnection>;
  /** Returns a URL to download a tarball archive for a repository.
    Note: For private repositories, these links are temporary and expire after five minutes. */
  tarballUrl: URI;
  /** Commit's root Tree */
  tree: Tree;
  /** The HTTP path for the tree of this commit */
  treeResourcePath: URI;
  /** The HTTP URL for the tree of this commit */
  treeUrl: URI;
  /** The HTTP URL for this commit */
  url: URI;
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: boolean;
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: SubscriptionState;
  /** Returns a URL to download a zipball archive for a repository.
    Note: For private repositories, these links are temporary and expire after five minutes. */
  zipballUrl: URI;
}

/** Argument input type for CommitCommentReactionsInput. */
export interface CommitCommentReactionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Allows filtering Reactions by emoji. */
  content?: ReactionContent;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows specifying the order in which reactions are returned. */
  orderBy?: ReactionOrder;
}

/** Argument input type for CommitCommentUserContentEditsInput. */
export interface CommitCommentUserContentEditsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Represents a comment on a given Commit. */
export interface CommitComment {
  /** The actor who authored the comment. */
  author?: Actor;
  /** Author's association with the subject of the comment. */
  authorAssociation: CommentAuthorAssociation;
  /** Identifies the comment body. */
  body: string;
  /** The body rendered to HTML. */
  bodyHTML: HTML;
  /** The body rendered to text. */
  bodyText: string;
  /** Identifies the commit associated with the comment, if the commit exists. */
  commit?: Commit;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Check if this comment was created via an email reply. */
  createdViaEmail: boolean;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The actor who edited the comment. */
  editor?: Actor;
  id: ID;
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: boolean;
  /** Returns whether or not a comment has been minimized. */
  isMinimized: boolean;
  /** The moment the editor made the last edit */
  lastEditedAt?: DateTime;
  /** Returns why the comment was minimized. */
  minimizedReason?: string;
  /** Identifies the file path associated with the comment. */
  path?: string;
  /** Identifies the line position associated with the comment. */
  position?: number;
  /** Identifies when the comment was published at. */
  publishedAt?: DateTime;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: ReactionGroup[];
  /** A list of Reactions left on the Issue. */
  reactions(
    root: ParentType<CommitComment>,
    args: CommitCommentReactionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactionConnection>;
  /** The repository associated with this node. */
  repository: Repository;
  /** The HTTP path permalink for this commit comment. */
  resourcePath: URI;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL permalink for this commit comment. */
  url: URI;
  /** A list of edits to this content. */
  userContentEdits?(
    root: ParentType<CommitComment>,
    args: CommitCommentUserContentEditsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UserContentEditConnection>>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: boolean;
  /** Check if the current viewer can minimize this object. */
  viewerCanMinimize: boolean;
  /** Can user react to this subject */
  viewerCanReact: boolean;
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: CommentCannotUpdateReason[];
  /** Did the viewer author this comment. */
  viewerDidAuthor: boolean;
}

/** The connection type for CommitComment. */
export interface CommitCommentConnection {
  /** A list of edges. */
  edges?: Maybe<CommitCommentEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<CommitComment>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface CommitCommentEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: CommitComment;
}

/** Argument input type for CommitCommentThreadCommentsInput. */
export interface CommitCommentThreadCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A thread of comments on a commit. */
export interface CommitCommentThread {
  /** The comments that exist in this thread. */
  comments(
    root: ParentType<CommitCommentThread>,
    args: CommitCommentThreadCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CommitCommentConnection>;
  /** The commit the comments were made on. */
  commit?: Commit;
  id: ID;
  /** The file the comments were made on. */
  path?: string;
  /** The position in the diff for the commit that the comment was made on. */
  position?: number;
  /** The repository associated with this node. */
  repository: Repository;
}

/** The connection type for Commit. */
export interface CommitConnection {
  /** A list of edges. */
  edges?: Maybe<CommitEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Commit>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Argument input type for CommitContributionsByRepositoryContributionsInput. */
export interface CommitContributionsByRepositoryContributionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for commit contributions returned from the connection. */
  orderBy?: CommitContributionOrder;
}

/** This aggregates commits made by a user within one repository. */
export interface CommitContributionsByRepository {
  /** The commit contributions, each representing a day. */
  contributions(
    root: ParentType<CommitContributionsByRepository>,
    args: CommitContributionsByRepositoryContributionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CreatedCommitContributionConnection>;
  /** The repository in which the commits were made. */
  repository: Repository;
  /** The HTTP path for the user's commits to the repository in this time range. */
  resourcePath: URI;
  /** The HTTP URL for the user's commits to the repository in this time range. */
  url: URI;
}

/** An edge in a connection. */
export interface CommitEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Commit;
}

/** The connection type for Commit. */
export interface CommitHistoryConnection {
  /** A list of edges. */
  edges?: Maybe<CommitEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Commit>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Represents a 'connected' event on a given issue or pull request. */
export interface ConnectedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Reference originated in a different repository. */
  isCrossRepository: boolean;
  /** Issue or pull request that made the reference. */
  source: ReferencedSubject;
  /** Issue or pull request which was connected. */
  subject: ReferencedSubject;
}

/** A content attachment */
export interface ContentAttachment {
  /** The body text of the content attachment. This parameter supports markdown. */
  body: string;
  /** The content reference that the content attachment is attached to. */
  contentReference: ContentReference;
  /** Identifies the primary key from the database. */
  databaseId: number;
  id: ID;
  /** The title of the content attachment. */
  title: string;
}

/** A content reference */
export interface ContentReference {
  /** Identifies the primary key from the database. */
  databaseId: number;
  id: ID;
  /** The reference of the content reference. */
  reference: string;
}

/** A calendar of contributions made on GitHub by a user. */
export interface ContributionCalendar {
  /** A list of hex color codes used in this calendar. The darker the color, the more contributions it represents. */
  colors: string[];
  /** Determine if the color set was chosen because it's currently Halloween. */
  isHalloween: boolean;
  /** A list of the months of contributions in this calendar. */
  months: ContributionCalendarMonth[];
  /** The count of total contributions in the calendar. */
  totalContributions: number;
  /** A list of the weeks of contributions in this calendar. */
  weeks: ContributionCalendarWeek[];
}

/** Represents a single day of contributions on GitHub by a user. */
export interface ContributionCalendarDay {
  /** The hex color code that represents how many contributions were made on this day compared to others in the calendar. */
  color: string;
  /** How many contributions were made by the user on this day. */
  contributionCount: number;
  /** Indication of contributions, relative to other days. Can be used to indicate
    which color to represent this day on a calendar. */
  contributionLevel: ContributionLevel;
  /** The day this square represents. */
  date: Date;
  /** A number representing which day of the week this square represents, e.g., 1 is Monday. */
  weekday: number;
}

/** A month of contributions in a user's contribution graph. */
export interface ContributionCalendarMonth {
  /** The date of the first day of this month. */
  firstDay: Date;
  /** The name of the month. */
  name: string;
  /** How many weeks started in this month. */
  totalWeeks: number;
  /** The year the month occurred in. */
  year: number;
}

/** A week of contributions in a user's contribution graph. */
export interface ContributionCalendarWeek {
  /** The days of contributions in this week. */
  contributionDays: ContributionCalendarDay[];
  /** The date of the earliest square in this week. */
  firstDay: Date;
}

/** Argument input type for ContributionsCollectionCommitContributionsByRepositoryInput. */
export interface ContributionsCollectionCommitContributionsByRepositoryInput {
  /** How many repositories should be included. */
  maxRepositories?: number;
}

/** Argument input type for ContributionsCollectionIssueContributionsInput. */
export interface ContributionsCollectionIssueContributionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Should the user's first issue ever be excluded from the result. */
  excludeFirst?: boolean;
  /** Should the user's most commented issue be excluded from the result. */
  excludePopular?: boolean;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for contributions returned from the connection. */
  orderBy?: ContributionOrder;
}

/** Argument input type for ContributionsCollectionIssueContributionsByRepositoryInput. */
export interface ContributionsCollectionIssueContributionsByRepositoryInput {
  /** Should the user's first issue ever be excluded from the result. */
  excludeFirst?: boolean;
  /** Should the user's most commented issue be excluded from the result. */
  excludePopular?: boolean;
  /** How many repositories should be included. */
  maxRepositories?: number;
}

/** Argument input type for ContributionsCollectionPullRequestContributionsInput. */
export interface ContributionsCollectionPullRequestContributionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Should the user's first pull request ever be excluded from the result. */
  excludeFirst?: boolean;
  /** Should the user's most commented pull request be excluded from the result. */
  excludePopular?: boolean;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for contributions returned from the connection. */
  orderBy?: ContributionOrder;
}

/** Argument input type for ContributionsCollectionPullRequestContributionsByRepositoryInput. */
export interface ContributionsCollectionPullRequestContributionsByRepositoryInput {
  /** Should the user's first pull request ever be excluded from the result. */
  excludeFirst?: boolean;
  /** Should the user's most commented pull request be excluded from the result. */
  excludePopular?: boolean;
  /** How many repositories should be included. */
  maxRepositories?: number;
}

/** Argument input type for ContributionsCollectionPullRequestReviewContributionsInput. */
export interface ContributionsCollectionPullRequestReviewContributionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for contributions returned from the connection. */
  orderBy?: ContributionOrder;
}

/** Argument input type for ContributionsCollectionPullRequestReviewContributionsByRepositoryInput. */
export interface ContributionsCollectionPullRequestReviewContributionsByRepositoryInput {
  /** How many repositories should be included. */
  maxRepositories?: number;
}

/** Argument input type for ContributionsCollectionRepositoryContributionsInput. */
export interface ContributionsCollectionRepositoryContributionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Should the user's first repository ever be excluded from the result. */
  excludeFirst?: boolean;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for contributions returned from the connection. */
  orderBy?: ContributionOrder;
}

/** Argument input type for ContributionsCollectionTotalIssueContributionsInput. */
export interface ContributionsCollectionTotalIssueContributionsInput {
  /** Should the user's first issue ever be excluded from this count. */
  excludeFirst?: boolean;
  /** Should the user's most commented issue be excluded from this count. */
  excludePopular?: boolean;
}

/** Argument input type for ContributionsCollectionTotalPullRequestContributionsInput. */
export interface ContributionsCollectionTotalPullRequestContributionsInput {
  /** Should the user's first pull request ever be excluded from this count. */
  excludeFirst?: boolean;
  /** Should the user's most commented pull request be excluded from this count. */
  excludePopular?: boolean;
}

/** Argument input type for ContributionsCollectionTotalRepositoriesWithContributedIssuesInput. */
export interface ContributionsCollectionTotalRepositoriesWithContributedIssuesInput {
  /** Should the user's first issue ever be excluded from this count. */
  excludeFirst?: boolean;
  /** Should the user's most commented issue be excluded from this count. */
  excludePopular?: boolean;
}

/** Argument input type for ContributionsCollectionTotalRepositoriesWithContributedPullRequestsInput. */
export interface ContributionsCollectionTotalRepositoriesWithContributedPullRequestsInput {
  /** Should the user's first pull request ever be excluded from this count. */
  excludeFirst?: boolean;
  /** Should the user's most commented pull request be excluded from this count. */
  excludePopular?: boolean;
}

/** Argument input type for ContributionsCollectionTotalRepositoryContributionsInput. */
export interface ContributionsCollectionTotalRepositoryContributionsInput {
  /** Should the user's first repository ever be excluded from this count. */
  excludeFirst?: boolean;
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export interface ContributionsCollection {
  /** Commit contributions made by the user, grouped by repository. */
  commitContributionsByRepository(
    root: ParentType<ContributionsCollection>,
    args: ContributionsCollectionCommitContributionsByRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CommitContributionsByRepository[]>;
  /** A calendar of this user's contributions on GitHub. */
  contributionCalendar: ContributionCalendar;
  /** The years the user has been making contributions with the most recent year first. */
  contributionYears: number[];
  /** Determine if this collection's time span ends in the current month. */
  doesEndInCurrentMonth: boolean;
  /** The date of the first restricted contribution the user made in this time
    period. Can only be non-null when the user has enabled private contribution counts. */
  earliestRestrictedContributionDate?: Date;
  /** The ending date and time of this collection. */
  endedAt: DateTime;
  /** The first issue the user opened on GitHub. This will be null if that issue was
    opened outside the collection's time range and ignoreTimeRange is false. If
    the issue is not visible but the user has opted to show private contributions,
    a RestrictedContribution will be returned. */
  firstIssueContribution?: CreatedIssueOrRestrictedContribution;
  /** The first pull request the user opened on GitHub. This will be null if that
    pull request was opened outside the collection's time range and
    ignoreTimeRange is not true. If the pull request is not visible but the user
    has opted to show private contributions, a RestrictedContribution will be returned. */
  firstPullRequestContribution?: CreatedPullRequestOrRestrictedContribution;
  /** The first repository the user created on GitHub. This will be null if that
    first repository was created outside the collection's time range and
    ignoreTimeRange is false. If the repository is not visible, then a
    RestrictedContribution is returned. */
  firstRepositoryContribution?: CreatedRepositoryOrRestrictedContribution;
  /** Does the user have any more activity in the timeline that occurred prior to the collection's time range? */
  hasActivityInThePast: boolean;
  /** Determine if there are any contributions in this collection. */
  hasAnyContributions: boolean;
  /** Determine if the user made any contributions in this time frame whose details
    are not visible because they were made in a private repository. Can only be
    true if the user enabled private contribution counts. */
  hasAnyRestrictedContributions: boolean;
  /** Whether or not the collector's time span is all within the same day. */
  isSingleDay: boolean;
  /** A list of issues the user opened. */
  issueContributions(
    root: ParentType<ContributionsCollection>,
    args: ContributionsCollectionIssueContributionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CreatedIssueContributionConnection>;
  /** Issue contributions made by the user, grouped by repository. */
  issueContributionsByRepository(
    root: ParentType<ContributionsCollection>,
    args: ContributionsCollectionIssueContributionsByRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IssueContributionsByRepository[]>;
  /** When the user signed up for GitHub. This will be null if that sign up date
    falls outside the collection's time range and ignoreTimeRange is false. */
  joinedGitHubContribution?: JoinedGitHubContribution;
  /** The date of the most recent restricted contribution the user made in this time
    period. Can only be non-null when the user has enabled private contribution counts. */
  latestRestrictedContributionDate?: Date;
  /** When this collection's time range does not include any activity from the user, use this
    to get a different collection from an earlier time range that does have activity. */
  mostRecentCollectionWithActivity?: ContributionsCollection;
  /** Returns a different contributions collection from an earlier time range than this one
    that does not have any contributions. */
  mostRecentCollectionWithoutActivity?: ContributionsCollection;
  /** The issue the user opened on GitHub that received the most comments in the specified
    time frame. */
  popularIssueContribution?: CreatedIssueContribution;
  /** The pull request the user opened on GitHub that received the most comments in the
    specified time frame. */
  popularPullRequestContribution?: CreatedPullRequestContribution;
  /** Pull request contributions made by the user. */
  pullRequestContributions(
    root: ParentType<ContributionsCollection>,
    args: ContributionsCollectionPullRequestContributionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CreatedPullRequestContributionConnection>;
  /** Pull request contributions made by the user, grouped by repository. */
  pullRequestContributionsByRepository(
    root: ParentType<ContributionsCollection>,
    args: ContributionsCollectionPullRequestContributionsByRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestContributionsByRepository[]>;
  /** Pull request review contributions made by the user. */
  pullRequestReviewContributions(
    root: ParentType<ContributionsCollection>,
    args: ContributionsCollectionPullRequestReviewContributionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CreatedPullRequestReviewContributionConnection>;
  /** Pull request review contributions made by the user, grouped by repository. */
  pullRequestReviewContributionsByRepository(
    root: ParentType<ContributionsCollection>,
    args:
      ContributionsCollectionPullRequestReviewContributionsByRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestReviewContributionsByRepository[]>;
  /** A list of repositories owned by the user that the user created in this time range. */
  repositoryContributions(
    root: ParentType<ContributionsCollection>,
    args: ContributionsCollectionRepositoryContributionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CreatedRepositoryContributionConnection>;
  /** A count of contributions made by the user that the viewer cannot access. Only
    non-zero when the user has chosen to share their private contribution counts. */
  restrictedContributionsCount: number;
  /** The beginning date and time of this collection. */
  startedAt: DateTime;
  /** How many commits were made by the user in this time span. */
  totalCommitContributions: number;
  /** How many issues the user opened. */
  totalIssueContributions(
    root: ParentType<ContributionsCollection>,
    args: ContributionsCollectionTotalIssueContributionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<number>;
  /** How many pull requests the user opened. */
  totalPullRequestContributions(
    root: ParentType<ContributionsCollection>,
    args: ContributionsCollectionTotalPullRequestContributionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<number>;
  /** How many pull request reviews the user left. */
  totalPullRequestReviewContributions: number;
  /** How many different repositories the user committed to. */
  totalRepositoriesWithContributedCommits: number;
  /** How many different repositories the user opened issues in. */
  totalRepositoriesWithContributedIssues(
    root: ParentType<ContributionsCollection>,
    args: ContributionsCollectionTotalRepositoriesWithContributedIssuesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<number>;
  /** How many different repositories the user left pull request reviews in. */
  totalRepositoriesWithContributedPullRequestReviews: number;
  /** How many different repositories the user opened pull requests in. */
  totalRepositoriesWithContributedPullRequests(
    root: ParentType<ContributionsCollection>,
    args:
      ContributionsCollectionTotalRepositoriesWithContributedPullRequestsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<number>;
  /** How many repositories the user created. */
  totalRepositoryContributions(
    root: ParentType<ContributionsCollection>,
    args: ContributionsCollectionTotalRepositoryContributionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<number>;
  /** The user who made the contributions in this collection. */
  user: User;
}

/** Autogenerated return type of ConvertProjectCardNoteToIssue */
export interface ConvertProjectCardNoteToIssuePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated ProjectCard. */
  projectCard?: ProjectCard;
}

/** Autogenerated return type of ConvertPullRequestToDraft */
export interface ConvertPullRequestToDraftPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The pull request that is now a draft. */
  pullRequest?: PullRequest;
}

/** Represents a 'convert_to_draft' event on a given pull request. */
export interface ConvertToDraftEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
  /** The HTTP path for this convert to draft event. */
  resourcePath: URI;
  /** The HTTP URL for this convert to draft event. */
  url: URI;
}

/** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
export interface ConvertedNoteToIssueEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** Project referenced by event. */
  project?: Project;
  /** Project card referenced by this project event. */
  projectCard?: ProjectCard;
  /** Column name referenced by this project event. */
  projectColumnName: string;
}

/** Autogenerated return type of CreateBranchProtectionRule */
export interface CreateBranchProtectionRulePayload {
  /** The newly created BranchProtectionRule. */
  branchProtectionRule?: BranchProtectionRule;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of CreateCheckRun */
export interface CreateCheckRunPayload {
  /** The newly created check run. */
  checkRun?: CheckRun;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of CreateCheckSuite */
export interface CreateCheckSuitePayload {
  /** The newly created check suite. */
  checkSuite?: CheckSuite;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of CreateContentAttachment */
export interface CreateContentAttachmentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The newly created content attachment. */
  contentAttachment?: ContentAttachment;
}

/** Autogenerated return type of CreateDeployment */
export interface CreateDeploymentPayload {
  /** True if the default branch has been auto-merged into the deployment ref. */
  autoMerged?: boolean;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new deployment. */
  deployment?: Deployment;
}

/** Autogenerated return type of CreateDeploymentStatus */
export interface CreateDeploymentStatusPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new deployment status. */
  deploymentStatus?: DeploymentStatus;
}

/** Autogenerated return type of CreateDiscussion */
export interface CreateDiscussionPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The discussion that was just created. */
  discussion?: Discussion;
}

/** Autogenerated return type of CreateEnterpriseOrganization */
export interface CreateEnterpriseOrganizationPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise that owns the created organization. */
  enterprise?: Enterprise;
  /** The organization that was created. */
  organization?: Organization;
}

/** Autogenerated return type of CreateEnvironment */
export interface CreateEnvironmentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new or existing environment. */
  environment?: Environment;
}

/** Autogenerated return type of CreateIpAllowListEntry */
export interface CreateIpAllowListEntryPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The IP allow list entry that was created. */
  ipAllowListEntry?: IpAllowListEntry;
}

/** Autogenerated return type of CreateIssue */
export interface CreateIssuePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new issue. */
  issue?: Issue;
}

/** Autogenerated return type of CreateLabel */
export interface CreateLabelPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new label. */
  label?: Label;
}

/** Autogenerated return type of CreateProject */
export interface CreateProjectPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new project. */
  project?: Project;
}

/** Autogenerated return type of CreatePullRequest */
export interface CreatePullRequestPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new pull request. */
  pullRequest?: PullRequest;
}

/** Autogenerated return type of CreateRef */
export interface CreateRefPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The newly created ref. */
  ref?: Ref;
}

/** Autogenerated return type of CreateRepository */
export interface CreateRepositoryPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new repository. */
  repository?: Repository;
}

/** Autogenerated return type of CreateTeamDiscussionComment */
export interface CreateTeamDiscussionCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new comment. */
  teamDiscussionComment?: TeamDiscussionComment;
}

/** Autogenerated return type of CreateTeamDiscussion */
export interface CreateTeamDiscussionPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new discussion. */
  teamDiscussion?: TeamDiscussion;
}

/** Represents the contribution a user made by committing to a repository. */
export interface CreatedCommitContribution {
  /** How many commits were made on this day to this repository by the user. */
  commitCount: number;
  /** Whether this contribution is associated with a record you do not have access to. For
    example, your own 'first issue' contribution may have been made on a repository you can no
    longer access. */
  isRestricted: boolean;
  /** When this contribution was made. */
  occurredAt: DateTime;
  /** The repository the user made a commit in. */
  repository: Repository;
  /** The HTTP path for this contribution. */
  resourcePath: URI;
  /** The HTTP URL for this contribution. */
  url: URI;
  /** The user who made this contribution. */
  user: User;
}

/** The connection type for CreatedCommitContribution. */
export interface CreatedCommitContributionConnection {
  /** A list of edges. */
  edges?: Maybe<CreatedCommitContributionEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<CreatedCommitContribution>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of commits across days and repositories in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface CreatedCommitContributionEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: CreatedCommitContribution;
}

/** Represents the contribution a user made on GitHub by opening an issue. */
export interface CreatedIssueContribution {
  /** Whether this contribution is associated with a record you do not have access to. For
    example, your own 'first issue' contribution may have been made on a repository you can no
    longer access. */
  isRestricted: boolean;
  /** The issue that was opened. */
  issue: Issue;
  /** When this contribution was made. */
  occurredAt: DateTime;
  /** The HTTP path for this contribution. */
  resourcePath: URI;
  /** The HTTP URL for this contribution. */
  url: URI;
  /** The user who made this contribution. */
  user: User;
}

/** The connection type for CreatedIssueContribution. */
export interface CreatedIssueContributionConnection {
  /** A list of edges. */
  edges?: Maybe<CreatedIssueContributionEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<CreatedIssueContribution>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface CreatedIssueContributionEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: CreatedIssueContribution;
}

/** Represents the contribution a user made on GitHub by opening a pull request. */
export interface CreatedPullRequestContribution {
  /** Whether this contribution is associated with a record you do not have access to. For
    example, your own 'first issue' contribution may have been made on a repository you can no
    longer access. */
  isRestricted: boolean;
  /** When this contribution was made. */
  occurredAt: DateTime;
  /** The pull request that was opened. */
  pullRequest: PullRequest;
  /** The HTTP path for this contribution. */
  resourcePath: URI;
  /** The HTTP URL for this contribution. */
  url: URI;
  /** The user who made this contribution. */
  user: User;
}

/** The connection type for CreatedPullRequestContribution. */
export interface CreatedPullRequestContributionConnection {
  /** A list of edges. */
  edges?: Maybe<CreatedPullRequestContributionEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<CreatedPullRequestContribution>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface CreatedPullRequestContributionEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: CreatedPullRequestContribution;
}

/** Represents the contribution a user made by leaving a review on a pull request. */
export interface CreatedPullRequestReviewContribution {
  /** Whether this contribution is associated with a record you do not have access to. For
    example, your own 'first issue' contribution may have been made on a repository you can no
    longer access. */
  isRestricted: boolean;
  /** When this contribution was made. */
  occurredAt: DateTime;
  /** The pull request the user reviewed. */
  pullRequest: PullRequest;
  /** The review the user left on the pull request. */
  pullRequestReview: PullRequestReview;
  /** The repository containing the pull request that the user reviewed. */
  repository: Repository;
  /** The HTTP path for this contribution. */
  resourcePath: URI;
  /** The HTTP URL for this contribution. */
  url: URI;
  /** The user who made this contribution. */
  user: User;
}

/** The connection type for CreatedPullRequestReviewContribution. */
export interface CreatedPullRequestReviewContributionConnection {
  /** A list of edges. */
  edges?: Maybe<CreatedPullRequestReviewContributionEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<CreatedPullRequestReviewContribution>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface CreatedPullRequestReviewContributionEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: CreatedPullRequestReviewContribution;
}

/** Represents the contribution a user made on GitHub by creating a repository. */
export interface CreatedRepositoryContribution {
  /** Whether this contribution is associated with a record you do not have access to. For
    example, your own 'first issue' contribution may have been made on a repository you can no
    longer access. */
  isRestricted: boolean;
  /** When this contribution was made. */
  occurredAt: DateTime;
  /** The repository that was created. */
  repository: Repository;
  /** The HTTP path for this contribution. */
  resourcePath: URI;
  /** The HTTP URL for this contribution. */
  url: URI;
  /** The user who made this contribution. */
  user: User;
}

/** The connection type for CreatedRepositoryContribution. */
export interface CreatedRepositoryContributionConnection {
  /** A list of edges. */
  edges?: Maybe<CreatedRepositoryContributionEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<CreatedRepositoryContribution>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface CreatedRepositoryContributionEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: CreatedRepositoryContribution;
}

/** Represents a mention made by one issue or pull request to another. */
export interface CrossReferencedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Reference originated in a different repository. */
  isCrossRepository: boolean;
  /** Identifies when the reference was made. */
  referencedAt: DateTime;
  /** The HTTP path for this pull request. */
  resourcePath: URI;
  /** Issue or pull request that made the reference. */
  source: ReferencedSubject;
  /** Issue or pull request to which the reference was made. */
  target: ReferencedSubject;
  /** The HTTP URL for this pull request. */
  url: URI;
  /** Checks if the target will be closed when the source is merged. */
  willCloseTarget: boolean;
}

/** Autogenerated return type of DeclineTopicSuggestion */
export interface DeclineTopicSuggestionPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The declined topic. */
  topic?: Topic;
}

/** Autogenerated return type of DeleteBranchProtectionRule */
export interface DeleteBranchProtectionRulePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of DeleteDeployment */
export interface DeleteDeploymentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of DeleteDiscussionComment */
export interface DeleteDiscussionCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The discussion comment that was just deleted. */
  comment?: DiscussionComment;
}

/** Autogenerated return type of DeleteDiscussion */
export interface DeleteDiscussionPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The discussion that was just deleted. */
  discussion?: Discussion;
}

/** Autogenerated return type of DeleteEnvironment */
export interface DeleteEnvironmentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of DeleteIpAllowListEntry */
export interface DeleteIpAllowListEntryPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The IP allow list entry that was deleted. */
  ipAllowListEntry?: IpAllowListEntry;
}

/** Autogenerated return type of DeleteIssueComment */
export interface DeleteIssueCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of DeleteIssue */
export interface DeleteIssuePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The repository the issue belonged to */
  repository?: Repository;
}

/** Autogenerated return type of DeleteLabel */
export interface DeleteLabelPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of DeletePackageVersion */
export interface DeletePackageVersionPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Whether or not the operation succeeded. */
  success?: boolean;
}

/** Autogenerated return type of DeleteProjectCard */
export interface DeleteProjectCardPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The column the deleted card was in. */
  column?: ProjectColumn;
  /** The deleted card ID. */
  deletedCardId?: ID;
}

/** Autogenerated return type of DeleteProjectColumn */
export interface DeleteProjectColumnPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The deleted column ID. */
  deletedColumnId?: ID;
  /** The project the deleted column was in. */
  project?: Project;
}

/** Autogenerated return type of DeleteProject */
export interface DeleteProjectPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The repository or organization the project was removed from. */
  owner?: ProjectOwner;
}

/** Autogenerated return type of DeletePullRequestReviewComment */
export interface DeletePullRequestReviewCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The pull request review the deleted comment belonged to. */
  pullRequestReview?: PullRequestReview;
}

/** Autogenerated return type of DeletePullRequestReview */
export interface DeletePullRequestReviewPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The deleted pull request review. */
  pullRequestReview?: PullRequestReview;
}

/** Autogenerated return type of DeleteRef */
export interface DeleteRefPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of DeleteTeamDiscussionComment */
export interface DeleteTeamDiscussionCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of DeleteTeamDiscussion */
export interface DeleteTeamDiscussionPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of DeleteVerifiableDomain */
export interface DeleteVerifiableDomainPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The owning account from which the domain was deleted. */
  owner?: VerifiableDomainOwner;
}

/** Represents a 'demilestoned' event on a given issue or pull request. */
export interface DemilestonedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Identifies the milestone title associated with the 'demilestoned' event. */
  milestoneTitle: string;
  /** Object referenced by event. */
  subject: MilestoneItem;
}

/** A dependency manifest entry */
export interface DependencyGraphDependency {
  /** Does the dependency itself have dependencies? */
  hasDependencies: boolean;
  /** The original name of the package, as it appears in the manifest. */
  packageLabel: string;
  /** The dependency package manager */
  packageManager?: string;
  /** The name of the package in the canonical form used by the package manager.
    This may differ from the original textual form (see packageLabel), for example
    in a package manager that uses case-insensitive comparisons. */
  packageName: string;
  /** The repository containing the package */
  repository?: Repository;
  /** The dependency version requirements */
  requirements: string;
}

/** The connection type for DependencyGraphDependency. */
export interface DependencyGraphDependencyConnection {
  /** A list of edges. */
  edges?: Maybe<DependencyGraphDependencyEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<DependencyGraphDependency>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface DependencyGraphDependencyEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: DependencyGraphDependency;
}

/** Argument input type for DependencyGraphManifestDependenciesInput. */
export interface DependencyGraphManifestDependenciesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Dependency manifest for a repository */
export interface DependencyGraphManifest {
  /** Path to view the manifest file blob */
  blobPath: string;
  /** A list of manifest dependencies */
  dependencies?(
    root: ParentType<DependencyGraphManifest>,
    args: DependencyGraphManifestDependenciesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DependencyGraphDependencyConnection>>;
  /** The number of dependencies listed in the manifest */
  dependenciesCount?: number;
  /** Is the manifest too big to parse? */
  exceedsMaxSize: boolean;
  /** Fully qualified manifest filename */
  filename: string;
  id: ID;
  /** Were we able to parse the manifest? */
  parseable: boolean;
  /** The repository containing the manifest */
  repository: Repository;
}

/** The connection type for DependencyGraphManifest. */
export interface DependencyGraphManifestConnection {
  /** A list of edges. */
  edges?: Maybe<DependencyGraphManifestEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<DependencyGraphManifest>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface DependencyGraphManifestEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: DependencyGraphManifest;
}

/** A repository deploy key. */
export interface DeployKey {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** The deploy key. */
  key: string;
  /** Whether or not the deploy key is read only. */
  readOnly: boolean;
  /** The deploy key title. */
  title: string;
  /** Whether or not the deploy key has been verified. */
  verified: boolean;
}

/** The connection type for DeployKey. */
export interface DeployKeyConnection {
  /** A list of edges. */
  edges?: Maybe<DeployKeyEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<DeployKey>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface DeployKeyEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: DeployKey;
}

/** Represents a 'deployed' event on a given pull request. */
export interface DeployedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The deployment associated with the 'deployed' event. */
  deployment: Deployment;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
  /** The ref associated with the 'deployed' event. */
  ref?: Ref;
}

/** Argument input type for DeploymentStatusesInput. */
export interface DeploymentStatusesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Represents triggered deployment instance. */
export interface Deployment {
  /** Identifies the commit sha of the deployment. */
  commit?: Commit;
  /** Identifies the oid of the deployment commit, even if the commit has been deleted. */
  commitOid: string;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the actor who triggered the deployment. */
  creator: Actor;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The deployment description. */
  description?: string;
  /** The latest environment to which this deployment was made. */
  environment?: string;
  id: ID;
  /** The latest environment to which this deployment was made. */
  latestEnvironment?: string;
  /** The latest status of this deployment. */
  latestStatus?: DeploymentStatus;
  /** The original environment to which this deployment was made. */
  originalEnvironment?: string;
  /** Extra information that a deployment system might need. */
  payload?: string;
  /** Identifies the Ref of the deployment, if the deployment was created by ref. */
  ref?: Ref;
  /** Identifies the repository associated with the deployment. */
  repository: Repository;
  /** The current state of the deployment. */
  state?: DeploymentState;
  /** A list of statuses associated with the deployment. */
  statuses?(
    root: ParentType<Deployment>,
    args: DeploymentStatusesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeploymentStatusConnection>>;
  /** The deployment task. */
  task?: string;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
}

/** The connection type for Deployment. */
export interface DeploymentConnection {
  /** A list of edges. */
  edges?: Maybe<DeploymentEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Deployment>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface DeploymentEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Deployment;
}

/** Represents a 'deployment_environment_changed' event on a given pull request. */
export interface DeploymentEnvironmentChangedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The deployment status that updated the deployment environment. */
  deploymentStatus: DeploymentStatus;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
}

/** Argument input type for DeploymentProtectionRuleReviewersInput. */
export interface DeploymentProtectionRuleReviewersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A protection rule. */
export interface DeploymentProtectionRule {
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** The teams or users that can review the deployment */
  reviewers(
    root: ParentType<DeploymentProtectionRule>,
    args: DeploymentProtectionRuleReviewersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DeploymentReviewerConnection>;
  /** The timeout in minutes for this protection rule. */
  timeout: number;
  /** The type of protection rule. */
  type: DeploymentProtectionRuleType;
}

/** The connection type for DeploymentProtectionRule. */
export interface DeploymentProtectionRuleConnection {
  /** A list of edges. */
  edges?: Maybe<DeploymentProtectionRuleEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<DeploymentProtectionRule>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface DeploymentProtectionRuleEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: DeploymentProtectionRule;
}

/** Argument input type for DeploymentRequestReviewersInput. */
export interface DeploymentRequestReviewersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A request to deploy a workflow run to an environment. */
export interface DeploymentRequest {
  /** Whether or not the current user can approve the deployment */
  currentUserCanApprove: boolean;
  /** The target environment of the deployment */
  environment: Environment;
  /** The teams or users that can review the deployment */
  reviewers(
    root: ParentType<DeploymentRequest>,
    args: DeploymentRequestReviewersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DeploymentReviewerConnection>;
  /** The wait timer in minutes configured in the environment */
  waitTimer: number;
  /** The wait timer in minutes configured in the environment */
  waitTimerStartedAt?: DateTime;
}

/** The connection type for DeploymentRequest. */
export interface DeploymentRequestConnection {
  /** A list of edges. */
  edges?: Maybe<DeploymentRequestEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<DeploymentRequest>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface DeploymentRequestEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: DeploymentRequest;
}

/** Argument input type for DeploymentReviewEnvironmentsInput. */
export interface DeploymentReviewEnvironmentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A deployment review. */
export interface DeploymentReview {
  /** The comment the user left. */
  comment: string;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The environments approved or rejected */
  environments(
    root: ParentType<DeploymentReview>,
    args: DeploymentReviewEnvironmentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnvironmentConnection>;
  id: ID;
  /** The decision of the user. */
  state: DeploymentReviewState;
  /** The user that reviewed the deployment. */
  user: User;
}

/** The connection type for DeploymentReview. */
export interface DeploymentReviewConnection {
  /** A list of edges. */
  edges?: Maybe<DeploymentReviewEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<DeploymentReview>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface DeploymentReviewEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: DeploymentReview;
}

/** The connection type for DeploymentReviewer. */
export interface DeploymentReviewerConnection {
  /** A list of edges. */
  edges?: Maybe<DeploymentReviewerEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<DeploymentReviewer>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface DeploymentReviewerEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: DeploymentReviewer;
}

/** Describes the status of a given deployment attempt. */
export interface DeploymentStatus {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the actor who triggered the deployment. */
  creator: Actor;
  /** Identifies the deployment associated with status. */
  deployment: Deployment;
  /** Identifies the description of the deployment. */
  description?: string;
  /** Identifies the environment of the deployment at the time of this deployment status */
  environment?: string;
  /** Identifies the environment URL of the deployment. */
  environmentUrl?: URI;
  id: ID;
  /** Identifies the log URL of the deployment. */
  logUrl?: URI;
  /** Identifies the current state of the deployment. */
  state: DeploymentStatusState;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
}

/** The connection type for DeploymentStatus. */
export interface DeploymentStatusConnection {
  /** A list of edges. */
  edges?: Maybe<DeploymentStatusEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<DeploymentStatus>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface DeploymentStatusEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: DeploymentStatus;
}

/** Autogenerated return type of DisablePullRequestAutoMerge */
export interface DisablePullRequestAutoMergePayload {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The pull request auto merge was disabled on. */
  pullRequest?: PullRequest;
}

/** Represents a 'disconnected' event on a given issue or pull request. */
export interface DisconnectedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Reference originated in a different repository. */
  isCrossRepository: boolean;
  /** Issue or pull request from which the issue was disconnected. */
  source: ReferencedSubject;
  /** Issue or pull request which was disconnected. */
  subject: ReferencedSubject;
}

/** Argument input type for DiscussionCommentsInput. */
export interface DiscussionCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for DiscussionLabelsInput. */
export interface DiscussionLabelsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for labels returned from the connection. */
  orderBy?: LabelOrder;
}

/** Argument input type for DiscussionReactionsInput. */
export interface DiscussionReactionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Allows filtering Reactions by emoji. */
  content?: ReactionContent;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows specifying the order in which reactions are returned. */
  orderBy?: ReactionOrder;
}

/** Argument input type for DiscussionUserContentEditsInput. */
export interface DiscussionUserContentEditsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A discussion in a repository. */
export interface Discussion {
  /** Reason that the conversation was locked. */
  activeLockReason?: LockReason;
  /** The comment chosen as this discussion's answer, if any. */
  answer?: DiscussionComment;
  /** The time when a user chose this discussion's answer, if answered. */
  answerChosenAt?: DateTime;
  /** The user who chose this discussion's answer, if answered. */
  answerChosenBy?: Actor;
  /** The actor who authored the comment. */
  author?: Actor;
  /** Author's association with the subject of the comment. */
  authorAssociation: CommentAuthorAssociation;
  /** The main text of the discussion post. */
  body: string;
  /** The body rendered to HTML. */
  bodyHTML: HTML;
  /** The body rendered to text. */
  bodyText: string;
  /** The category for this discussion. */
  category: DiscussionCategory;
  /** The replies to the discussion. */
  comments(
    root: ParentType<Discussion>,
    args: DiscussionCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DiscussionCommentConnection>;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Check if this comment was created via an email reply. */
  createdViaEmail: boolean;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The actor who edited the comment. */
  editor?: Actor;
  id: ID;
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: boolean;
  /** A list of labels associated with the object. */
  labels?(
    root: ParentType<Discussion>,
    args: DiscussionLabelsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<LabelConnection>>;
  /** The moment the editor made the last edit */
  lastEditedAt?: DateTime;
  /** `true` if the object is locked */
  locked: boolean;
  /** The number identifying this discussion within the repository. */
  number: number;
  /** Identifies when the comment was published at. */
  publishedAt?: DateTime;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: ReactionGroup[];
  /** A list of Reactions left on the Issue. */
  reactions(
    root: ParentType<Discussion>,
    args: DiscussionReactionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactionConnection>;
  /** The repository associated with this node. */
  repository: Repository;
  /** The path for this discussion. */
  resourcePath: URI;
  /** The title of this discussion. */
  title: string;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** Number of upvotes that this subject has received. */
  upvoteCount: number;
  /** The URL for this discussion. */
  url: URI;
  /** A list of edits to this content. */
  userContentEdits?(
    root: ParentType<Discussion>,
    args: DiscussionUserContentEditsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UserContentEditConnection>>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: boolean;
  /** Can user react to this subject */
  viewerCanReact: boolean;
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: boolean;
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
  /** Whether or not the current user can add or remove an upvote on this subject. */
  viewerCanUpvote: boolean;
  /** Did the viewer author this comment. */
  viewerDidAuthor: boolean;
  /** Whether or not the current user has already upvoted this subject. */
  viewerHasUpvoted: boolean;
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: SubscriptionState;
}

/** A category for discussions in a repository. */
export interface DiscussionCategory {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** A description of this category. */
  description?: string;
  /** An emoji representing this category. */
  emoji: string;
  /** This category's emoji rendered as HTML. */
  emojiHTML: HTML;
  id: ID;
  /** Whether or not discussions in this category support choosing an answer with the markDiscussionCommentAsAnswer mutation. */
  isAnswerable: boolean;
  /** The name of this category. */
  name: string;
  /** The repository associated with this node. */
  repository: Repository;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
}

/** The connection type for DiscussionCategory. */
export interface DiscussionCategoryConnection {
  /** A list of edges. */
  edges?: Maybe<DiscussionCategoryEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<DiscussionCategory>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface DiscussionCategoryEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: DiscussionCategory;
}

/** Argument input type for DiscussionCommentReactionsInput. */
export interface DiscussionCommentReactionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Allows filtering Reactions by emoji. */
  content?: ReactionContent;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows specifying the order in which reactions are returned. */
  orderBy?: ReactionOrder;
}

/** Argument input type for DiscussionCommentRepliesInput. */
export interface DiscussionCommentRepliesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for DiscussionCommentUserContentEditsInput. */
export interface DiscussionCommentUserContentEditsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A comment on a discussion. */
export interface DiscussionComment {
  /** The actor who authored the comment. */
  author?: Actor;
  /** Author's association with the subject of the comment. */
  authorAssociation: CommentAuthorAssociation;
  /** The body as Markdown. */
  body: string;
  /** The body rendered to HTML. */
  bodyHTML: HTML;
  /** The body rendered to text. */
  bodyText: string;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Check if this comment was created via an email reply. */
  createdViaEmail: boolean;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The time when this replied-to comment was deleted */
  deletedAt?: DateTime;
  /** The discussion this comment was created in */
  discussion?: Discussion;
  /** The actor who edited the comment. */
  editor?: Actor;
  id: ID;
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: boolean;
  /** Has this comment been chosen as the answer of its discussion? */
  isAnswer: boolean;
  /** Returns whether or not a comment has been minimized. */
  isMinimized: boolean;
  /** The moment the editor made the last edit */
  lastEditedAt?: DateTime;
  /** Returns why the comment was minimized. */
  minimizedReason?: string;
  /** Identifies when the comment was published at. */
  publishedAt?: DateTime;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: ReactionGroup[];
  /** A list of Reactions left on the Issue. */
  reactions(
    root: ParentType<DiscussionComment>,
    args: DiscussionCommentReactionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactionConnection>;
  /** The threaded replies to this comment. */
  replies(
    root: ParentType<DiscussionComment>,
    args: DiscussionCommentRepliesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DiscussionCommentConnection>;
  /** The discussion comment this comment is a reply to */
  replyTo?: DiscussionComment;
  /** The path for this discussion comment. */
  resourcePath: URI;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** Number of upvotes that this subject has received. */
  upvoteCount: number;
  /** The URL for this discussion comment. */
  url: URI;
  /** A list of edits to this content. */
  userContentEdits?(
    root: ParentType<DiscussionComment>,
    args: DiscussionCommentUserContentEditsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UserContentEditConnection>>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: boolean;
  /** Can the current user mark this comment as an answer? */
  viewerCanMarkAsAnswer: boolean;
  /** Check if the current viewer can minimize this object. */
  viewerCanMinimize: boolean;
  /** Can user react to this subject */
  viewerCanReact: boolean;
  /** Can the current user unmark this comment as an answer? */
  viewerCanUnmarkAsAnswer: boolean;
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
  /** Whether or not the current user can add or remove an upvote on this subject. */
  viewerCanUpvote: boolean;
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: CommentCannotUpdateReason[];
  /** Did the viewer author this comment. */
  viewerDidAuthor: boolean;
  /** Whether or not the current user has already upvoted this subject. */
  viewerHasUpvoted: boolean;
}

/** The connection type for DiscussionComment. */
export interface DiscussionCommentConnection {
  /** A list of edges. */
  edges?: Maybe<DiscussionCommentEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<DiscussionComment>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface DiscussionCommentEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: DiscussionComment;
}

/** The connection type for Discussion. */
export interface DiscussionConnection {
  /** A list of edges. */
  edges?: Maybe<DiscussionEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Discussion>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface DiscussionEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Discussion;
}

/** Autogenerated return type of DismissPullRequestReview */
export interface DismissPullRequestReviewPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The dismissed pull request review. */
  pullRequestReview?: PullRequestReview;
}

/** Autogenerated return type of EnablePullRequestAutoMerge */
export interface EnablePullRequestAutoMergePayload {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The pull request auto-merge was enabled on. */
  pullRequest?: PullRequest;
}

/** Argument input type for EnterpriseAvatarUrlInput. */
export interface EnterpriseAvatarUrlInput {
  /** The size of the resulting square image. */
  size?: number;
}

/** Argument input type for EnterpriseMembersInput. */
export interface EnterpriseMembersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Only return members within the selected GitHub Enterprise deployment */
  deployment?: EnterpriseUserDeployment;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for members returned from the connection. */
  orderBy?: EnterpriseMemberOrder;
  /** Only return members within the organizations with these logins */
  organizationLogins?: string[];
  /** The search string to look for. */
  query?: string;
  /** The role of the user in the enterprise organization or server. */
  role?: EnterpriseUserAccountMembershipRole;
}

/** Argument input type for EnterpriseOrganizationsInput. */
export interface EnterpriseOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations returned from the connection. */
  orderBy?: OrganizationOrder;
  /** The search string to look for. */
  query?: string;
}

/** Argument input type for EnterpriseUserAccountsInput. */
export interface EnterpriseUserAccountsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** An account to manage multiple organizations with consolidated policy and billing. */
export interface Enterprise {
  /** A URL pointing to the enterprise's public avatar. */
  avatarUrl(
    root: ParentType<Enterprise>,
    args: EnterpriseAvatarUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<URI>;
  /** Enterprise billing information visible to enterprise billing managers. */
  billingInfo?: EnterpriseBillingInfo;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The description of the enterprise. */
  description?: string;
  /** The description of the enterprise as HTML. */
  descriptionHTML: HTML;
  id: ID;
  /** The location of the enterprise. */
  location?: string;
  /** A list of users who are members of this enterprise. */
  members(
    root: ParentType<Enterprise>,
    args: EnterpriseMembersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseMemberConnection>;
  /** The name of the enterprise. */
  name: string;
  /** A list of organizations that belong to this enterprise. */
  organizations(
    root: ParentType<Enterprise>,
    args: EnterpriseOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** Enterprise information only visible to enterprise owners. */
  ownerInfo?: EnterpriseOwnerInfo;
  /** The HTTP path for this enterprise. */
  resourcePath: URI;
  /** The URL-friendly identifier for the enterprise. */
  slug: string;
  /** The HTTP URL for this enterprise. */
  url: URI;
  /** A list of user accounts on this enterprise. */
  userAccounts(
    root: ParentType<Enterprise>,
    args: EnterpriseUserAccountsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseUserAccountConnection>;
  /** Is the current viewer an admin of this enterprise? */
  viewerIsAdmin: boolean;
  /** The URL of the enterprise website. */
  websiteUrl?: URI;
}

/** The connection type for User. */
export interface EnterpriseAdministratorConnection {
  /** A list of edges. */
  edges?: Maybe<EnterpriseAdministratorEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<User>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** A User who is an administrator of an enterprise. */
export interface EnterpriseAdministratorEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: User;
  /** The role of the administrator. */
  role: EnterpriseAdministratorRole;
}

/** An invitation for a user to become an owner or billing manager of an enterprise. */
export interface EnterpriseAdministratorInvitation {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The email of the person who was invited to the enterprise. */
  email?: string;
  /** The enterprise the invitation is for. */
  enterprise: Enterprise;
  id: ID;
  /** The user who was invited to the enterprise. */
  invitee?: User;
  /** The user who created the invitation. */
  inviter?: User;
  /** The invitee's pending role in the enterprise (owner or billing_manager). */
  role: EnterpriseAdministratorRole;
}

/** The connection type for EnterpriseAdministratorInvitation. */
export interface EnterpriseAdministratorInvitationConnection {
  /** A list of edges. */
  edges?: Maybe<EnterpriseAdministratorInvitationEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<EnterpriseAdministratorInvitation>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface EnterpriseAdministratorInvitationEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: EnterpriseAdministratorInvitation;
}

/** Enterprise billing information visible to enterprise billing managers and owners. */
export interface EnterpriseBillingInfo {
  /** The number of licenseable users/emails across the enterprise. */
  allLicensableUsersCount: number;
  /** The number of data packs used by all organizations owned by the enterprise. */
  assetPacks: number;
  /** The number of available seats across all owned organizations based on the unique number of billable users. */
  availableSeats: number;
  /** The bandwidth quota in GB for all organizations owned by the enterprise. */
  bandwidthQuota: number;
  /** The bandwidth usage in GB for all organizations owned by the enterprise. */
  bandwidthUsage: number;
  /** The bandwidth usage as a percentage of the bandwidth quota. */
  bandwidthUsagePercentage: number;
  /** The total seats across all organizations owned by the enterprise. */
  seats: number;
  /** The storage quota in GB for all organizations owned by the enterprise. */
  storageQuota: number;
  /** The storage usage in GB for all organizations owned by the enterprise. */
  storageUsage: number;
  /** The storage usage as a percentage of the storage quota. */
  storageUsagePercentage: number;
  /** The number of available licenses across all owned organizations based on the unique number of billable users. */
  totalAvailableLicenses: number;
  /** The total number of licenses allocated. */
  totalLicenses: number;
}

/** Argument input type for EnterpriseIdentityProviderExternalIdentitiesInput. */
export interface EnterpriseIdentityProviderExternalIdentitiesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** An identity provider configured to provision identities for an enterprise. */
export interface EnterpriseIdentityProvider {
  /** The digest algorithm used to sign SAML requests for the identity provider. */
  digestMethod?: SamlDigestAlgorithm;
  /** The enterprise this identity provider belongs to. */
  enterprise?: Enterprise;
  /** ExternalIdentities provisioned by this identity provider. */
  externalIdentities(
    root: ParentType<EnterpriseIdentityProvider>,
    args: EnterpriseIdentityProviderExternalIdentitiesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ExternalIdentityConnection>;
  id: ID;
  /** The x509 certificate used by the identity provider to sign assertions and responses. */
  idpCertificate?: X509Certificate;
  /** The Issuer Entity ID for the SAML identity provider. */
  issuer?: string;
  /** Recovery codes that can be used by admins to access the enterprise if the identity provider is unavailable. */
  recoveryCodes?: string[];
  /** The signature algorithm used to sign SAML requests for the identity provider. */
  signatureMethod?: SamlSignatureAlgorithm;
  /** The URL endpoint for the identity provider's SAML SSO. */
  ssoUrl?: URI;
}

/** The connection type for EnterpriseMember. */
export interface EnterpriseMemberConnection {
  /** A list of edges. */
  edges?: Maybe<EnterpriseMemberEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<EnterpriseMember>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** A User who is a member of an enterprise through one or more organizations. */
export interface EnterpriseMemberEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** Whether the user does not have a license for the enterprise. */
  isUnlicensed: boolean;
  /** The item at the end of the edge. */
  node?: EnterpriseMember;
}

/** The connection type for Organization. */
export interface EnterpriseOrganizationMembershipConnection {
  /** A list of edges. */
  edges?: Maybe<EnterpriseOrganizationMembershipEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Organization>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An enterprise organization that a user is a member of. */
export interface EnterpriseOrganizationMembershipEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Organization;
  /** The role of the user in the enterprise membership. */
  role: EnterpriseUserAccountMembershipRole;
}

/** The connection type for User. */
export interface EnterpriseOutsideCollaboratorConnection {
  /** A list of edges. */
  edges?: Maybe<EnterpriseOutsideCollaboratorEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<User>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Argument input type for EnterpriseOutsideCollaboratorEdgeRepositoriesInput. */
export interface EnterpriseOutsideCollaboratorEdgeRepositoriesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for repositories. */
  orderBy?: RepositoryOrder;
}

/** A User who is an outside collaborator of an enterprise through one or more organizations. */
export interface EnterpriseOutsideCollaboratorEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** Whether the outside collaborator does not have a license for the enterprise. */
  isUnlicensed: boolean;
  /** The item at the end of the edge. */
  node?: User;
  /** The enterprise organization repositories this user is a member of. */
  repositories(
    root: ParentType<EnterpriseOutsideCollaboratorEdge>,
    args: EnterpriseOutsideCollaboratorEdgeRepositoriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseRepositoryInfoConnection>;
}

/** Argument input type for EnterpriseOwnerInfoAdminsInput. */
export interface EnterpriseOwnerInfoAdminsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for administrators returned from the connection. */
  orderBy?: EnterpriseMemberOrder;
  /** The search string to look for. */
  query?: string;
  /** The role to filter by. */
  role?: EnterpriseAdministratorRole;
}

/** Argument input type for EnterpriseOwnerInfoAffiliatedUsersWithTwoFactorDisabledInput. */
export interface EnterpriseOwnerInfoAffiliatedUsersWithTwoFactorDisabledInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for EnterpriseOwnerInfoAllowPrivateRepositoryForkingSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoAllowPrivateRepositoryForkingSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting value to find organizations for. */
  value: boolean;
}

/** Argument input type for EnterpriseOwnerInfoDefaultRepositoryPermissionSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoDefaultRepositoryPermissionSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The permission to find organizations for. */
  value: DefaultRepositoryPermissionField;
}

/** Argument input type for EnterpriseOwnerInfoDomainsInput. */
export interface EnterpriseOwnerInfoDomainsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Filter whether or not the domain is approved. */
  isApproved?: boolean;
  /** Filter whether or not the domain is verified. */
  isVerified?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for verifiable domains returned. */
  orderBy?: VerifiableDomainOrder;
}

/** Argument input type for EnterpriseOwnerInfoEnterpriseServerInstallationsInput. */
export interface EnterpriseOwnerInfoEnterpriseServerInstallationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Whether or not to only return installations discovered via GitHub Connect. */
  connectedOnly?: boolean;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for Enterprise Server installations returned. */
  orderBy?: EnterpriseServerInstallationOrder;
}

/** Argument input type for EnterpriseOwnerInfoIpAllowListEntriesInput. */
export interface EnterpriseOwnerInfoIpAllowListEntriesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for IP allow list entries returned. */
  orderBy?: IpAllowListEntryOrder;
}

/** Argument input type for EnterpriseOwnerInfoMembersCanChangeRepositoryVisibilitySettingOrganizationsInput. */
export interface EnterpriseOwnerInfoMembersCanChangeRepositoryVisibilitySettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting value to find organizations for. */
  value: boolean;
}

/** Argument input type for EnterpriseOwnerInfoMembersCanCreateRepositoriesSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoMembersCanCreateRepositoriesSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting to find organizations for. */
  value: OrganizationMembersCanCreateRepositoriesSettingValue;
}

/** Argument input type for EnterpriseOwnerInfoMembersCanDeleteIssuesSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoMembersCanDeleteIssuesSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting value to find organizations for. */
  value: boolean;
}

/** Argument input type for EnterpriseOwnerInfoMembersCanDeleteRepositoriesSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoMembersCanDeleteRepositoriesSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting value to find organizations for. */
  value: boolean;
}

/** Argument input type for EnterpriseOwnerInfoMembersCanInviteCollaboratorsSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoMembersCanInviteCollaboratorsSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting value to find organizations for. */
  value: boolean;
}

/** Argument input type for EnterpriseOwnerInfoMembersCanUpdateProtectedBranchesSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoMembersCanUpdateProtectedBranchesSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting value to find organizations for. */
  value: boolean;
}

/** Argument input type for EnterpriseOwnerInfoMembersCanViewDependencyInsightsSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoMembersCanViewDependencyInsightsSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting value to find organizations for. */
  value: boolean;
}

/** Argument input type for EnterpriseOwnerInfoOrganizationProjectsSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoOrganizationProjectsSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting value to find organizations for. */
  value: boolean;
}

/** Argument input type for EnterpriseOwnerInfoOutsideCollaboratorsInput. */
export interface EnterpriseOwnerInfoOutsideCollaboratorsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** The login of one specific outside collaborator. */
  login?: string;
  /** Ordering options for outside collaborators returned from the connection. */
  orderBy?: EnterpriseMemberOrder;
  /** The search string to look for. */
  query?: string;
  /** Only return outside collaborators on repositories with this visibility. */
  visibility?: RepositoryVisibility;
}

/** Argument input type for EnterpriseOwnerInfoPendingAdminInvitationsInput. */
export interface EnterpriseOwnerInfoPendingAdminInvitationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for pending enterprise administrator invitations returned from the connection. */
  orderBy?: EnterpriseAdministratorInvitationOrder;
  /** The search string to look for. */
  query?: string;
  /** The role to filter by. */
  role?: EnterpriseAdministratorRole;
}

/** Argument input type for EnterpriseOwnerInfoPendingCollaboratorInvitationsInput. */
export interface EnterpriseOwnerInfoPendingCollaboratorInvitationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for pending repository collaborator invitations returned from the connection. */
  orderBy?: RepositoryInvitationOrder;
  /** The search string to look for. */
  query?: string;
}

/** Argument input type for EnterpriseOwnerInfoPendingCollaboratorsInput. */
export interface EnterpriseOwnerInfoPendingCollaboratorsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for pending repository collaborator invitations returned from the connection. */
  orderBy?: RepositoryInvitationOrder;
  /** The search string to look for. */
  query?: string;
}

/** Argument input type for EnterpriseOwnerInfoPendingMemberInvitationsInput. */
export interface EnterpriseOwnerInfoPendingMemberInvitationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** The search string to look for. */
  query?: string;
}

/** Argument input type for EnterpriseOwnerInfoRepositoryProjectsSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoRepositoryProjectsSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting value to find organizations for. */
  value: boolean;
}

/** Argument input type for EnterpriseOwnerInfoSamlIdentityProviderSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoSamlIdentityProviderSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting value to find organizations for. */
  value: IdentityProviderConfigurationState;
}

/** Argument input type for EnterpriseOwnerInfoSupportEntitlementsInput. */
export interface EnterpriseOwnerInfoSupportEntitlementsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for support entitlement users returned from the connection. */
  orderBy?: EnterpriseMemberOrder;
}

/** Argument input type for EnterpriseOwnerInfoTeamDiscussionsSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoTeamDiscussionsSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting value to find organizations for. */
  value: boolean;
}

/** Argument input type for EnterpriseOwnerInfoTwoFactorRequiredSettingOrganizationsInput. */
export interface EnterpriseOwnerInfoTwoFactorRequiredSettingOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations with this setting. */
  orderBy?: OrganizationOrder;
  /** The setting value to find organizations for. */
  value: boolean;
}

/** Enterprise information only visible to enterprise owners. */
export interface EnterpriseOwnerInfo {
  /** A list of all of the administrators for this enterprise. */
  admins(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoAdminsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseAdministratorConnection>;
  /** A list of users in the enterprise who currently have two-factor authentication disabled. */
  affiliatedUsersWithTwoFactorDisabled(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoAffiliatedUsersWithTwoFactorDisabledInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserConnection>;
  /** Whether or not affiliated users with two-factor authentication disabled exist in the enterprise. */
  affiliatedUsersWithTwoFactorDisabledExist: boolean;
  /** The setting value for whether private repository forking is enabled for repositories in organizations in this enterprise. */
  allowPrivateRepositoryForkingSetting: EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided private repository forking setting value. */
  allowPrivateRepositoryForkingSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args:
      EnterpriseOwnerInfoAllowPrivateRepositoryForkingSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** The setting value for base repository permissions for organizations in this enterprise. */
  defaultRepositoryPermissionSetting:
    EnterpriseDefaultRepositoryPermissionSettingValue;
  /** A list of enterprise organizations configured with the provided default repository permission. */
  defaultRepositoryPermissionSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args:
      EnterpriseOwnerInfoDefaultRepositoryPermissionSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** A list of domains owned by the enterprise. */
  domains(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoDomainsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<VerifiableDomainConnection>;
  /** Enterprise Server installations owned by the enterprise. */
  enterpriseServerInstallations(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoEnterpriseServerInstallationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseServerInstallationConnection>;
  /** The setting value for whether the enterprise has an IP allow list enabled. */
  ipAllowListEnabledSetting: IpAllowListEnabledSettingValue;
  /** The IP addresses that are allowed to access resources owned by the enterprise. */
  ipAllowListEntries(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoIpAllowListEntriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IpAllowListEntryConnection>;
  /** The setting value for whether the enterprise has IP allow list configuration for installed GitHub Apps enabled. */
  ipAllowListForInstalledAppsEnabledSetting:
    IpAllowListForInstalledAppsEnabledSettingValue;
  /** Whether or not the default repository permission is currently being updated. */
  isUpdatingDefaultRepositoryPermission: boolean;
  /** Whether the two-factor authentication requirement is currently being enforced. */
  isUpdatingTwoFactorRequirement: boolean;
  /** The setting value for whether organization members with admin permissions on a
    repository can change repository visibility. */
  membersCanChangeRepositoryVisibilitySetting:
    EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided can change repository visibility setting value. */
  membersCanChangeRepositoryVisibilitySettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args:
      EnterpriseOwnerInfoMembersCanChangeRepositoryVisibilitySettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** The setting value for whether members of organizations in the enterprise can create internal repositories. */
  membersCanCreateInternalRepositoriesSetting?: boolean;
  /** The setting value for whether members of organizations in the enterprise can create private repositories. */
  membersCanCreatePrivateRepositoriesSetting?: boolean;
  /** The setting value for whether members of organizations in the enterprise can create public repositories. */
  membersCanCreatePublicRepositoriesSetting?: boolean;
  /** The setting value for whether members of organizations in the enterprise can create repositories. */
  membersCanCreateRepositoriesSetting?:
    EnterpriseMembersCanCreateRepositoriesSettingValue;
  /** A list of enterprise organizations configured with the provided repository creation setting value. */
  membersCanCreateRepositoriesSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args:
      EnterpriseOwnerInfoMembersCanCreateRepositoriesSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** The setting value for whether members with admin permissions for repositories can delete issues. */
  membersCanDeleteIssuesSetting: EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can delete issues setting value. */
  membersCanDeleteIssuesSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoMembersCanDeleteIssuesSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** The setting value for whether members with admin permissions for repositories can delete or transfer repositories. */
  membersCanDeleteRepositoriesSetting: EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can delete repositories setting value. */
  membersCanDeleteRepositoriesSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args:
      EnterpriseOwnerInfoMembersCanDeleteRepositoriesSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** The setting value for whether members of organizations in the enterprise can invite outside collaborators. */
  membersCanInviteCollaboratorsSetting: EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can invite collaborators setting value. */
  membersCanInviteCollaboratorsSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args:
      EnterpriseOwnerInfoMembersCanInviteCollaboratorsSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** Indicates whether members of this enterprise's organizations can purchase additional services for those organizations. */
  membersCanMakePurchasesSetting: EnterpriseMembersCanMakePurchasesSettingValue;
  /** The setting value for whether members with admin permissions for repositories can update protected branches. */
  membersCanUpdateProtectedBranchesSetting:
    EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can update protected branches setting value. */
  membersCanUpdateProtectedBranchesSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args:
      EnterpriseOwnerInfoMembersCanUpdateProtectedBranchesSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** The setting value for whether members can view dependency insights. */
  membersCanViewDependencyInsightsSetting:
    EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can view dependency insights setting value. */
  membersCanViewDependencyInsightsSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args:
      EnterpriseOwnerInfoMembersCanViewDependencyInsightsSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** Indicates if email notification delivery for this enterprise is restricted to verified or approved domains. */
  notificationDeliveryRestrictionEnabledSetting:
    NotificationRestrictionSettingValue;
  /** The setting value for whether organization projects are enabled for organizations in this enterprise. */
  organizationProjectsSetting: EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided organization projects setting value. */
  organizationProjectsSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoOrganizationProjectsSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** A list of outside collaborators across the repositories in the enterprise. */
  outsideCollaborators(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoOutsideCollaboratorsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseOutsideCollaboratorConnection>;
  /** A list of pending administrator invitations for the enterprise. */
  pendingAdminInvitations(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoPendingAdminInvitationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseAdministratorInvitationConnection>;
  /** A list of pending collaborator invitations across the repositories in the enterprise. */
  pendingCollaboratorInvitations(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoPendingCollaboratorInvitationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<RepositoryInvitationConnection>;
  /** A list of pending collaborators across the repositories in the enterprise. */
  pendingCollaborators(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoPendingCollaboratorsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterprisePendingCollaboratorConnection>;
  /** A list of pending member invitations for organizations in the enterprise. */
  pendingMemberInvitations(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoPendingMemberInvitationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterprisePendingMemberInvitationConnection>;
  /** The setting value for whether repository projects are enabled in this enterprise. */
  repositoryProjectsSetting: EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided repository projects setting value. */
  repositoryProjectsSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoRepositoryProjectsSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** The SAML Identity Provider for the enterprise. */
  samlIdentityProvider?: EnterpriseIdentityProvider;
  /** A list of enterprise organizations configured with the SAML single sign-on setting value. */
  samlIdentityProviderSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoSamlIdentityProviderSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** A list of members with a support entitlement. */
  supportEntitlements(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoSupportEntitlementsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseMemberConnection>;
  /** The setting value for whether team discussions are enabled for organizations in this enterprise. */
  teamDiscussionsSetting: EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided team discussions setting value. */
  teamDiscussionsSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoTeamDiscussionsSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** The setting value for whether the enterprise requires two-factor authentication for its organizations and users. */
  twoFactorRequiredSetting: EnterpriseEnabledSettingValue;
  /** A list of enterprise organizations configured with the two-factor authentication setting value. */
  twoFactorRequiredSettingOrganizations(
    root: ParentType<EnterpriseOwnerInfo>,
    args: EnterpriseOwnerInfoTwoFactorRequiredSettingOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
}

/** The connection type for User. */
export interface EnterprisePendingCollaboratorConnection {
  /** A list of edges. */
  edges?: Maybe<EnterprisePendingCollaboratorEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<User>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Argument input type for EnterprisePendingCollaboratorEdgeRepositoriesInput. */
export interface EnterprisePendingCollaboratorEdgeRepositoriesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for repositories. */
  orderBy?: RepositoryOrder;
}

/** A user with an invitation to be a collaborator on a repository owned by an organization in an enterprise. */
export interface EnterprisePendingCollaboratorEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** Whether the invited collaborator does not have a license for the enterprise. */
  isUnlicensed: boolean;
  /** The item at the end of the edge. */
  node?: User;
  /** The enterprise organization repositories this user is a member of. */
  repositories(
    root: ParentType<EnterprisePendingCollaboratorEdge>,
    args: EnterprisePendingCollaboratorEdgeRepositoriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseRepositoryInfoConnection>;
}

/** The connection type for OrganizationInvitation. */
export interface EnterprisePendingMemberInvitationConnection {
  /** A list of edges. */
  edges?: Maybe<EnterprisePendingMemberInvitationEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<OrganizationInvitation>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
  /** Identifies the total count of unique users in the connection. */
  totalUniqueUserCount: number;
}

/** An invitation to be a member in an enterprise organization. */
export interface EnterprisePendingMemberInvitationEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** Whether the invitation has a license for the enterprise. */
  isUnlicensed: boolean;
  /** The item at the end of the edge. */
  node?: OrganizationInvitation;
}

/** A subset of repository information queryable from an enterprise. */
export interface EnterpriseRepositoryInfo {
  id: ID;
  /** Identifies if the repository is private or internal. */
  isPrivate: boolean;
  /** The repository's name. */
  name: string;
  /** The repository's name with owner. */
  nameWithOwner: string;
}

/** The connection type for EnterpriseRepositoryInfo. */
export interface EnterpriseRepositoryInfoConnection {
  /** A list of edges. */
  edges?: Maybe<EnterpriseRepositoryInfoEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<EnterpriseRepositoryInfo>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface EnterpriseRepositoryInfoEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: EnterpriseRepositoryInfo;
}

/** Argument input type for EnterpriseServerInstallationUserAccountsInput. */
export interface EnterpriseServerInstallationUserAccountsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for Enterprise Server user accounts returned from the connection. */
  orderBy?: EnterpriseServerUserAccountOrder;
}

/** Argument input type for EnterpriseServerInstallationUserAccountsUploadsInput. */
export interface EnterpriseServerInstallationUserAccountsUploadsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for Enterprise Server user accounts uploads returned from the connection. */
  orderBy?: EnterpriseServerUserAccountsUploadOrder;
}

/** An Enterprise Server installation. */
export interface EnterpriseServerInstallation {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The customer name to which the Enterprise Server installation belongs. */
  customerName: string;
  /** The host name of the Enterprise Server installation. */
  hostName: string;
  id: ID;
  /** Whether or not the installation is connected to an Enterprise Server installation via GitHub Connect. */
  isConnected: boolean;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** User accounts on this Enterprise Server installation. */
  userAccounts(
    root: ParentType<EnterpriseServerInstallation>,
    args: EnterpriseServerInstallationUserAccountsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseServerUserAccountConnection>;
  /** User accounts uploads for the Enterprise Server installation. */
  userAccountsUploads(
    root: ParentType<EnterpriseServerInstallation>,
    args: EnterpriseServerInstallationUserAccountsUploadsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseServerUserAccountsUploadConnection>;
}

/** The connection type for EnterpriseServerInstallation. */
export interface EnterpriseServerInstallationConnection {
  /** A list of edges. */
  edges?: Maybe<EnterpriseServerInstallationEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<EnterpriseServerInstallation>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface EnterpriseServerInstallationEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: EnterpriseServerInstallation;
}

/** Argument input type for EnterpriseServerUserAccountEmailsInput. */
export interface EnterpriseServerUserAccountEmailsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for Enterprise Server user account emails returned from the connection. */
  orderBy?: EnterpriseServerUserAccountEmailOrder;
}

/** A user account on an Enterprise Server installation. */
export interface EnterpriseServerUserAccount {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** User emails belonging to this user account. */
  emails(
    root: ParentType<EnterpriseServerUserAccount>,
    args: EnterpriseServerUserAccountEmailsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseServerUserAccountEmailConnection>;
  /** The Enterprise Server installation on which this user account exists. */
  enterpriseServerInstallation: EnterpriseServerInstallation;
  id: ID;
  /** Whether the user account is a site administrator on the Enterprise Server installation. */
  isSiteAdmin: boolean;
  /** The login of the user account on the Enterprise Server installation. */
  login: string;
  /** The profile name of the user account on the Enterprise Server installation. */
  profileName?: string;
  /** The date and time when the user account was created on the Enterprise Server installation. */
  remoteCreatedAt: DateTime;
  /** The ID of the user account on the Enterprise Server installation. */
  remoteUserId: number;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
}

/** The connection type for EnterpriseServerUserAccount. */
export interface EnterpriseServerUserAccountConnection {
  /** A list of edges. */
  edges?: Maybe<EnterpriseServerUserAccountEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<EnterpriseServerUserAccount>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface EnterpriseServerUserAccountEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: EnterpriseServerUserAccount;
}

/** An email belonging to a user account on an Enterprise Server installation. */
export interface EnterpriseServerUserAccountEmail {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The email address. */
  email: string;
  id: ID;
  /** Indicates whether this is the primary email of the associated user account. */
  isPrimary: boolean;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The user account to which the email belongs. */
  userAccount: EnterpriseServerUserAccount;
}

/** The connection type for EnterpriseServerUserAccountEmail. */
export interface EnterpriseServerUserAccountEmailConnection {
  /** A list of edges. */
  edges?: Maybe<EnterpriseServerUserAccountEmailEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<EnterpriseServerUserAccountEmail>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface EnterpriseServerUserAccountEmailEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: EnterpriseServerUserAccountEmail;
}

/** A user accounts upload from an Enterprise Server installation. */
export interface EnterpriseServerUserAccountsUpload {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The enterprise to which this upload belongs. */
  enterprise: Enterprise;
  /** The Enterprise Server installation for which this upload was generated. */
  enterpriseServerInstallation: EnterpriseServerInstallation;
  id: ID;
  /** The name of the file uploaded. */
  name: string;
  /** The synchronization state of the upload */
  syncState: EnterpriseServerUserAccountsUploadSyncState;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
}

/** The connection type for EnterpriseServerUserAccountsUpload. */
export interface EnterpriseServerUserAccountsUploadConnection {
  /** A list of edges. */
  edges?: Maybe<EnterpriseServerUserAccountsUploadEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<EnterpriseServerUserAccountsUpload>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface EnterpriseServerUserAccountsUploadEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: EnterpriseServerUserAccountsUpload;
}

/** Argument input type for EnterpriseUserAccountAvatarUrlInput. */
export interface EnterpriseUserAccountAvatarUrlInput {
  /** The size of the resulting square image. */
  size?: number;
}

/** Argument input type for EnterpriseUserAccountOrganizationsInput. */
export interface EnterpriseUserAccountOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for organizations returned from the connection. */
  orderBy?: OrganizationOrder;
  /** The search string to look for. */
  query?: string;
  /** The role of the user in the enterprise organization. */
  role?: EnterpriseUserAccountMembershipRole;
}

/** An account for a user who is an admin of an enterprise or a member of an enterprise through one or more organizations. */
export interface EnterpriseUserAccount {
  /** A URL pointing to the enterprise user account's public avatar. */
  avatarUrl(
    root: ParentType<EnterpriseUserAccount>,
    args: EnterpriseUserAccountAvatarUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<URI>;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The enterprise in which this user account exists. */
  enterprise: Enterprise;
  id: ID;
  /** An identifier for the enterprise user account, a login or email address */
  login: string;
  /** The name of the enterprise user account */
  name?: string;
  /** A list of enterprise organizations this user is a member of. */
  organizations(
    root: ParentType<EnterpriseUserAccount>,
    args: EnterpriseUserAccountOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnterpriseOrganizationMembershipConnection>;
  /** The HTTP path for this user. */
  resourcePath: URI;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this user. */
  url: URI;
  /** The user within the enterprise. */
  user?: User;
}

/** The connection type for EnterpriseUserAccount. */
export interface EnterpriseUserAccountConnection {
  /** A list of edges. */
  edges?: Maybe<EnterpriseUserAccountEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<EnterpriseUserAccount>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface EnterpriseUserAccountEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: EnterpriseUserAccount;
}

/** Argument input type for EnvironmentProtectionRulesInput. */
export interface EnvironmentProtectionRulesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** An environment. */
export interface Environment {
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** The name of the environment */
  name: string;
  /** The protection rules defined for this environment */
  protectionRules(
    root: ParentType<Environment>,
    args: EnvironmentProtectionRulesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DeploymentProtectionRuleConnection>;
}

/** The connection type for Environment. */
export interface EnvironmentConnection {
  /** A list of edges. */
  edges?: Maybe<EnvironmentEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Environment>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface EnvironmentEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Environment;
}

/** An external identity provisioned by SAML SSO or SCIM. */
export interface ExternalIdentity {
  /** The GUID for this identity */
  guid: string;
  id: ID;
  /** Organization invitation for this SCIM-provisioned external identity */
  organizationInvitation?: OrganizationInvitation;
  /** SAML Identity attributes */
  samlIdentity?: ExternalIdentitySamlAttributes;
  /** SCIM Identity attributes */
  scimIdentity?: ExternalIdentityScimAttributes;
  /** User linked to this external identity. Will be NULL if this identity has not been claimed by an organization member. */
  user?: User;
}

/** The connection type for ExternalIdentity. */
export interface ExternalIdentityConnection {
  /** A list of edges. */
  edges?: Maybe<ExternalIdentityEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<ExternalIdentity>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface ExternalIdentityEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: ExternalIdentity;
}

/** SAML attributes for the External Identity */
export interface ExternalIdentitySamlAttributes {
  /** The emails associated with the SAML identity */
  emails?: UserEmailMetadata[];
  /** Family name of the SAML identity */
  familyName?: string;
  /** Given name of the SAML identity */
  givenName?: string;
  /** The groups linked to this identity in IDP */
  groups?: string[];
  /** The NameID of the SAML identity */
  nameId?: string;
  /** The userName of the SAML identity */
  username?: string;
}

/** SCIM attributes for the External Identity */
export interface ExternalIdentityScimAttributes {
  /** The emails associated with the SCIM identity */
  emails?: UserEmailMetadata[];
  /** Family name of the SCIM identity */
  familyName?: string;
  /** Given name of the SCIM identity */
  givenName?: string;
  /** The groups linked to this identity in IDP */
  groups?: string[];
  /** The userName of the SCIM identity */
  username?: string;
}

/** Autogenerated return type of FollowUser */
export interface FollowUserPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The user that was followed. */
  user?: User;
}

/** The connection type for User. */
export interface FollowerConnection {
  /** A list of edges. */
  edges?: Maybe<UserEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<User>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** The connection type for User. */
export interface FollowingConnection {
  /** A list of edges. */
  edges?: Maybe<UserEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<User>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** A funding platform link for a repository. */
export interface FundingLink {
  /** The funding platform this link is for. */
  platform: FundingPlatform;
  /** The configured URL for this funding link. */
  url: URI;
}

/** A generic hovercard context with a message and icon */
export interface GenericHovercardContext {
  /** A string describing this context */
  message: string;
  /** An octicon to accompany this context */
  octicon: string;
}

/** Argument input type for GistCommentsInput. */
export interface GistCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for GistFilesInput. */
export interface GistFilesInput {
  /** The maximum number of files to return. */
  limit?: number;
  /** The oid of the files to return */
  oid?: GitObjectID;
}

/** Argument input type for GistForksInput. */
export interface GistForksInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for gists returned from the connection */
  orderBy?: GistOrder;
}

/** Argument input type for GistStargazersInput. */
export interface GistStargazersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Order for connection */
  orderBy?: StarOrder;
}

/** A Gist. */
export interface Gist {
  /** A list of comments associated with the gist */
  comments(
    root: ParentType<Gist>,
    args: GistCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<GistCommentConnection>;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The gist description. */
  description?: string;
  /** The files in this gist. */
  files?(
    root: ParentType<Gist>,
    args: GistFilesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Maybe<GistFile>[]>>;
  /** A list of forks associated with the gist */
  forks(
    root: ParentType<Gist>,
    args: GistForksInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<GistConnection>;
  id: ID;
  /** Identifies if the gist is a fork. */
  isFork: boolean;
  /** Whether the gist is public or not. */
  isPublic: boolean;
  /** The gist name. */
  name: string;
  /** The gist owner. */
  owner?: RepositoryOwner;
  /** Identifies when the gist was last pushed to. */
  pushedAt?: DateTime;
  /** The HTML path to this resource. */
  resourcePath: URI;
  /** Returns a count of how many stargazers there are on this object */
  stargazerCount: number;
  /** A list of users who have starred this starrable. */
  stargazers(
    root: ParentType<Gist>,
    args: GistStargazersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<StargazerConnection>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this Gist. */
  url: URI;
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  viewerHasStarred: boolean;
}

/** Argument input type for GistCommentUserContentEditsInput. */
export interface GistCommentUserContentEditsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Represents a comment on an Gist. */
export interface GistComment {
  /** The actor who authored the comment. */
  author?: Actor;
  /** Author's association with the gist. */
  authorAssociation: CommentAuthorAssociation;
  /** Identifies the comment body. */
  body: string;
  /** The body rendered to HTML. */
  bodyHTML: HTML;
  /** The body rendered to text. */
  bodyText: string;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Check if this comment was created via an email reply. */
  createdViaEmail: boolean;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The actor who edited the comment. */
  editor?: Actor;
  /** The associated gist. */
  gist: Gist;
  id: ID;
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: boolean;
  /** Returns whether or not a comment has been minimized. */
  isMinimized: boolean;
  /** The moment the editor made the last edit */
  lastEditedAt?: DateTime;
  /** Returns why the comment was minimized. */
  minimizedReason?: string;
  /** Identifies when the comment was published at. */
  publishedAt?: DateTime;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** A list of edits to this content. */
  userContentEdits?(
    root: ParentType<GistComment>,
    args: GistCommentUserContentEditsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UserContentEditConnection>>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: boolean;
  /** Check if the current viewer can minimize this object. */
  viewerCanMinimize: boolean;
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: CommentCannotUpdateReason[];
  /** Did the viewer author this comment. */
  viewerDidAuthor: boolean;
}

/** The connection type for GistComment. */
export interface GistCommentConnection {
  /** A list of edges. */
  edges?: Maybe<GistCommentEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<GistComment>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface GistCommentEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: GistComment;
}

/** The connection type for Gist. */
export interface GistConnection {
  /** A list of edges. */
  edges?: Maybe<GistEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Gist>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface GistEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Gist;
}

/** Argument input type for GistFileTextInput. */
export interface GistFileTextInput {
  /** Optionally truncate the returned file to this length. */
  truncate?: number;
}

/** A file in a gist. */
export interface GistFile {
  /** The file name encoded to remove characters that are invalid in URL paths. */
  encodedName?: string;
  /** The gist file encoding. */
  encoding?: string;
  /** The file extension from the file name. */
  extension?: string;
  /** Indicates if this file is an image. */
  isImage: boolean;
  /** Whether the file's contents were truncated. */
  isTruncated: boolean;
  /** The programming language this file is written in. */
  language?: Language;
  /** The gist file name. */
  name?: string;
  /** The gist file size in bytes. */
  size?: number;
  /** UTF8 text data or null if the file is binary */
  text?(
    root: ParentType<GistFile>,
    args: GistFileTextInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<string>>;
}

/** Argument input type for GitActorAvatarUrlInput. */
export interface GitActorAvatarUrlInput {
  /** The size of the resulting square image. */
  size?: number;
}

/** Represents an actor in a Git commit (ie. an author or committer). */
export interface GitActor {
  /** A URL pointing to the author's public avatar. */
  avatarUrl(
    root: ParentType<GitActor>,
    args: GitActorAvatarUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<URI>;
  /** The timestamp of the Git action (authoring or committing). */
  date?: GitTimestamp;
  /** The email in the Git commit. */
  email?: string;
  /** The name in the Git commit. */
  name?: string;
  /** The GitHub user corresponding to the email field. Null if no such user exists. */
  user?: User;
}

/** The connection type for GitActor. */
export interface GitActorConnection {
  /** A list of edges. */
  edges?: Maybe<GitActorEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<GitActor>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface GitActorEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: GitActor;
}

/** Represents information about the GitHub instance. */
export interface GitHubMetadata {
  /** Returns a String that's a SHA of `github-services` */
  gitHubServicesSha: GitObjectID;
  /** IP addresses that users connect to for git operations */
  gitIpAddresses?: string[];
  /** IP addresses that service hooks are sent from */
  hookIpAddresses?: string[];
  /** IP addresses that the importer connects from */
  importerIpAddresses?: string[];
  /** Whether or not users are verified */
  isPasswordAuthenticationVerifiable: boolean;
  /** IP addresses for GitHub Pages' A records */
  pagesIpAddresses?: string[];
}

/** Represents a GPG signature on a Commit or Tag. */
export interface GpgSignature {
  /** Email used to sign this object. */
  email: string;
  /** True if the signature is valid and verified by GitHub. */
  isValid: boolean;
  /** Hex-encoded ID of the key that signed this object. */
  keyId?: string;
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: string;
  /** ASCII-armored signature header from object. */
  signature: string;
  /** GitHub user corresponding to the email signing this commit. */
  signer?: User;
  /** The state of this signature. `VALID` if signature is valid and verified by
    GitHub, otherwise represents reason why signature is considered invalid. */
  state: GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: boolean;
}

/** Represents a 'head_ref_deleted' event on a given pull request. */
export interface HeadRefDeletedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the Ref associated with the `head_ref_deleted` event. */
  headRef?: Ref;
  /** Identifies the name of the Ref associated with the `head_ref_deleted` event. */
  headRefName: string;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
}

/** Represents a 'head_ref_force_pushed' event on a given pull request. */
export interface HeadRefForcePushedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the after commit SHA for the 'head_ref_force_pushed' event. */
  afterCommit?: Commit;
  /** Identifies the before commit SHA for the 'head_ref_force_pushed' event. */
  beforeCommit?: Commit;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
  /** Identifies the fully qualified ref name for the 'head_ref_force_pushed' event. */
  ref?: Ref;
}

/** Represents a 'head_ref_restored' event on a given pull request. */
export interface HeadRefRestoredEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
}

/** Detail needed to display a hovercard for a user */
export interface Hovercard {
  /** Each of the contexts for this hovercard */
  contexts: HovercardContext[];
}

/** Autogenerated return type of ImportProject */
export interface ImportProjectPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new Project! */
  project?: Project;
}

/** Autogenerated return type of InviteEnterpriseAdmin */
export interface InviteEnterpriseAdminPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The created enterprise administrator invitation. */
  invitation?: EnterpriseAdministratorInvitation;
}

/** An IP address or range of addresses that is allowed to access an owner's resources. */
export interface IpAllowListEntry {
  /** A single IP address or range of IP addresses in CIDR notation. */
  allowListValue: string;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Whether the entry is currently active. */
  isActive: boolean;
  /** The name of the IP allow list entry. */
  name?: string;
  /** The owner of the IP allow list entry. */
  owner: IpAllowListOwner;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
}

/** The connection type for IpAllowListEntry. */
export interface IpAllowListEntryConnection {
  /** A list of edges. */
  edges?: Maybe<IpAllowListEntryEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<IpAllowListEntry>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface IpAllowListEntryEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: IpAllowListEntry;
}

/** Argument input type for IssueAssigneesInput. */
export interface IssueAssigneesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for IssueCommentsInput. */
export interface IssueCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for issue comments returned from the connection. */
  orderBy?: IssueCommentOrder;
}

/** Argument input type for IssueHovercardInput. */
export interface IssueHovercardInput {
  /** Whether or not to include notification contexts */
  includeNotificationContexts?: boolean;
}

/** Argument input type for IssueLabelsInput. */
export interface IssueLabelsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for labels returned from the connection. */
  orderBy?: LabelOrder;
}

/** Argument input type for IssueParticipantsInput. */
export interface IssueParticipantsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for IssueProjectCardsInput. */
export interface IssueProjectCardsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** A list of archived states to filter the cards by */
  archivedStates?: Maybe<ProjectCardArchivedState>[];
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for IssueReactionsInput. */
export interface IssueReactionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Allows filtering Reactions by emoji. */
  content?: ReactionContent;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows specifying the order in which reactions are returned. */
  orderBy?: ReactionOrder;
}

/** Argument input type for IssueTimelineInput. */
export interface IssueTimelineInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows filtering timeline events by a `since` timestamp. */
  since?: DateTime;
}

/** Argument input type for IssueTimelineItemsInput. */
export interface IssueTimelineItemsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Filter timeline items by type. */
  itemTypes?: IssueTimelineItemsItemType[];
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filter timeline items by a `since` timestamp. */
  since?: DateTime;
  /** Skips the first _n_ elements in the list. */
  skip?: number;
}

/** Argument input type for IssueUserContentEditsInput. */
export interface IssueUserContentEditsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export interface Issue {
  /** Reason that the conversation was locked. */
  activeLockReason?: LockReason;
  /** A list of Users assigned to this object. */
  assignees(
    root: ParentType<Issue>,
    args: IssueAssigneesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserConnection>;
  /** The actor who authored the comment. */
  author?: Actor;
  /** Author's association with the subject of the comment. */
  authorAssociation: CommentAuthorAssociation;
  /** Identifies the body of the issue. */
  body: string;
  /** The body rendered to HTML. */
  bodyHTML: HTML;
  /** The http path for this issue body */
  bodyResourcePath: URI;
  /** Identifies the body of the issue rendered to text. */
  bodyText: string;
  /** The http URL for this issue body */
  bodyUrl: URI;
  /** `true` if the object is closed (definition of closed may depend on type) */
  closed: boolean;
  /** Identifies the date and time when the object was closed. */
  closedAt?: DateTime;
  /** A list of comments associated with the Issue. */
  comments(
    root: ParentType<Issue>,
    args: IssueCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IssueCommentConnection>;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Check if this comment was created via an email reply. */
  createdViaEmail: boolean;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The actor who edited the comment. */
  editor?: Actor;
  /** The hovercard information for this issue */
  hovercard(
    root: ParentType<Issue>,
    args: IssueHovercardInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Hovercard>;
  id: ID;
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: boolean;
  /** Indicates whether or not this issue is currently pinned to the repository issues list */
  isPinned?: boolean;
  /** Is this issue read by the viewer */
  isReadByViewer?: boolean;
  /** A list of labels associated with the object. */
  labels?(
    root: ParentType<Issue>,
    args: IssueLabelsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<LabelConnection>>;
  /** The moment the editor made the last edit */
  lastEditedAt?: DateTime;
  /** `true` if the object is locked */
  locked: boolean;
  /** Identifies the milestone associated with the issue. */
  milestone?: Milestone;
  /** Identifies the issue number. */
  number: number;
  /** A list of Users that are participating in the Issue conversation. */
  participants(
    root: ParentType<Issue>,
    args: IssueParticipantsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserConnection>;
  /** List of project cards associated with this issue. */
  projectCards(
    root: ParentType<Issue>,
    args: IssueProjectCardsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ProjectCardConnection>;
  /** Identifies when the comment was published at. */
  publishedAt?: DateTime;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: ReactionGroup[];
  /** A list of Reactions left on the Issue. */
  reactions(
    root: ParentType<Issue>,
    args: IssueReactionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactionConnection>;
  /** The repository associated with this node. */
  repository: Repository;
  /** The HTTP path for this issue */
  resourcePath: URI;
  /** Identifies the state of the issue. */
  state: IssueState;
  /** A list of events, comments, commits, etc. associated with the issue. */
  timeline(
    root: ParentType<Issue>,
    args: IssueTimelineInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IssueTimelineConnection>;
  /** A list of events, comments, commits, etc. associated with the issue. */
  timelineItems(
    root: ParentType<Issue>,
    args: IssueTimelineItemsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IssueTimelineItemsConnection>;
  /** Identifies the issue title. */
  title: string;
  /** Identifies the issue title rendered to HTML. */
  titleHTML: string;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this issue */
  url: URI;
  /** A list of edits to this content. */
  userContentEdits?(
    root: ParentType<Issue>,
    args: IssueUserContentEditsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UserContentEditConnection>>;
  /** Can user react to this subject */
  viewerCanReact: boolean;
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: boolean;
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: CommentCannotUpdateReason[];
  /** Did the viewer author this comment. */
  viewerDidAuthor: boolean;
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: SubscriptionState;
}

/** Argument input type for IssueCommentReactionsInput. */
export interface IssueCommentReactionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Allows filtering Reactions by emoji. */
  content?: ReactionContent;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows specifying the order in which reactions are returned. */
  orderBy?: ReactionOrder;
}

/** Argument input type for IssueCommentUserContentEditsInput. */
export interface IssueCommentUserContentEditsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Represents a comment on an Issue. */
export interface IssueComment {
  /** The actor who authored the comment. */
  author?: Actor;
  /** Author's association with the subject of the comment. */
  authorAssociation: CommentAuthorAssociation;
  /** The body as Markdown. */
  body: string;
  /** The body rendered to HTML. */
  bodyHTML: HTML;
  /** The body rendered to text. */
  bodyText: string;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Check if this comment was created via an email reply. */
  createdViaEmail: boolean;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The actor who edited the comment. */
  editor?: Actor;
  id: ID;
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: boolean;
  /** Returns whether or not a comment has been minimized. */
  isMinimized: boolean;
  /** Identifies the issue associated with the comment. */
  issue: Issue;
  /** The moment the editor made the last edit */
  lastEditedAt?: DateTime;
  /** Returns why the comment was minimized. */
  minimizedReason?: string;
  /** Identifies when the comment was published at. */
  publishedAt?: DateTime;
  /** Returns the pull request associated with the comment, if this comment was made on a
    pull request. */
  pullRequest?: PullRequest;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: ReactionGroup[];
  /** A list of Reactions left on the Issue. */
  reactions(
    root: ParentType<IssueComment>,
    args: IssueCommentReactionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactionConnection>;
  /** The repository associated with this node. */
  repository: Repository;
  /** The HTTP path for this issue comment */
  resourcePath: URI;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this issue comment */
  url: URI;
  /** A list of edits to this content. */
  userContentEdits?(
    root: ParentType<IssueComment>,
    args: IssueCommentUserContentEditsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UserContentEditConnection>>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: boolean;
  /** Check if the current viewer can minimize this object. */
  viewerCanMinimize: boolean;
  /** Can user react to this subject */
  viewerCanReact: boolean;
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: CommentCannotUpdateReason[];
  /** Did the viewer author this comment. */
  viewerDidAuthor: boolean;
}

/** The connection type for IssueComment. */
export interface IssueCommentConnection {
  /** A list of edges. */
  edges?: Maybe<IssueCommentEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<IssueComment>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface IssueCommentEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: IssueComment;
}

/** The connection type for Issue. */
export interface IssueConnection {
  /** A list of edges. */
  edges?: Maybe<IssueEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Issue>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Argument input type for IssueContributionsByRepositoryContributionsInput. */
export interface IssueContributionsByRepositoryContributionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for contributions returned from the connection. */
  orderBy?: ContributionOrder;
}

/** This aggregates issues opened by a user within one repository. */
export interface IssueContributionsByRepository {
  /** The issue contributions. */
  contributions(
    root: ParentType<IssueContributionsByRepository>,
    args: IssueContributionsByRepositoryContributionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CreatedIssueContributionConnection>;
  /** The repository in which the issues were opened. */
  repository: Repository;
}

/** An edge in a connection. */
export interface IssueEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Issue;
}

/** A repository issue template. */
export interface IssueTemplate {
  /** The template purpose. */
  about?: string;
  /** The suggested issue body. */
  body?: string;
  /** The template name. */
  name: string;
  /** The suggested issue title. */
  title?: string;
}

/** The connection type for IssueTimelineItem. */
export interface IssueTimelineConnection {
  /** A list of edges. */
  edges?: Maybe<IssueTimelineItemEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<IssueTimelineItem>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface IssueTimelineItemEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: IssueTimelineItem;
}

/** The connection type for IssueTimelineItems. */
export interface IssueTimelineItemsConnection {
  /** A list of edges. */
  edges?: Maybe<IssueTimelineItemsEdge>[];
  /** Identifies the count of items after applying `before` and `after` filters. */
  filteredCount: number;
  /** A list of nodes. */
  nodes?: Maybe<IssueTimelineItems>[];
  /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
  pageCount: number;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
  /** Identifies the date and time when the timeline was last updated. */
  updatedAt: DateTime;
}

/** An edge in a connection. */
export interface IssueTimelineItemsEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: IssueTimelineItems;
}

/** Represents a user signing up for a GitHub account. */
export interface JoinedGitHubContribution {
  /** Whether this contribution is associated with a record you do not have access to. For
    example, your own 'first issue' contribution may have been made on a repository you can no
    longer access. */
  isRestricted: boolean;
  /** When this contribution was made. */
  occurredAt: DateTime;
  /** The HTTP path for this contribution. */
  resourcePath: URI;
  /** The HTTP URL for this contribution. */
  url: URI;
  /** The user who made this contribution. */
  user: User;
}

/** Argument input type for LabelIssuesInput. */
export interface LabelIssuesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Filtering options for issues returned from the connection. */
  filterBy?: IssueFilters;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** A list of label names to filter the pull requests by. */
  labels?: string[];
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for issues returned from the connection. */
  orderBy?: IssueOrder;
  /** A list of states to filter the issues by. */
  states?: IssueState[];
}

/** Argument input type for LabelPullRequestsInput. */
export interface LabelPullRequestsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** The base ref name to filter the pull requests by. */
  baseRefName?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** The head ref name to filter the pull requests by. */
  headRefName?: string;
  /** A list of label names to filter the pull requests by. */
  labels?: string[];
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for pull requests returned from the connection. */
  orderBy?: IssueOrder;
  /** A list of states to filter the pull requests by. */
  states?: PullRequestState[];
}

/** A label for categorizing Issues, Pull Requests, Milestones, or Discussions with a given Repository. */
export interface Label {
  /** Identifies the label color. */
  color: string;
  /** Identifies the date and time when the label was created. */
  createdAt?: DateTime;
  /** A brief description of this label. */
  description?: string;
  id: ID;
  /** Indicates whether or not this is a default label. */
  isDefault: boolean;
  /** A list of issues associated with this label. */
  issues(
    root: ParentType<Label>,
    args: LabelIssuesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IssueConnection>;
  /** Identifies the label name. */
  name: string;
  /** A list of pull requests associated with this label. */
  pullRequests(
    root: ParentType<Label>,
    args: LabelPullRequestsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestConnection>;
  /** The repository associated with this label. */
  repository: Repository;
  /** The HTTP path for this label. */
  resourcePath: URI;
  /** Identifies the date and time when the label was last updated. */
  updatedAt?: DateTime;
  /** The HTTP URL for this label. */
  url: URI;
}

/** The connection type for Label. */
export interface LabelConnection {
  /** A list of edges. */
  edges?: Maybe<LabelEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Label>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface LabelEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Label;
}

/** Represents a 'labeled' event on a given issue or pull request. */
export interface LabeledEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Identifies the label associated with the 'labeled' event. */
  label: Label;
  /** Identifies the `Labelable` associated with the event. */
  labelable: Labelable;
}

/** Represents a given language found in repositories. */
export interface Language {
  /** The color defined for the current language. */
  color?: string;
  id: ID;
  /** The name of the current language. */
  name: string;
}

/** A list of languages associated with the parent. */
export interface LanguageConnection {
  /** A list of edges. */
  edges?: Maybe<LanguageEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Language>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
  /** The total size in bytes of files written in that language. */
  totalSize: number;
}

/** Represents the language of a repository. */
export interface LanguageEdge {
  cursor: string;
  node: Language;
  /** The number of bytes of code written in the language. */
  size: number;
}

/** A repository's open source license */
export interface License {
  /** The full text of the license */
  body: string;
  /** The conditions set by the license */
  conditions: Maybe<LicenseRule>[];
  /** A human-readable description of the license */
  description?: string;
  /** Whether the license should be featured */
  featured: boolean;
  /** Whether the license should be displayed in license pickers */
  hidden: boolean;
  id: ID;
  /** Instructions on how to implement the license */
  implementation?: string;
  /** The lowercased SPDX ID of the license */
  key: string;
  /** The limitations set by the license */
  limitations: Maybe<LicenseRule>[];
  /** The license full name specified by <https://spdx.org/licenses> */
  name: string;
  /** Customary short name if applicable (e.g, GPLv3) */
  nickname?: string;
  /** The permissions set by the license */
  permissions: Maybe<LicenseRule>[];
  /** Whether the license is a pseudo-license placeholder (e.g., other, no-license) */
  pseudoLicense: boolean;
  /** Short identifier specified by <https://spdx.org/licenses> */
  spdxId?: string;
  /** URL to the license on <https://choosealicense.com> */
  url?: URI;
}

/** Describes a License's conditions, permissions, and limitations */
export interface LicenseRule {
  /** A description of the rule */
  description: string;
  /** The machine-readable rule key */
  key: string;
  /** The human-readable rule label */
  label: string;
}

/** Autogenerated return type of LinkRepositoryToProject */
export interface LinkRepositoryToProjectPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The linked Project. */
  project?: Project;
  /** The linked Repository. */
  repository?: Repository;
}

/** Autogenerated return type of LockLockable */
export interface LockLockablePayload {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The item that was locked. */
  lockedRecord?: Lockable;
}

/** Represents a 'locked' event on a given issue or pull request. */
export interface LockedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Reason that the conversation was locked (optional). */
  lockReason?: LockReason;
  /** Object that was locked. */
  lockable: Lockable;
}

/** Argument input type for MannequinAvatarUrlInput. */
export interface MannequinAvatarUrlInput {
  /** The size of the resulting square image. */
  size?: number;
}

/** A placeholder user for attribution of imported data on GitHub. */
export interface Mannequin {
  /** A URL pointing to the GitHub App's public avatar. */
  avatarUrl(
    root: ParentType<Mannequin>,
    args: MannequinAvatarUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<URI>;
  /** The user that has claimed the data attributed to this mannequin. */
  claimant?: User;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The mannequin's email on the source instance. */
  email?: string;
  id: ID;
  /** The username of the actor. */
  login: string;
  /** The HTML path to this resource. */
  resourcePath: URI;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The URL to this resource. */
  url: URI;
}

/** Autogenerated return type of MarkDiscussionCommentAsAnswer */
export interface MarkDiscussionCommentAsAnswerPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The discussion that includes the chosen comment. */
  discussion?: Discussion;
}

/** Autogenerated return type of MarkFileAsViewed */
export interface MarkFileAsViewedPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated pull request. */
  pullRequest?: PullRequest;
}

/** Autogenerated return type of MarkPullRequestReadyForReview */
export interface MarkPullRequestReadyForReviewPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The pull request that is ready for review. */
  pullRequest?: PullRequest;
}

/** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
export interface MarkedAsDuplicateEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** The authoritative issue or pull request which has been duplicated by another. */
  canonical?: IssueOrPullRequest;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The issue or pull request which has been marked as a duplicate of another. */
  duplicate?: IssueOrPullRequest;
  id: ID;
  /** Canonical and duplicate belong to different repositories. */
  isCrossRepository: boolean;
}

/** A public description of a Marketplace category. */
export interface MarketplaceCategory {
  /** The category's description. */
  description?: string;
  /** The technical description of how apps listed in this category work with GitHub. */
  howItWorks?: string;
  id: ID;
  /** The category's name. */
  name: string;
  /** How many Marketplace listings have this as their primary category. */
  primaryListingCount: number;
  /** The HTTP path for this Marketplace category. */
  resourcePath: URI;
  /** How many Marketplace listings have this as their secondary category. */
  secondaryListingCount: number;
  /** The short name of the category used in its URL. */
  slug: string;
  /** The HTTP URL for this Marketplace category. */
  url: URI;
}

/** Argument input type for MarketplaceListingLogoUrlInput. */
export interface MarketplaceListingLogoUrlInput {
  /** The size in pixels of the resulting square image. */
  size?: number;
}

/** A listing in the GitHub integration marketplace. */
export interface MarketplaceListing {
  /** The GitHub App this listing represents. */
  app?: App;
  /** URL to the listing owner's company site. */
  companyUrl?: URI;
  /** The HTTP path for configuring access to the listing's integration or OAuth app */
  configurationResourcePath: URI;
  /** The HTTP URL for configuring access to the listing's integration or OAuth app */
  configurationUrl: URI;
  /** URL to the listing's documentation. */
  documentationUrl?: URI;
  /** The listing's detailed description. */
  extendedDescription?: string;
  /** The listing's detailed description rendered to HTML. */
  extendedDescriptionHTML: HTML;
  /** The listing's introductory description. */
  fullDescription: string;
  /** The listing's introductory description rendered to HTML. */
  fullDescriptionHTML: HTML;
  /** Does this listing have any plans with a free trial? */
  hasPublishedFreeTrialPlans: boolean;
  /** Does this listing have a terms of service link? */
  hasTermsOfService: boolean;
  /** Whether the creator of the app is a verified org */
  hasVerifiedOwner: boolean;
  /** A technical description of how this app works with GitHub. */
  howItWorks?: string;
  /** The listing's technical description rendered to HTML. */
  howItWorksHTML: HTML;
  id: ID;
  /** URL to install the product to the viewer's account or organization. */
  installationUrl?: URI;
  /** Whether this listing's app has been installed for the current viewer */
  installedForViewer: boolean;
  /** Whether this listing has been removed from the Marketplace. */
  isArchived: boolean;
  /** Whether this listing is still an editable draft that has not been submitted
    for review and is not publicly visible in the Marketplace. */
  isDraft: boolean;
  /** Whether the product this listing represents is available as part of a paid plan. */
  isPaid: boolean;
  /** Whether this listing has been approved for display in the Marketplace. */
  isPublic: boolean;
  /** Whether this listing has been rejected by GitHub for display in the Marketplace. */
  isRejected: boolean;
  /** Whether this listing has been approved for unverified display in the Marketplace. */
  isUnverified: boolean;
  /** Whether this draft listing has been submitted for review for approval to be unverified in the Marketplace. */
  isUnverifiedPending: boolean;
  /** Whether this draft listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
  isVerificationPendingFromDraft: boolean;
  /** Whether this unverified listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
  isVerificationPendingFromUnverified: boolean;
  /** Whether this listing has been approved for verified display in the Marketplace. */
  isVerified: boolean;
  /** The hex color code, without the leading '#', for the logo background. */
  logoBackgroundColor: string;
  /** URL for the listing's logo image. */
  logoUrl?(
    root: ParentType<MarketplaceListing>,
    args: MarketplaceListingLogoUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<URI>>;
  /** The listing's full name. */
  name: string;
  /** The listing's very short description without a trailing period or ampersands. */
  normalizedShortDescription: string;
  /** URL to the listing's detailed pricing. */
  pricingUrl?: URI;
  /** The category that best describes the listing. */
  primaryCategory: MarketplaceCategory;
  /** URL to the listing's privacy policy, may return an empty string for listings that do not require a privacy policy URL. */
  privacyPolicyUrl: URI;
  /** The HTTP path for the Marketplace listing. */
  resourcePath: URI;
  /** The URLs for the listing's screenshots. */
  screenshotUrls: Maybe<string>[];
  /** An alternate category that describes the listing. */
  secondaryCategory?: MarketplaceCategory;
  /** The listing's very short description. */
  shortDescription: string;
  /** The short name of the listing used in its URL. */
  slug: string;
  /** URL to the listing's status page. */
  statusUrl?: URI;
  /** An email address for support for this listing's app. */
  supportEmail?: string;
  /** Either a URL or an email address for support for this listing's app, may
    return an empty string for listings that do not require a support URL. */
  supportUrl: URI;
  /** URL to the listing's terms of service. */
  termsOfServiceUrl?: URI;
  /** The HTTP URL for the Marketplace listing. */
  url: URI;
  /** Can the current viewer add plans for this Marketplace listing. */
  viewerCanAddPlans: boolean;
  /** Can the current viewer approve this Marketplace listing. */
  viewerCanApprove: boolean;
  /** Can the current viewer delist this Marketplace listing. */
  viewerCanDelist: boolean;
  /** Can the current viewer edit this Marketplace listing. */
  viewerCanEdit: boolean;
  /** Can the current viewer edit the primary and secondary category of this
    Marketplace listing. */
  viewerCanEditCategories: boolean;
  /** Can the current viewer edit the plans for this Marketplace listing. */
  viewerCanEditPlans: boolean;
  /** Can the current viewer return this Marketplace listing to draft state
    so it becomes editable again. */
  viewerCanRedraft: boolean;
  /** Can the current viewer reject this Marketplace listing by returning it to
    an editable draft state or rejecting it entirely. */
  viewerCanReject: boolean;
  /** Can the current viewer request this listing be reviewed for display in
    the Marketplace as verified. */
  viewerCanRequestApproval: boolean;
  /** Indicates whether the current user has an active subscription to this Marketplace listing. */
  viewerHasPurchased: boolean;
  /** Indicates if the current user has purchased a subscription to this Marketplace listing
    for all of the organizations the user owns. */
  viewerHasPurchasedForAllOrganizations: boolean;
  /** Does the current viewer role allow them to administer this Marketplace listing. */
  viewerIsListingAdmin: boolean;
}

/** Look up Marketplace Listings */
export interface MarketplaceListingConnection {
  /** A list of edges. */
  edges?: Maybe<MarketplaceListingEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<MarketplaceListing>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface MarketplaceListingEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: MarketplaceListing;
}

/** Audit log entry for a members_can_delete_repos.clear event. */
export interface MembersCanDeleteReposClearAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: URI;
  /** The slug of the enterprise. */
  enterpriseSlug?: string;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: URI;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a members_can_delete_repos.disable event. */
export interface MembersCanDeleteReposDisableAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: URI;
  /** The slug of the enterprise. */
  enterpriseSlug?: string;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: URI;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a members_can_delete_repos.enable event. */
export interface MembersCanDeleteReposEnableAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: URI;
  /** The slug of the enterprise. */
  enterpriseSlug?: string;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: URI;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Represents a 'mentioned' event on a given issue or pull request. */
export interface MentionedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
}

/** Autogenerated return type of MergeBranch */
export interface MergeBranchPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The resulting merge Commit. */
  mergeCommit?: Commit;
}

/** Autogenerated return type of MergePullRequest */
export interface MergePullRequestPayload {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The pull request that was merged. */
  pullRequest?: PullRequest;
}

/** Represents a 'merged' event on a given pull request. */
export interface MergedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the commit associated with the `merge` event. */
  commit?: Commit;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Identifies the Ref associated with the `merge` event. */
  mergeRef?: Ref;
  /** Identifies the name of the Ref associated with the `merge` event. */
  mergeRefName: string;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
  /** The HTTP path for this merged event. */
  resourcePath: URI;
  /** The HTTP URL for this merged event. */
  url: URI;
}

/** Argument input type for MilestoneIssuesInput. */
export interface MilestoneIssuesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Filtering options for issues returned from the connection. */
  filterBy?: IssueFilters;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** A list of label names to filter the pull requests by. */
  labels?: string[];
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for issues returned from the connection. */
  orderBy?: IssueOrder;
  /** A list of states to filter the issues by. */
  states?: IssueState[];
}

/** Argument input type for MilestonePullRequestsInput. */
export interface MilestonePullRequestsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** The base ref name to filter the pull requests by. */
  baseRefName?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** The head ref name to filter the pull requests by. */
  headRefName?: string;
  /** A list of label names to filter the pull requests by. */
  labels?: string[];
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for pull requests returned from the connection. */
  orderBy?: IssueOrder;
  /** A list of states to filter the pull requests by. */
  states?: PullRequestState[];
}

/** Represents a Milestone object on a given repository. */
export interface Milestone {
  /** `true` if the object is closed (definition of closed may depend on type) */
  closed: boolean;
  /** Identifies the date and time when the object was closed. */
  closedAt?: DateTime;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the actor who created the milestone. */
  creator?: Actor;
  /** Identifies the description of the milestone. */
  description?: string;
  /** Identifies the due date of the milestone. */
  dueOn?: DateTime;
  id: ID;
  /** A list of issues associated with the milestone. */
  issues(
    root: ParentType<Milestone>,
    args: MilestoneIssuesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IssueConnection>;
  /** Identifies the number of the milestone. */
  number: number;
  /** Identifies the percentage complete for the milestone */
  progressPercentage: number;
  /** A list of pull requests associated with the milestone. */
  pullRequests(
    root: ParentType<Milestone>,
    args: MilestonePullRequestsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestConnection>;
  /** The repository associated with this milestone. */
  repository: Repository;
  /** The HTTP path for this milestone */
  resourcePath: URI;
  /** Identifies the state of the milestone. */
  state: MilestoneState;
  /** Identifies the title of the milestone. */
  title: string;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this milestone */
  url: URI;
}

/** The connection type for Milestone. */
export interface MilestoneConnection {
  /** A list of edges. */
  edges?: Maybe<MilestoneEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Milestone>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface MilestoneEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Milestone;
}

/** Represents a 'milestoned' event on a given issue or pull request. */
export interface MilestonedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Identifies the milestone title associated with the 'milestoned' event. */
  milestoneTitle: string;
  /** Object referenced by event. */
  subject: MilestoneItem;
}

/** Autogenerated return type of MinimizeComment */
export interface MinimizeCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The comment that was minimized. */
  minimizedComment?: Minimizable;
}

/** Autogenerated return type of MoveProjectCard */
export interface MoveProjectCardPayload {
  /** The new edge of the moved card. */
  cardEdge?: ProjectCardEdge;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of MoveProjectColumn */
export interface MoveProjectColumnPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The new edge of the moved column. */
  columnEdge?: ProjectColumnEdge;
}

/** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
export interface MovedColumnsInProjectEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** Column name the issue or pull request was moved from. */
  previousProjectColumnName: string;
  /** Project referenced by event. */
  project?: Project;
  /** Project card referenced by this project event. */
  projectCard?: ProjectCard;
  /** Column name the issue or pull request was moved to. */
  projectColumnName: string;
}

/** Audit log entry for a oauth_application.create event. */
export interface OauthApplicationCreateAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The application URL of the OAuth Application. */
  applicationUrl?: URI;
  /** The callback URL of the OAuth Application. */
  callbackUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The name of the OAuth Application. */
  oauthApplicationName?: string;
  /** The HTTP path for the OAuth Application */
  oauthApplicationResourcePath?: URI;
  /** The HTTP URL for the OAuth Application */
  oauthApplicationUrl?: URI;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The rate limit of the OAuth Application. */
  rateLimit?: number;
  /** The state of the OAuth Application. */
  state?: OauthApplicationCreateAuditEntryState;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.add_billing_manager */
export interface OrgAddBillingManagerAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The email address used to invite a billing manager for the organization. */
  invitationEmail?: string;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.add_member */
export interface OrgAddMemberAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The permission level of the member added to the organization. */
  permission?: OrgAddMemberAuditEntryPermission;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.block_user */
export interface OrgBlockUserAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The blocked user. */
  blockedUser?: User;
  /** The username of the blocked user. */
  blockedUserName?: string;
  /** The HTTP path for the blocked user. */
  blockedUserResourcePath?: URI;
  /** The HTTP URL for the blocked user. */
  blockedUserUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.config.disable_collaborators_only event. */
export interface OrgConfigDisableCollaboratorsOnlyAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.config.enable_collaborators_only event. */
export interface OrgConfigEnableCollaboratorsOnlyAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.create event. */
export interface OrgCreateAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The billing plan for the Organization. */
  billingPlan?: OrgCreateAuditEntryBillingPlan;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.disable_oauth_app_restrictions event. */
export interface OrgDisableOauthAppRestrictionsAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.disable_saml event. */
export interface OrgDisableSamlAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The SAML provider's digest algorithm URL. */
  digestMethodUrl?: URI;
  id: ID;
  /** The SAML provider's issuer URL. */
  issuerUrl?: URI;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The SAML provider's signature algorithm URL. */
  signatureMethodUrl?: URI;
  /** The SAML provider's single sign-on URL. */
  singleSignOnUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.disable_two_factor_requirement event. */
export interface OrgDisableTwoFactorRequirementAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.enable_oauth_app_restrictions event. */
export interface OrgEnableOauthAppRestrictionsAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.enable_saml event. */
export interface OrgEnableSamlAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The SAML provider's digest algorithm URL. */
  digestMethodUrl?: URI;
  id: ID;
  /** The SAML provider's issuer URL. */
  issuerUrl?: URI;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The SAML provider's signature algorithm URL. */
  signatureMethodUrl?: URI;
  /** The SAML provider's single sign-on URL. */
  singleSignOnUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.enable_two_factor_requirement event. */
export interface OrgEnableTwoFactorRequirementAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.invite_member event. */
export interface OrgInviteMemberAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The email address of the organization invitation. */
  email?: string;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The organization invitation. */
  organizationInvitation?: OrganizationInvitation;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.invite_to_business event. */
export interface OrgInviteToBusinessAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: URI;
  /** The slug of the enterprise. */
  enterpriseSlug?: string;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: URI;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.oauth_app_access_approved event. */
export interface OrgOauthAppAccessApprovedAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The name of the OAuth Application. */
  oauthApplicationName?: string;
  /** The HTTP path for the OAuth Application */
  oauthApplicationResourcePath?: URI;
  /** The HTTP URL for the OAuth Application */
  oauthApplicationUrl?: URI;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.oauth_app_access_denied event. */
export interface OrgOauthAppAccessDeniedAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The name of the OAuth Application. */
  oauthApplicationName?: string;
  /** The HTTP path for the OAuth Application */
  oauthApplicationResourcePath?: URI;
  /** The HTTP URL for the OAuth Application */
  oauthApplicationUrl?: URI;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.oauth_app_access_requested event. */
export interface OrgOauthAppAccessRequestedAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The name of the OAuth Application. */
  oauthApplicationName?: string;
  /** The HTTP path for the OAuth Application */
  oauthApplicationResourcePath?: URI;
  /** The HTTP URL for the OAuth Application */
  oauthApplicationUrl?: URI;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.remove_billing_manager event. */
export interface OrgRemoveBillingManagerAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The reason for the billing manager being removed. */
  reason?: OrgRemoveBillingManagerAuditEntryReason;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.remove_member event. */
export interface OrgRemoveMemberAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The types of membership the member has with the organization. */
  membershipTypes?: OrgRemoveMemberAuditEntryMembershipType[];
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The reason for the member being removed. */
  reason?: OrgRemoveMemberAuditEntryReason;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.remove_outside_collaborator event. */
export interface OrgRemoveOutsideCollaboratorAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The types of membership the outside collaborator has with the organization. */
  membershipTypes?: OrgRemoveOutsideCollaboratorAuditEntryMembershipType[];
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The reason for the outside collaborator being removed from the Organization. */
  reason?: OrgRemoveOutsideCollaboratorAuditEntryReason;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.restore_member event. */
export interface OrgRestoreMemberAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The number of custom email routings for the restored member. */
  restoredCustomEmailRoutingsCount?: number;
  /** The number of issue assignments for the restored member. */
  restoredIssueAssignmentsCount?: number;
  /** Restored organization membership objects. */
  restoredMemberships?: OrgRestoreMemberAuditEntryMembership[];
  /** The number of restored memberships. */
  restoredMembershipsCount?: number;
  /** The number of repositories of the restored member. */
  restoredRepositoriesCount?: number;
  /** The number of starred repositories for the restored member. */
  restoredRepositoryStarsCount?: number;
  /** The number of watched repositories for the restored member. */
  restoredRepositoryWatchesCount?: number;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Metadata for an organization membership for org.restore_member actions */
export interface OrgRestoreMemberMembershipOrganizationAuditEntryData {
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
}

/** Metadata for a repository membership for org.restore_member actions */
export interface OrgRestoreMemberMembershipRepositoryAuditEntryData {
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
}

/** Metadata for a team membership for org.restore_member actions */
export interface OrgRestoreMemberMembershipTeamAuditEntryData {
  /** The team associated with the action */
  team?: Team;
  /** The name of the team */
  teamName?: string;
  /** The HTTP path for this team */
  teamResourcePath?: URI;
  /** The HTTP URL for this team */
  teamUrl?: URI;
}

/** Audit log entry for a org.unblock_user */
export interface OrgUnblockUserAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The user being unblocked by the organization. */
  blockedUser?: User;
  /** The username of the blocked user. */
  blockedUserName?: string;
  /** The HTTP path for the blocked user. */
  blockedUserResourcePath?: URI;
  /** The HTTP URL for the blocked user. */
  blockedUserUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.update_default_repository_permission */
export interface OrgUpdateDefaultRepositoryPermissionAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The new default repository permission level for the organization. */
  permission?: OrgUpdateDefaultRepositoryPermissionAuditEntryPermission;
  /** The former default repository permission level for the organization. */
  permissionWas?: OrgUpdateDefaultRepositoryPermissionAuditEntryPermission;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.update_member event. */
export interface OrgUpdateMemberAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The new member permission level for the organization. */
  permission?: OrgUpdateMemberAuditEntryPermission;
  /** The former member permission level for the organization. */
  permissionWas?: OrgUpdateMemberAuditEntryPermission;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a org.update_member_repository_creation_permission event. */
export interface OrgUpdateMemberRepositoryCreationPermissionAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** Can members create repositories in the organization. */
  canCreateRepositories?: boolean;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
  /** The permission for visibility level of repositories for this organization. */
  visibility?: OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility;
}

/** Audit log entry for a org.update_member_repository_invitation_permission event. */
export interface OrgUpdateMemberRepositoryInvitationPermissionAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** Can outside collaborators be invited to repositories in the organization. */
  canInviteOutsideCollaboratorsToRepositories?: boolean;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Argument input type for OrganizationAnyPinnableItemsInput. */
export interface OrganizationAnyPinnableItemsInput {
  /** Filter to only a particular kind of pinnable item. */
  type?: PinnableItemType;
}

/** Argument input type for OrganizationAuditLogInput. */
export interface OrganizationAuditLogInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for the returned audit log entries. */
  orderBy?: AuditLogOrder;
  /** The query string to filter audit entries */
  query?: string;
}

/** Argument input type for OrganizationAvatarUrlInput. */
export interface OrganizationAvatarUrlInput {
  /** The size of the resulting square image. */
  size?: number;
}

/** Argument input type for OrganizationDomainsInput. */
export interface OrganizationDomainsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Filter by if the domain is approved. */
  isApproved?: boolean;
  /** Filter by if the domain is verified. */
  isVerified?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for verifiable domains returned. */
  orderBy?: VerifiableDomainOrder;
}

/** Argument input type for OrganizationIpAllowListEntriesInput. */
export interface OrganizationIpAllowListEntriesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for IP allow list entries returned. */
  orderBy?: IpAllowListEntryOrder;
}

/** Argument input type for OrganizationIsSponsoredByInput. */
export interface OrganizationIsSponsoredByInput {
  /** The target account's login. */
  accountLogin: string;
}

/** Argument input type for OrganizationMemberStatusesInput. */
export interface OrganizationMemberStatusesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for user statuses returned from the connection. */
  orderBy?: UserStatusOrder;
}

/** Argument input type for OrganizationMembersWithRoleInput. */
export interface OrganizationMembersWithRoleInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for OrganizationPackagesInput. */
export interface OrganizationPackagesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Find packages by their names. */
  names?: Maybe<string>[];
  /** Ordering of the returned packages. */
  orderBy?: PackageOrder;
  /** Filter registry package by type. */
  packageType?: PackageType;
  /** Find packages in a repository by ID. */
  repositoryId?: ID;
}

/** Argument input type for OrganizationPendingMembersInput. */
export interface OrganizationPendingMembersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for OrganizationPinnableItemsInput. */
export interface OrganizationPinnableItemsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filter the types of pinnable items that are returned. */
  types?: PinnableItemType[];
}

/** Argument input type for OrganizationPinnedItemsInput. */
export interface OrganizationPinnedItemsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filter the types of pinned items that are returned. */
  types?: PinnableItemType[];
}

/** Argument input type for OrganizationProjectInput. */
export interface OrganizationProjectInput {
  /** The project number to find. */
  number: number;
}

/** Argument input type for OrganizationProjectsInput. */
export interface OrganizationProjectsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for projects returned from the connection */
  orderBy?: ProjectOrder;
  /** Query to search projects by, currently only searching by name. */
  search?: string;
  /** A list of states to filter the projects by. */
  states?: ProjectState[];
}

/** Argument input type for OrganizationRepositoriesInput. */
export interface OrganizationRepositoriesInput {
  /** Array of viewer's affiliation options for repositories returned from the
    connection. For example, OWNER will include only repositories that the
    current viewer owns. */
  affiliations?: Maybe<RepositoryAffiliation>[];
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** If non-null, filters repositories according to whether they are forks of another repository */
  isFork?: boolean;
  /** If non-null, filters repositories according to whether they have been locked */
  isLocked?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for repositories returned from the connection */
  orderBy?: RepositoryOrder;
  /** Array of owner's affiliation options for repositories returned from the
    connection. For example, OWNER will include only repositories that the
    organization or user being viewed owns. */
  ownerAffiliations?: Maybe<RepositoryAffiliation>[];
  /** If non-null, filters repositories according to privacy */
  privacy?: RepositoryPrivacy;
}

/** Argument input type for OrganizationRepositoryInput. */
export interface OrganizationRepositoryInput {
  /** Name of Repository to find. */
  name: string;
}

/** Argument input type for OrganizationRepositoryDiscussionCommentsInput. */
export interface OrganizationRepositoryDiscussionCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filter discussion comments to only those that were marked as the answer */
  onlyAnswers?: boolean;
  /** Filter discussion comments to only those in a specific repository. */
  repositoryId?: ID;
}

/** Argument input type for OrganizationRepositoryDiscussionsInput. */
export interface OrganizationRepositoryDiscussionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Filter discussions to only those that have been answered or not. Defaults to
    including both answered and unanswered discussions. */
  answered?: boolean;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for discussions returned from the connection. */
  orderBy?: DiscussionOrder;
  /** Filter discussions to only those in a specific repository. */
  repositoryId?: ID;
}

/** Argument input type for OrganizationSponsorshipsAsMaintainerInput. */
export interface OrganizationSponsorshipsAsMaintainerInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Whether or not to include private sponsorships in the result set */
  includePrivate?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for sponsorships returned from this connection. If left
    blank, the sponsorships will be ordered based on relevancy to the viewer. */
  orderBy?: SponsorshipOrder;
}

/** Argument input type for OrganizationSponsorshipsAsSponsorInput. */
export interface OrganizationSponsorshipsAsSponsorInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for sponsorships returned from this connection. If left
    blank, the sponsorships will be ordered based on relevancy to the viewer. */
  orderBy?: SponsorshipOrder;
}

/** Argument input type for OrganizationTeamInput. */
export interface OrganizationTeamInput {
  /** The name or slug of the team to find. */
  slug: string;
}

/** Argument input type for OrganizationTeamsInput. */
export interface OrganizationTeamsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** If true, filters teams that are mapped to an LDAP Group (Enterprise only) */
  ldapMapped?: boolean;
  /** Ordering options for teams returned from the connection */
  orderBy?: TeamOrder;
  /** If non-null, filters teams according to privacy */
  privacy?: TeamPrivacy;
  /** If non-null, filters teams with query on team name and team slug */
  query?: string;
  /** If non-null, filters teams according to whether the viewer is an admin or member on team */
  role?: TeamRole;
  /** If true, restrict to only root teams */
  rootTeamsOnly?: boolean;
  /** User logins to filter by */
  userLogins?: string[];
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export interface Organization {
  /** Determine if this repository owner has any items that can be pinned to their profile. */
  anyPinnableItems(
    root: ParentType<Organization>,
    args: OrganizationAnyPinnableItemsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<boolean>;
  /** Audit log entries of the organization */
  auditLog(
    root: ParentType<Organization>,
    args: OrganizationAuditLogInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationAuditEntryConnection>;
  /** A URL pointing to the organization's public avatar. */
  avatarUrl(
    root: ParentType<Organization>,
    args: OrganizationAvatarUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<URI>;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The organization's public profile description. */
  description?: string;
  /** The organization's public profile description rendered to HTML. */
  descriptionHTML?: string;
  /** A list of domains owned by the organization. */
  domains?(
    root: ParentType<Organization>,
    args: OrganizationDomainsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<VerifiableDomainConnection>>;
  /** The organization's public email. */
  email?: string;
  /** True if this user/organization has a GitHub Sponsors listing. */
  hasSponsorsListing: boolean;
  id: ID;
  /** The interaction ability settings for this organization. */
  interactionAbility?: RepositoryInteractionAbility;
  /** The setting value for whether the organization has an IP allow list enabled. */
  ipAllowListEnabledSetting: IpAllowListEnabledSettingValue;
  /** The IP addresses that are allowed to access resources owned by the organization. */
  ipAllowListEntries(
    root: ParentType<Organization>,
    args: OrganizationIpAllowListEntriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IpAllowListEntryConnection>;
  /** The setting value for whether the organization has IP allow list configuration for installed GitHub Apps enabled. */
  ipAllowListForInstalledAppsEnabledSetting:
    IpAllowListForInstalledAppsEnabledSettingValue;
  /** Check if the given account is sponsoring this user/organization. */
  isSponsoredBy(
    root: ParentType<Organization>,
    args: OrganizationIsSponsoredByInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<boolean>;
  /** True if the viewer is sponsored by this user/organization. */
  isSponsoringViewer: boolean;
  /** Whether the organization has verified its profile email and website. */
  isVerified: boolean;
  /** Showcases a selection of repositories and gists that the profile owner has
    either curated or that have been selected automatically based on popularity. */
  itemShowcase: ProfileItemShowcase;
  /** The organization's public profile location. */
  location?: string;
  /** The organization's login name. */
  login: string;
  /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
  memberStatuses(
    root: ParentType<Organization>,
    args: OrganizationMemberStatusesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserStatusConnection>;
  /** A list of users who are members of this organization. */
  membersWithRole(
    root: ParentType<Organization>,
    args: OrganizationMembersWithRoleInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationMemberConnection>;
  /** The organization's public profile name. */
  name?: string;
  /** The HTTP path creating a new team */
  newTeamResourcePath: URI;
  /** The HTTP URL creating a new team */
  newTeamUrl: URI;
  /** Indicates if email notification delivery for this organization is restricted to verified or approved domains. */
  notificationDeliveryRestrictionEnabledSetting:
    NotificationRestrictionSettingValue;
  /** The billing email for the organization. */
  organizationBillingEmail?: string;
  /** A list of packages under the owner. */
  packages(
    root: ParentType<Organization>,
    args: OrganizationPackagesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PackageConnection>;
  /** A list of users who have been invited to join this organization. */
  pendingMembers(
    root: ParentType<Organization>,
    args: OrganizationPendingMembersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserConnection>;
  /** A list of repositories and gists this profile owner can pin to their profile. */
  pinnableItems(
    root: ParentType<Organization>,
    args: OrganizationPinnableItemsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PinnableItemConnection>;
  /** A list of repositories and gists this profile owner has pinned to their profile */
  pinnedItems(
    root: ParentType<Organization>,
    args: OrganizationPinnedItemsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PinnableItemConnection>;
  /** Returns how many more items this profile owner can pin to their profile. */
  pinnedItemsRemaining: number;
  /** Find project by number. */
  project?(
    root: ParentType<Organization>,
    args: OrganizationProjectInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Project>>;
  /** A list of projects under the owner. */
  projects(
    root: ParentType<Organization>,
    args: OrganizationProjectsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ProjectConnection>;
  /** The HTTP path listing organization's projects */
  projectsResourcePath: URI;
  /** The HTTP URL listing organization's projects */
  projectsUrl: URI;
  /** A list of repositories that the user owns. */
  repositories(
    root: ParentType<Organization>,
    args: OrganizationRepositoriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<RepositoryConnection>;
  /** Find Repository. */
  repository?(
    root: ParentType<Organization>,
    args: OrganizationRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Repository>>;
  /** Discussion comments this user has authored. */
  repositoryDiscussionComments(
    root: ParentType<Organization>,
    args: OrganizationRepositoryDiscussionCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DiscussionCommentConnection>;
  /** Discussions this user has started. */
  repositoryDiscussions(
    root: ParentType<Organization>,
    args: OrganizationRepositoryDiscussionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DiscussionConnection>;
  /** When true the organization requires all members, billing managers, and outside
    collaborators to enable two-factor authentication. */
  requiresTwoFactorAuthentication?: boolean;
  /** The HTTP path for this organization. */
  resourcePath: URI;
  /** The Organization's SAML identity providers */
  samlIdentityProvider?: OrganizationIdentityProvider;
  /** The GitHub Sponsors listing for this user or organization. */
  sponsorsListing?: SponsorsListing;
  /** The viewer's sponsorship of this entity. */
  sponsorshipForViewerAsSponsor?: Sponsorship;
  /** This object's sponsorships as the maintainer. */
  sponsorshipsAsMaintainer(
    root: ParentType<Organization>,
    args: OrganizationSponsorshipsAsMaintainerInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SponsorshipConnection>;
  /** This object's sponsorships as the sponsor. */
  sponsorshipsAsSponsor(
    root: ParentType<Organization>,
    args: OrganizationSponsorshipsAsSponsorInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SponsorshipConnection>;
  /** Find an organization's team by its slug. */
  team?(
    root: ParentType<Organization>,
    args: OrganizationTeamInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Team>>;
  /** A list of teams in this organization. */
  teams(
    root: ParentType<Organization>,
    args: OrganizationTeamsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<TeamConnection>;
  /** The HTTP path listing organization's teams */
  teamsResourcePath: URI;
  /** The HTTP URL listing organization's teams */
  teamsUrl: URI;
  /** The organization's Twitter username. */
  twitterUsername?: string;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this organization. */
  url: URI;
  /** Organization is adminable by the viewer. */
  viewerCanAdminister: boolean;
  /** Can the viewer pin repositories and gists to the profile? */
  viewerCanChangePinnedItems: boolean;
  /** Can the current viewer create new projects on this owner. */
  viewerCanCreateProjects: boolean;
  /** Viewer can create repositories on this organization */
  viewerCanCreateRepositories: boolean;
  /** Viewer can create teams on this organization. */
  viewerCanCreateTeams: boolean;
  /** Whether or not the viewer is able to sponsor this user/organization. */
  viewerCanSponsor: boolean;
  /** Viewer is an active member of this organization. */
  viewerIsAMember: boolean;
  /** True if the viewer is sponsoring this user/organization. */
  viewerIsSponsoring: boolean;
  /** The organization's public profile URL. */
  websiteUrl?: URI;
}

/** The connection type for OrganizationAuditEntry. */
export interface OrganizationAuditEntryConnection {
  /** A list of edges. */
  edges?: Maybe<OrganizationAuditEntryEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<OrganizationAuditEntry>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface OrganizationAuditEntryEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: OrganizationAuditEntry;
}

/** The connection type for Organization. */
export interface OrganizationConnection {
  /** A list of edges. */
  edges?: Maybe<OrganizationEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Organization>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface OrganizationEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Organization;
}

/** Argument input type for OrganizationIdentityProviderExternalIdentitiesInput. */
export interface OrganizationIdentityProviderExternalIdentitiesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
export interface OrganizationIdentityProvider {
  /** The digest algorithm used to sign SAML requests for the Identity Provider. */
  digestMethod?: URI;
  /** External Identities provisioned by this Identity Provider */
  externalIdentities(
    root: ParentType<OrganizationIdentityProvider>,
    args: OrganizationIdentityProviderExternalIdentitiesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ExternalIdentityConnection>;
  id: ID;
  /** The x509 certificate used by the Identity Provider to sign assertions and responses. */
  idpCertificate?: X509Certificate;
  /** The Issuer Entity ID for the SAML Identity Provider */
  issuer?: string;
  /** Organization this Identity Provider belongs to */
  organization?: Organization;
  /** The signature algorithm used to sign SAML requests for the Identity Provider. */
  signatureMethod?: URI;
  /** The URL endpoint for the Identity Provider's SAML SSO. */
  ssoUrl?: URI;
}

/** An Invitation for a user to an organization. */
export interface OrganizationInvitation {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The email address of the user invited to the organization. */
  email?: string;
  id: ID;
  /** The type of invitation that was sent (e.g. email, user). */
  invitationType: OrganizationInvitationType;
  /** The user who was invited to the organization. */
  invitee?: User;
  /** The user who created the invitation. */
  inviter: User;
  /** The organization the invite is for */
  organization: Organization;
  /** The user's pending role in the organization (e.g. member, owner). */
  role: OrganizationInvitationRole;
}

/** The connection type for OrganizationInvitation. */
export interface OrganizationInvitationConnection {
  /** A list of edges. */
  edges?: Maybe<OrganizationInvitationEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<OrganizationInvitation>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface OrganizationInvitationEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: OrganizationInvitation;
}

/** The connection type for User. */
export interface OrganizationMemberConnection {
  /** A list of edges. */
  edges?: Maybe<OrganizationMemberEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<User>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Represents a user within an organization. */
export interface OrganizationMemberEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** Whether the organization member has two factor enabled or not. Returns null if information is not available to viewer. */
  hasTwoFactorEnabled?: boolean;
  /** The item at the end of the edge. */
  node?: User;
  /** The role this user has in the organization. */
  role?: OrganizationMemberRole;
}

/** Argument input type for OrganizationTeamsHovercardContextRelevantTeamsInput. */
export interface OrganizationTeamsHovercardContextRelevantTeamsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** An organization teams hovercard context */
export interface OrganizationTeamsHovercardContext {
  /** A string describing this context */
  message: string;
  /** An octicon to accompany this context */
  octicon: string;
  /** Teams in this organization the user is a member of that are relevant */
  relevantTeams(
    root: ParentType<OrganizationTeamsHovercardContext>,
    args: OrganizationTeamsHovercardContextRelevantTeamsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<TeamConnection>;
  /** The path for the full team list for this user */
  teamsResourcePath: URI;
  /** The URL for the full team list for this user */
  teamsUrl: URI;
  /** The total number of teams the user is on in the organization */
  totalTeamCount: number;
}

/** Argument input type for OrganizationsHovercardContextRelevantOrganizationsInput. */
export interface OrganizationsHovercardContextRelevantOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** An organization list hovercard context */
export interface OrganizationsHovercardContext {
  /** A string describing this context */
  message: string;
  /** An octicon to accompany this context */
  octicon: string;
  /** Organizations this user is a member of that are relevant */
  relevantOrganizations(
    root: ParentType<OrganizationsHovercardContext>,
    args: OrganizationsHovercardContextRelevantOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** The total number of organizations this user is in */
  totalOrganizationCount: number;
}

/** Argument input type for PackageVersionInput. */
export interface PackageVersionInput {
  /** The package version. */
  version: string;
}

/** Argument input type for PackageVersionsInput. */
export interface PackageVersionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering of the returned packages. */
  orderBy?: PackageVersionOrder;
}

/** Information for an uploaded package. */
export interface Package {
  id: ID;
  /** Find the latest version for the package. */
  latestVersion?: PackageVersion;
  /** Identifies the name of the package. */
  name: string;
  /** Identifies the type of the package. */
  packageType: PackageType;
  /** The repository this package belongs to. */
  repository?: Repository;
  /** Statistics about package activity. */
  statistics?: PackageStatistics;
  /** Find package version by version string. */
  version?(
    root: ParentType<Package>,
    args: PackageVersionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<PackageVersion>>;
  /** list of versions for this package */
  versions(
    root: ParentType<Package>,
    args: PackageVersionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PackageVersionConnection>;
}

/** The connection type for Package. */
export interface PackageConnection {
  /** A list of edges. */
  edges?: Maybe<PackageEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Package>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PackageEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Package;
}

/** A file in a package version. */
export interface PackageFile {
  id: ID;
  /** MD5 hash of the file. */
  md5?: string;
  /** Name of the file. */
  name: string;
  /** The package version this file belongs to. */
  packageVersion?: PackageVersion;
  /** SHA1 hash of the file. */
  sha1?: string;
  /** SHA256 hash of the file. */
  sha256?: string;
  /** Size of the file in bytes. */
  size?: number;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** URL to download the asset. */
  url?: URI;
}

/** The connection type for PackageFile. */
export interface PackageFileConnection {
  /** A list of edges. */
  edges?: Maybe<PackageFileEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PackageFile>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PackageFileEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PackageFile;
}

/** Represents a object that contains package activity statistics such as downloads. */
export interface PackageStatistics {
  /** Number of times the package was downloaded since it was created. */
  downloadsTotalCount: number;
}

/** A version tag contains the mapping between a tag name and a version. */
export interface PackageTag {
  id: ID;
  /** Identifies the tag name of the version. */
  name: string;
  /** Version that the tag is associated with. */
  version?: PackageVersion;
}

/** Argument input type for PackageVersionFilesInput. */
export interface PackageVersionFilesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering of the returned package files. */
  orderBy?: PackageFileOrder;
}

/** Information about a specific package version. */
export interface PackageVersion {
  /** List of files associated with this package version */
  files(
    root: ParentType<PackageVersion>,
    args: PackageVersionFilesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PackageFileConnection>;
  id: ID;
  /** The package associated with this version. */
  package?: Package;
  /** The platform this version was built for. */
  platform?: string;
  /** Whether or not this version is a pre-release. */
  preRelease: boolean;
  /** The README of this package version. */
  readme?: string;
  /** The release associated with this package version. */
  release?: Release;
  /** Statistics about package activity. */
  statistics?: PackageVersionStatistics;
  /** The package version summary. */
  summary?: string;
  /** The version string. */
  version: string;
}

/** The connection type for PackageVersion. */
export interface PackageVersionConnection {
  /** A list of edges. */
  edges?: Maybe<PackageVersionEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PackageVersion>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PackageVersionEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PackageVersion;
}

/** Represents a object that contains package version activity statistics such as downloads. */
export interface PackageVersionStatistics {
  /** Number of times the package was downloaded since it was created. */
  downloadsTotalCount: number;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: string;
  /** When paginating forwards, are there more items? */
  hasNextPage: boolean;
  /** When paginating backwards, are there more items? */
  hasPreviousPage: boolean;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: string;
}

/** A level of permission and source for a user's access to a repository. */
export interface PermissionSource {
  /** The organization the repository belongs to. */
  organization: Organization;
  /** The level of access this source has granted to the user. */
  permission: DefaultRepositoryPermissionField;
  /** The source of this permission. */
  source: PermissionGranter;
}

/** Autogenerated return type of PinIssue */
export interface PinIssuePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The issue that was pinned */
  issue?: Issue;
}

/** The connection type for PinnableItem. */
export interface PinnableItemConnection {
  /** A list of edges. */
  edges?: Maybe<PinnableItemEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PinnableItem>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PinnableItemEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PinnableItem;
}

/** A Pinned Discussion is a discussion pinned to a repository's index page. */
export interface PinnedDiscussion {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The discussion that was pinned. */
  discussion: Discussion;
  /** Color stops of the chosen gradient */
  gradientStopColors: string[];
  id: ID;
  /** Background texture pattern */
  pattern: PinnedDiscussionPattern;
  /** The actor that pinned this discussion. */
  pinnedBy: Actor;
  /** Preconfigured background gradient option */
  preconfiguredGradient?: PinnedDiscussionGradient;
  /** The repository associated with this node. */
  repository: Repository;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
}

/** The connection type for PinnedDiscussion. */
export interface PinnedDiscussionConnection {
  /** A list of edges. */
  edges?: Maybe<PinnedDiscussionEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PinnedDiscussion>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PinnedDiscussionEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PinnedDiscussion;
}

/** Represents a 'pinned' event on a given issue or pull request. */
export interface PinnedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Identifies the issue associated with the event. */
  issue: Issue;
}

/** A Pinned Issue is a issue pinned to a repository's index page. */
export interface PinnedIssue {
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** The issue that was pinned. */
  issue: Issue;
  /** The actor that pinned this issue. */
  pinnedBy: Actor;
  /** The repository that this issue was pinned to. */
  repository: Repository;
}

/** The connection type for PinnedIssue. */
export interface PinnedIssueConnection {
  /** A list of edges. */
  edges?: Maybe<PinnedIssueEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PinnedIssue>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PinnedIssueEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PinnedIssue;
}

/** Audit log entry for a private_repository_forking.disable event. */
export interface PrivateRepositoryForkingDisableAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: URI;
  /** The slug of the enterprise. */
  enterpriseSlug?: string;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: URI;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a private_repository_forking.enable event. */
export interface PrivateRepositoryForkingEnableAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: URI;
  /** The slug of the enterprise. */
  enterpriseSlug?: string;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: URI;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Argument input type for ProfileItemShowcaseItemsInput. */
export interface ProfileItemShowcaseItemsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A curatable list of repositories relating to a repository owner, which defaults
to showing the most popular repositories they own. */
export interface ProfileItemShowcase {
  /** Whether or not the owner has pinned any repositories or gists. */
  hasPinnedItems: boolean;
  /** The repositories and gists in the showcase. If the profile owner has any
    pinned items, those will be returned. Otherwise, the profile owner's popular
    repositories will be returned. */
  items(
    root: ParentType<ProfileItemShowcase>,
    args: ProfileItemShowcaseItemsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PinnableItemConnection>;
}

/** Argument input type for ProjectColumnsInput. */
export interface ProjectColumnsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for ProjectPendingCardsInput. */
export interface ProjectPendingCardsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** A list of archived states to filter the cards by */
  archivedStates?: Maybe<ProjectCardArchivedState>[];
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Projects manage issues, pull requests and notes within a project owner. */
export interface Project {
  /** The project's description body. */
  body?: string;
  /** The projects description body rendered to HTML. */
  bodyHTML: HTML;
  /** `true` if the object is closed (definition of closed may depend on type) */
  closed: boolean;
  /** Identifies the date and time when the object was closed. */
  closedAt?: DateTime;
  /** List of columns in the project */
  columns(
    root: ParentType<Project>,
    args: ProjectColumnsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ProjectColumnConnection>;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The actor who originally created the project. */
  creator?: Actor;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** The project's name. */
  name: string;
  /** The project's number. */
  number: number;
  /** The project's owner. Currently limited to repositories, organizations, and users. */
  owner: ProjectOwner;
  /** List of pending cards in this project */
  pendingCards(
    root: ParentType<Project>,
    args: ProjectPendingCardsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ProjectCardConnection>;
  /** Project progress details. */
  progress: ProjectProgress;
  /** The HTTP path for this project */
  resourcePath: URI;
  /** Whether the project is open or closed. */
  state: ProjectState;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this project */
  url: URI;
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
}

/** A card in a project. */
export interface ProjectCard {
  /** The project column this card is associated under. A card may only belong to one
    project column at a time. The column field will be null if the card is created
    in a pending state and has yet to be associated with a column. Once cards are
    associated with a column, they will not become pending in the future. */
  column?: ProjectColumn;
  /** The card content item */
  content?: ProjectCardItem;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The actor who created this card */
  creator?: Actor;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** Whether the card is archived */
  isArchived: boolean;
  /** The card note */
  note?: string;
  /** The project that contains this card. */
  project: Project;
  /** The HTTP path for this card */
  resourcePath: URI;
  /** The state of ProjectCard */
  state?: ProjectCardState;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this card */
  url: URI;
}

/** The connection type for ProjectCard. */
export interface ProjectCardConnection {
  /** A list of edges. */
  edges?: Maybe<ProjectCardEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<ProjectCard>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface ProjectCardEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: ProjectCard;
}

/** Argument input type for ProjectColumnCardsInput. */
export interface ProjectColumnCardsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** A list of archived states to filter the cards by */
  archivedStates?: Maybe<ProjectCardArchivedState>[];
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A column inside a project. */
export interface ProjectColumn {
  /** List of cards in the column */
  cards(
    root: ParentType<ProjectColumn>,
    args: ProjectColumnCardsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ProjectCardConnection>;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** The project column's name. */
  name: string;
  /** The project that contains this column. */
  project: Project;
  /** The semantic purpose of the column */
  purpose?: ProjectColumnPurpose;
  /** The HTTP path for this project column */
  resourcePath: URI;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this project column */
  url: URI;
}

/** The connection type for ProjectColumn. */
export interface ProjectColumnConnection {
  /** A list of edges. */
  edges?: Maybe<ProjectColumnEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<ProjectColumn>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface ProjectColumnEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: ProjectColumn;
}

/** A list of projects associated with the owner. */
export interface ProjectConnection {
  /** A list of edges. */
  edges?: Maybe<ProjectEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Project>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface ProjectEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Project;
}

/** Project progress stats. */
export interface ProjectProgress {
  /** The number of done cards. */
  doneCount: number;
  /** The percentage of done cards. */
  donePercentage: number;
  /** Whether progress tracking is enabled and cards with purpose exist for this project */
  enabled: boolean;
  /** The number of in-progress cards. */
  inProgressCount: number;
  /** The percentage of in-progress cards. */
  inProgressPercentage: number;
  /** The number of to do cards. */
  todoCount: number;
  /** The percentage of to do cards. */
  todoPercentage: number;
}

/** A user's public key. */
export interface PublicKey {
  /** The last time this authorization was used to perform an action. Values will be null for keys not owned by the user. */
  accessedAt?: DateTime;
  /** Identifies the date and time when the key was created. Keys created before
    March 5th, 2014 have inaccurate values. Values will be null for keys not owned by the user. */
  createdAt?: DateTime;
  /** The fingerprint for this PublicKey. */
  fingerprint: string;
  id: ID;
  /** Whether this PublicKey is read-only or not. Values will be null for keys not owned by the user. */
  isReadOnly?: boolean;
  /** The public key string. */
  key: string;
  /** Identifies the date and time when the key was updated. Keys created before
    March 5th, 2014 may have inaccurate values. Values will be null for keys not
    owned by the user. */
  updatedAt?: DateTime;
}

/** The connection type for PublicKey. */
export interface PublicKeyConnection {
  /** A list of edges. */
  edges?: Maybe<PublicKeyEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PublicKey>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PublicKeyEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PublicKey;
}

/** Argument input type for PullRequestAssigneesInput. */
export interface PullRequestAssigneesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for PullRequestClosingIssuesReferencesInput. */
export interface PullRequestClosingIssuesReferencesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for issues returned from the connection */
  orderBy?: IssueOrder;
}

/** Argument input type for PullRequestCommentsInput. */
export interface PullRequestCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for issue comments returned from the connection. */
  orderBy?: IssueCommentOrder;
}

/** Argument input type for PullRequestCommitsInput. */
export interface PullRequestCommitsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for PullRequestFilesInput. */
export interface PullRequestFilesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for PullRequestHovercardInput. */
export interface PullRequestHovercardInput {
  /** Whether or not to include notification contexts */
  includeNotificationContexts?: boolean;
}

/** Argument input type for PullRequestLabelsInput. */
export interface PullRequestLabelsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for labels returned from the connection. */
  orderBy?: LabelOrder;
}

/** Argument input type for PullRequestLatestOpinionatedReviewsInput. */
export interface PullRequestLatestOpinionatedReviewsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Only return reviews from user who have write access to the repository */
  writersOnly?: boolean;
}

/** Argument input type for PullRequestLatestReviewsInput. */
export interface PullRequestLatestReviewsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for PullRequestParticipantsInput. */
export interface PullRequestParticipantsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for PullRequestProjectCardsInput. */
export interface PullRequestProjectCardsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** A list of archived states to filter the cards by */
  archivedStates?: Maybe<ProjectCardArchivedState>[];
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for PullRequestReactionsInput. */
export interface PullRequestReactionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Allows filtering Reactions by emoji. */
  content?: ReactionContent;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows specifying the order in which reactions are returned. */
  orderBy?: ReactionOrder;
}

/** Argument input type for PullRequestReviewRequestsInput. */
export interface PullRequestReviewRequestsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for PullRequestReviewThreadsInput. */
export interface PullRequestReviewThreadsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for PullRequestReviewsInput. */
export interface PullRequestReviewsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Filter by author of the review. */
  author?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** A list of states to filter the reviews. */
  states?: PullRequestReviewState[];
}

/** Argument input type for PullRequestTimelineInput. */
export interface PullRequestTimelineInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows filtering timeline events by a `since` timestamp. */
  since?: DateTime;
}

/** Argument input type for PullRequestTimelineItemsInput. */
export interface PullRequestTimelineItemsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Filter timeline items by type. */
  itemTypes?: PullRequestTimelineItemsItemType[];
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filter timeline items by a `since` timestamp. */
  since?: DateTime;
  /** Skips the first _n_ elements in the list. */
  skip?: number;
}

/** Argument input type for PullRequestUserContentEditsInput. */
export interface PullRequestUserContentEditsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for PullRequestViewerMergeBodyTextInput. */
export interface PullRequestViewerMergeBodyTextInput {
  /** The merge method for the message. */
  mergeType?: PullRequestMergeMethod;
}

/** Argument input type for PullRequestViewerMergeHeadlineTextInput. */
export interface PullRequestViewerMergeHeadlineTextInput {
  /** The merge method for the message. */
  mergeType?: PullRequestMergeMethod;
}

/** A repository pull request. */
export interface PullRequest {
  /** Reason that the conversation was locked. */
  activeLockReason?: LockReason;
  /** The number of additions in this pull request. */
  additions: number;
  /** A list of Users assigned to this object. */
  assignees(
    root: ParentType<PullRequest>,
    args: PullRequestAssigneesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserConnection>;
  /** The actor who authored the comment. */
  author?: Actor;
  /** Author's association with the subject of the comment. */
  authorAssociation: CommentAuthorAssociation;
  /** Returns the auto-merge request object if one exists for this pull request. */
  autoMergeRequest?: AutoMergeRequest;
  /** Identifies the base Ref associated with the pull request. */
  baseRef?: Ref;
  /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
  baseRefName: string;
  /** Identifies the oid of the base ref associated with the pull request, even if the ref has been deleted. */
  baseRefOid: GitObjectID;
  /** The repository associated with this pull request's base Ref. */
  baseRepository?: Repository;
  /** The body as Markdown. */
  body: string;
  /** The body rendered to HTML. */
  bodyHTML: HTML;
  /** The body rendered to text. */
  bodyText: string;
  /** Whether or not the pull request is rebaseable. */
  canBeRebased: boolean;
  /** The number of changed files in this pull request. */
  changedFiles: number;
  /** The HTTP path for the checks of this pull request. */
  checksResourcePath: URI;
  /** The HTTP URL for the checks of this pull request. */
  checksUrl: URI;
  /** `true` if the pull request is closed */
  closed: boolean;
  /** Identifies the date and time when the object was closed. */
  closedAt?: DateTime;
  /** List of issues that were may be closed by this pull request */
  closingIssuesReferences?(
    root: ParentType<PullRequest>,
    args: PullRequestClosingIssuesReferencesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<IssueConnection>>;
  /** A list of comments associated with the pull request. */
  comments(
    root: ParentType<PullRequest>,
    args: PullRequestCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IssueCommentConnection>;
  /** A list of commits present in this pull request's head branch not present in the base branch. */
  commits(
    root: ParentType<PullRequest>,
    args: PullRequestCommitsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestCommitConnection>;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Check if this comment was created via an email reply. */
  createdViaEmail: boolean;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The number of deletions in this pull request. */
  deletions: number;
  /** The actor who edited this pull request's body. */
  editor?: Actor;
  /** Lists the files changed within this pull request. */
  files?(
    root: ParentType<PullRequest>,
    args: PullRequestFilesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<PullRequestChangedFileConnection>>;
  /** Identifies the head Ref associated with the pull request. */
  headRef?: Ref;
  /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
  headRefName: string;
  /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
  headRefOid: GitObjectID;
  /** The repository associated with this pull request's head Ref. */
  headRepository?: Repository;
  /** The owner of the repository associated with this pull request's head Ref. */
  headRepositoryOwner?: RepositoryOwner;
  /** The hovercard information for this issue */
  hovercard(
    root: ParentType<PullRequest>,
    args: PullRequestHovercardInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Hovercard>;
  id: ID;
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: boolean;
  /** The head and base repositories are different. */
  isCrossRepository: boolean;
  /** Identifies if the pull request is a draft. */
  isDraft: boolean;
  /** Is this pull request read by the viewer */
  isReadByViewer?: boolean;
  /** A list of labels associated with the object. */
  labels?(
    root: ParentType<PullRequest>,
    args: PullRequestLabelsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<LabelConnection>>;
  /** The moment the editor made the last edit */
  lastEditedAt?: DateTime;
  /** A list of latest reviews per user associated with the pull request. */
  latestOpinionatedReviews?(
    root: ParentType<PullRequest>,
    args: PullRequestLatestOpinionatedReviewsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<PullRequestReviewConnection>>;
  /** A list of latest reviews per user associated with the pull request that are not also pending review. */
  latestReviews?(
    root: ParentType<PullRequest>,
    args: PullRequestLatestReviewsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<PullRequestReviewConnection>>;
  /** `true` if the pull request is locked */
  locked: boolean;
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify: boolean;
  /** The commit that was created when this pull request was merged. */
  mergeCommit?: Commit;
  /** Detailed information about the current pull request merge state status. */
  mergeStateStatus: MergeStateStatus;
  /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
  mergeable: MergeableState;
  /** Whether or not the pull request was merged. */
  merged: boolean;
  /** The date and time that the pull request was merged. */
  mergedAt?: DateTime;
  /** The actor who merged the pull request. */
  mergedBy?: Actor;
  /** Identifies the milestone associated with the pull request. */
  milestone?: Milestone;
  /** Identifies the pull request number. */
  number: number;
  /** A list of Users that are participating in the Pull Request conversation. */
  participants(
    root: ParentType<PullRequest>,
    args: PullRequestParticipantsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserConnection>;
  /** The permalink to the pull request. */
  permalink: URI;
  /** The commit that GitHub automatically generated to test if this pull request
    could be merged. This field will not return a value if the pull request is
    merged, or if the test merge commit is still being generated. See the
    `mergeable` field for more details on the mergeability of the pull request. */
  potentialMergeCommit?: Commit;
  /** List of project cards associated with this pull request. */
  projectCards(
    root: ParentType<PullRequest>,
    args: PullRequestProjectCardsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ProjectCardConnection>;
  /** Identifies when the comment was published at. */
  publishedAt?: DateTime;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: ReactionGroup[];
  /** A list of Reactions left on the Issue. */
  reactions(
    root: ParentType<PullRequest>,
    args: PullRequestReactionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactionConnection>;
  /** The repository associated with this node. */
  repository: Repository;
  /** The HTTP path for this pull request. */
  resourcePath: URI;
  /** The HTTP path for reverting this pull request. */
  revertResourcePath: URI;
  /** The HTTP URL for reverting this pull request. */
  revertUrl: URI;
  /** The current status of this pull request with respect to code review. */
  reviewDecision?: PullRequestReviewDecision;
  /** A list of review requests associated with the pull request. */
  reviewRequests?(
    root: ParentType<PullRequest>,
    args: PullRequestReviewRequestsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ReviewRequestConnection>>;
  /** The list of all review threads for this pull request. */
  reviewThreads(
    root: ParentType<PullRequest>,
    args: PullRequestReviewThreadsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestReviewThreadConnection>;
  /** A list of reviews associated with the pull request. */
  reviews?(
    root: ParentType<PullRequest>,
    args: PullRequestReviewsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<PullRequestReviewConnection>>;
  /** Identifies the state of the pull request. */
  state: PullRequestState;
  /** A list of reviewer suggestions based on commit history and past review comments. */
  suggestedReviewers: Maybe<SuggestedReviewer>[];
  /** A list of events, comments, commits, etc. associated with the pull request. */
  timeline(
    root: ParentType<PullRequest>,
    args: PullRequestTimelineInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestTimelineConnection>;
  /** A list of events, comments, commits, etc. associated with the pull request. */
  timelineItems(
    root: ParentType<PullRequest>,
    args: PullRequestTimelineItemsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestTimelineItemsConnection>;
  /** Identifies the pull request title. */
  title: string;
  /** Identifies the pull request title rendered to HTML. */
  titleHTML: HTML;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this pull request. */
  url: URI;
  /** A list of edits to this content. */
  userContentEdits?(
    root: ParentType<PullRequest>,
    args: PullRequestUserContentEditsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UserContentEditConnection>>;
  /** Whether or not the viewer can apply suggestion. */
  viewerCanApplySuggestion: boolean;
  /** Check if the viewer can restore the deleted head ref. */
  viewerCanDeleteHeadRef: boolean;
  /** Whether or not the viewer can disable auto-merge */
  viewerCanDisableAutoMerge: boolean;
  /** Whether or not the viewer can enable auto-merge */
  viewerCanEnableAutoMerge: boolean;
  /** Can user react to this subject */
  viewerCanReact: boolean;
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: boolean;
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: CommentCannotUpdateReason[];
  /** Did the viewer author this comment. */
  viewerDidAuthor: boolean;
  /** The latest review given from the viewer. */
  viewerLatestReview?: PullRequestReview;
  /** The person who has requested the viewer for review on this pull request. */
  viewerLatestReviewRequest?: ReviewRequest;
  /** The merge body text for the viewer and method. */
  viewerMergeBodyText(
    root: ParentType<PullRequest>,
    args: PullRequestViewerMergeBodyTextInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<string>;
  /** The merge headline text for the viewer and method. */
  viewerMergeHeadlineText(
    root: ParentType<PullRequest>,
    args: PullRequestViewerMergeHeadlineTextInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<string>;
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: SubscriptionState;
}

/** A file changed in a pull request. */
export interface PullRequestChangedFile {
  /** The number of additions to the file. */
  additions: number;
  /** The number of deletions to the file. */
  deletions: number;
  /** The path of the file. */
  path: string;
  /** The state of the file for the viewer. */
  viewerViewedState: FileViewedState;
}

/** The connection type for PullRequestChangedFile. */
export interface PullRequestChangedFileConnection {
  /** A list of edges. */
  edges?: Maybe<PullRequestChangedFileEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PullRequestChangedFile>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PullRequestChangedFileEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PullRequestChangedFile;
}

/** Represents a Git commit part of a pull request. */
export interface PullRequestCommit {
  /** The Git commit object */
  commit: Commit;
  id: ID;
  /** The pull request this commit belongs to */
  pullRequest: PullRequest;
  /** The HTTP path for this pull request commit */
  resourcePath: URI;
  /** The HTTP URL for this pull request commit */
  url: URI;
}

/** Argument input type for PullRequestCommitCommentThreadCommentsInput. */
export interface PullRequestCommitCommentThreadCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Represents a commit comment thread part of a pull request. */
export interface PullRequestCommitCommentThread {
  /** The comments that exist in this thread. */
  comments(
    root: ParentType<PullRequestCommitCommentThread>,
    args: PullRequestCommitCommentThreadCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CommitCommentConnection>;
  /** The commit the comments were made on. */
  commit: Commit;
  id: ID;
  /** The file the comments were made on. */
  path?: string;
  /** The position in the diff for the commit that the comment was made on. */
  position?: number;
  /** The pull request this commit comment thread belongs to */
  pullRequest: PullRequest;
  /** The repository associated with this node. */
  repository: Repository;
}

/** The connection type for PullRequestCommit. */
export interface PullRequestCommitConnection {
  /** A list of edges. */
  edges?: Maybe<PullRequestCommitEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PullRequestCommit>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PullRequestCommitEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PullRequestCommit;
}

/** The connection type for PullRequest. */
export interface PullRequestConnection {
  /** A list of edges. */
  edges?: Maybe<PullRequestEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PullRequest>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Argument input type for PullRequestContributionsByRepositoryContributionsInput. */
export interface PullRequestContributionsByRepositoryContributionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for contributions returned from the connection. */
  orderBy?: ContributionOrder;
}

/** This aggregates pull requests opened by a user within one repository. */
export interface PullRequestContributionsByRepository {
  /** The pull request contributions. */
  contributions(
    root: ParentType<PullRequestContributionsByRepository>,
    args: PullRequestContributionsByRepositoryContributionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CreatedPullRequestContributionConnection>;
  /** The repository in which the pull requests were opened. */
  repository: Repository;
}

/** An edge in a connection. */
export interface PullRequestEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PullRequest;
}

/** Argument input type for PullRequestReviewCommentsInput. */
export interface PullRequestReviewCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for PullRequestReviewOnBehalfOfInput. */
export interface PullRequestReviewOnBehalfOfInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for PullRequestReviewReactionsInput. */
export interface PullRequestReviewReactionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Allows filtering Reactions by emoji. */
  content?: ReactionContent;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows specifying the order in which reactions are returned. */
  orderBy?: ReactionOrder;
}

/** Argument input type for PullRequestReviewUserContentEditsInput. */
export interface PullRequestReviewUserContentEditsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A review object for a given pull request. */
export interface PullRequestReview {
  /** The actor who authored the comment. */
  author?: Actor;
  /** Author's association with the subject of the comment. */
  authorAssociation: CommentAuthorAssociation;
  /** Indicates whether the author of this review has push access to the repository. */
  authorCanPushToRepository: boolean;
  /** Identifies the pull request review body. */
  body: string;
  /** The body rendered to HTML. */
  bodyHTML: HTML;
  /** The body of this review rendered as plain text. */
  bodyText: string;
  /** A list of review comments for the current pull request review. */
  comments(
    root: ParentType<PullRequestReview>,
    args: PullRequestReviewCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestReviewCommentConnection>;
  /** Identifies the commit associated with this pull request review. */
  commit?: Commit;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Check if this comment was created via an email reply. */
  createdViaEmail: boolean;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The actor who edited the comment. */
  editor?: Actor;
  id: ID;
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: boolean;
  /** The moment the editor made the last edit */
  lastEditedAt?: DateTime;
  /** A list of teams that this review was made on behalf of. */
  onBehalfOf(
    root: ParentType<PullRequestReview>,
    args: PullRequestReviewOnBehalfOfInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<TeamConnection>;
  /** Identifies when the comment was published at. */
  publishedAt?: DateTime;
  /** Identifies the pull request associated with this pull request review. */
  pullRequest: PullRequest;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: ReactionGroup[];
  /** A list of Reactions left on the Issue. */
  reactions(
    root: ParentType<PullRequestReview>,
    args: PullRequestReviewReactionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactionConnection>;
  /** The repository associated with this node. */
  repository: Repository;
  /** The HTTP path permalink for this PullRequestReview. */
  resourcePath: URI;
  /** Identifies the current state of the pull request review. */
  state: PullRequestReviewState;
  /** Identifies when the Pull Request Review was submitted */
  submittedAt?: DateTime;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL permalink for this PullRequestReview. */
  url: URI;
  /** A list of edits to this content. */
  userContentEdits?(
    root: ParentType<PullRequestReview>,
    args: PullRequestReviewUserContentEditsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UserContentEditConnection>>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: boolean;
  /** Can user react to this subject */
  viewerCanReact: boolean;
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: CommentCannotUpdateReason[];
  /** Did the viewer author this comment. */
  viewerDidAuthor: boolean;
}

/** Argument input type for PullRequestReviewCommentReactionsInput. */
export interface PullRequestReviewCommentReactionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Allows filtering Reactions by emoji. */
  content?: ReactionContent;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows specifying the order in which reactions are returned. */
  orderBy?: ReactionOrder;
}

/** Argument input type for PullRequestReviewCommentUserContentEditsInput. */
export interface PullRequestReviewCommentUserContentEditsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A review comment associated with a given repository pull request. */
export interface PullRequestReviewComment {
  /** The actor who authored the comment. */
  author?: Actor;
  /** Author's association with the subject of the comment. */
  authorAssociation: CommentAuthorAssociation;
  /** The comment body of this review comment. */
  body: string;
  /** The body rendered to HTML. */
  bodyHTML: HTML;
  /** The comment body of this review comment rendered as plain text. */
  bodyText: string;
  /** Identifies the commit associated with the comment. */
  commit?: Commit;
  /** Identifies when the comment was created. */
  createdAt: DateTime;
  /** Check if this comment was created via an email reply. */
  createdViaEmail: boolean;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The diff hunk to which the comment applies. */
  diffHunk: string;
  /** Identifies when the comment was created in a draft state. */
  draftedAt: DateTime;
  /** The actor who edited the comment. */
  editor?: Actor;
  id: ID;
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: boolean;
  /** Returns whether or not a comment has been minimized. */
  isMinimized: boolean;
  /** The moment the editor made the last edit */
  lastEditedAt?: DateTime;
  /** Returns why the comment was minimized. */
  minimizedReason?: string;
  /** Identifies the original commit associated with the comment. */
  originalCommit?: Commit;
  /** The original line index in the diff to which the comment applies. */
  originalPosition: number;
  /** Identifies when the comment body is outdated */
  outdated: boolean;
  /** The path to which the comment applies. */
  path: string;
  /** The line index in the diff to which the comment applies. */
  position?: number;
  /** Identifies when the comment was published at. */
  publishedAt?: DateTime;
  /** The pull request associated with this review comment. */
  pullRequest: PullRequest;
  /** The pull request review associated with this review comment. */
  pullRequestReview?: PullRequestReview;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: ReactionGroup[];
  /** A list of Reactions left on the Issue. */
  reactions(
    root: ParentType<PullRequestReviewComment>,
    args: PullRequestReviewCommentReactionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactionConnection>;
  /** The comment this is a reply to. */
  replyTo?: PullRequestReviewComment;
  /** The repository associated with this node. */
  repository: Repository;
  /** The HTTP path permalink for this review comment. */
  resourcePath: URI;
  /** Identifies the state of the comment. */
  state: PullRequestReviewCommentState;
  /** Identifies when the comment was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL permalink for this review comment. */
  url: URI;
  /** A list of edits to this content. */
  userContentEdits?(
    root: ParentType<PullRequestReviewComment>,
    args: PullRequestReviewCommentUserContentEditsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UserContentEditConnection>>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: boolean;
  /** Check if the current viewer can minimize this object. */
  viewerCanMinimize: boolean;
  /** Can user react to this subject */
  viewerCanReact: boolean;
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: CommentCannotUpdateReason[];
  /** Did the viewer author this comment. */
  viewerDidAuthor: boolean;
}

/** The connection type for PullRequestReviewComment. */
export interface PullRequestReviewCommentConnection {
  /** A list of edges. */
  edges?: Maybe<PullRequestReviewCommentEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PullRequestReviewComment>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PullRequestReviewCommentEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PullRequestReviewComment;
}

/** The connection type for PullRequestReview. */
export interface PullRequestReviewConnection {
  /** A list of edges. */
  edges?: Maybe<PullRequestReviewEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PullRequestReview>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Argument input type for PullRequestReviewContributionsByRepositoryContributionsInput. */
export interface PullRequestReviewContributionsByRepositoryContributionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for contributions returned from the connection. */
  orderBy?: ContributionOrder;
}

/** This aggregates pull request reviews made by a user within one repository. */
export interface PullRequestReviewContributionsByRepository {
  /** The pull request review contributions. */
  contributions(
    root: ParentType<PullRequestReviewContributionsByRepository>,
    args: PullRequestReviewContributionsByRepositoryContributionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CreatedPullRequestReviewContributionConnection>;
  /** The repository in which the pull request reviews were made. */
  repository: Repository;
}

/** An edge in a connection. */
export interface PullRequestReviewEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PullRequestReview;
}

/** Argument input type for PullRequestReviewThreadCommentsInput. */
export interface PullRequestReviewThreadCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Skips the first _n_ elements in the list. */
  skip?: number;
}

/** A threaded list of comments for a given pull request. */
export interface PullRequestReviewThread {
  /** A list of pull request comments associated with the thread. */
  comments(
    root: ParentType<PullRequestReviewThread>,
    args: PullRequestReviewThreadCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestReviewCommentConnection>;
  /** The side of the diff on which this thread was placed. */
  diffSide: DiffSide;
  id: ID;
  /** Whether or not the thread has been collapsed (outdated or resolved) */
  isCollapsed: boolean;
  /** Indicates whether this thread was outdated by newer changes. */
  isOutdated: boolean;
  /** Whether this thread has been resolved */
  isResolved: boolean;
  /** The line in the file to which this thread refers */
  line?: number;
  /** The original line in the file to which this thread refers. */
  originalLine?: number;
  /** The original start line in the file to which this thread refers (multi-line only). */
  originalStartLine?: number;
  /** Identifies the file path of this thread. */
  path: string;
  /** Identifies the pull request associated with this thread. */
  pullRequest: PullRequest;
  /** Identifies the repository associated with this thread. */
  repository: Repository;
  /** The user who resolved this thread */
  resolvedBy?: User;
  /** The side of the diff that the first line of the thread starts on (multi-line only) */
  startDiffSide?: DiffSide;
  /** The start line in the file to which this thread refers (multi-line only) */
  startLine?: number;
  /** Indicates whether the current viewer can reply to this thread. */
  viewerCanReply: boolean;
  /** Whether or not the viewer can resolve this thread */
  viewerCanResolve: boolean;
  /** Whether or not the viewer can unresolve this thread */
  viewerCanUnresolve: boolean;
}

/** Review comment threads for a pull request review. */
export interface PullRequestReviewThreadConnection {
  /** A list of edges. */
  edges?: Maybe<PullRequestReviewThreadEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PullRequestReviewThread>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PullRequestReviewThreadEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PullRequestReviewThread;
}

/** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
export interface PullRequestRevisionMarker {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The last commit the viewer has seen. */
  lastSeenCommit: Commit;
  /** The pull request to which the marker belongs. */
  pullRequest: PullRequest;
}

/** A repository pull request template. */
export interface PullRequestTemplate {
  /** The body of the template */
  body?: string;
  /** The filename of the template */
  filename?: string;
  /** The repository the template belongs to */
  repository: Repository;
}

/** The connection type for PullRequestTimelineItem. */
export interface PullRequestTimelineConnection {
  /** A list of edges. */
  edges?: Maybe<PullRequestTimelineItemEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PullRequestTimelineItem>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PullRequestTimelineItemEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PullRequestTimelineItem;
}

/** The connection type for PullRequestTimelineItems. */
export interface PullRequestTimelineItemsConnection {
  /** A list of edges. */
  edges?: Maybe<PullRequestTimelineItemsEdge>[];
  /** Identifies the count of items after applying `before` and `after` filters. */
  filteredCount: number;
  /** A list of nodes. */
  nodes?: Maybe<PullRequestTimelineItems>[];
  /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
  pageCount: number;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
  /** Identifies the date and time when the timeline was last updated. */
  updatedAt: DateTime;
}

/** An edge in a connection. */
export interface PullRequestTimelineItemsEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PullRequestTimelineItems;
}

/** A Git push. */
export interface Push {
  id: ID;
  /** The SHA after the push */
  nextSha?: GitObjectID;
  /** The permalink for this push. */
  permalink: URI;
  /** The SHA before the push */
  previousSha?: GitObjectID;
  /** The user who pushed */
  pusher: User;
  /** The repository that was pushed to */
  repository: Repository;
}

/** A team, user or app who has the ability to push to a protected branch. */
export interface PushAllowance {
  /** The actor that can push. */
  actor?: PushAllowanceActor;
  /** Identifies the branch protection rule associated with the allowed user or team. */
  branchProtectionRule?: BranchProtectionRule;
  id: ID;
}

/** The connection type for PushAllowance. */
export interface PushAllowanceConnection {
  /** A list of edges. */
  edges?: Maybe<PushAllowanceEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<PushAllowance>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface PushAllowanceEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: PushAllowance;
}

/** Represents the client's rate limit. */
export interface RateLimit {
  /** The point cost for the current query counting against the rate limit. */
  cost: number;
  /** The maximum number of points the client is permitted to consume in a 60 minute window. */
  limit: number;
  /** The maximum number of nodes this query may return */
  nodeCount: number;
  /** The number of points remaining in the current rate limit window. */
  remaining: number;
  /** The time at which the current rate limit window resets in UTC epoch seconds. */
  resetAt: DateTime;
  /** The number of points used in the current rate limit window. */
  used: number;
}

/** The connection type for User. */
export interface ReactingUserConnection {
  /** A list of edges. */
  edges?: Maybe<ReactingUserEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<User>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Represents a user that's made a reaction. */
export interface ReactingUserEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  node: User;
  /** The moment when the user made the reaction. */
  reactedAt: DateTime;
}

/** An emoji reaction to a particular piece of content. */
export interface Reaction {
  /** Identifies the emoji reaction. */
  content: ReactionContent;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** The reactable piece of content */
  reactable: Reactable;
  /** Identifies the user who created this reaction. */
  user?: User;
}

/** A list of reactions that have been left on the subject. */
export interface ReactionConnection {
  /** A list of edges. */
  edges?: Maybe<ReactionEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Reaction>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
  /** Whether or not the authenticated user has left a reaction on the subject. */
  viewerHasReacted: boolean;
}

/** An edge in a connection. */
export interface ReactionEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Reaction;
}

/** Argument input type for ReactionGroupReactorsInput. */
export interface ReactionGroupReactorsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for ReactionGroupUsersInput. */
export interface ReactionGroupUsersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A group of emoji reactions to a particular piece of content. */
export interface ReactionGroup {
  /** Identifies the emoji reaction. */
  content: ReactionContent;
  /** Identifies when the reaction was created. */
  createdAt?: DateTime;
  /** Reactors to the reaction subject with the emotion represented by this reaction group. */
  reactors(
    root: ParentType<ReactionGroup>,
    args: ReactionGroupReactorsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactorConnection>;
  /** The subject that was reacted to. */
  subject: Reactable;
  /** Users who have reacted to the reaction subject with the emotion represented by this reaction group */
  users(
    root: ParentType<ReactionGroup>,
    args: ReactionGroupUsersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactingUserConnection>;
  /** Whether or not the authenticated user has left a reaction on the subject. */
  viewerHasReacted: boolean;
}

/** The connection type for Reactor. */
export interface ReactorConnection {
  /** A list of edges. */
  edges?: Maybe<ReactorEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Reactor>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Represents an author of a reaction. */
export interface ReactorEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The author of the reaction. */
  node: Reactor;
  /** The moment when the user made the reaction. */
  reactedAt: DateTime;
}

/** Represents a 'ready_for_review' event on a given pull request. */
export interface ReadyForReviewEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
  /** The HTTP path for this ready for review event. */
  resourcePath: URI;
  /** The HTTP URL for this ready for review event. */
  url: URI;
}

/** Argument input type for RefAssociatedPullRequestsInput. */
export interface RefAssociatedPullRequestsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** The base ref name to filter the pull requests by. */
  baseRefName?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** The head ref name to filter the pull requests by. */
  headRefName?: string;
  /** A list of label names to filter the pull requests by. */
  labels?: string[];
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for pull requests returned from the connection. */
  orderBy?: IssueOrder;
  /** A list of states to filter the pull requests by. */
  states?: PullRequestState[];
}

/** Represents a Git reference. */
export interface Ref {
  /** A list of pull requests with this ref as the head ref. */
  associatedPullRequests(
    root: ParentType<Ref>,
    args: RefAssociatedPullRequestsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestConnection>;
  /** Branch protection rules for this ref */
  branchProtectionRule?: BranchProtectionRule;
  id: ID;
  /** The ref name. */
  name: string;
  /** The ref's prefix, such as `refs/heads/` or `refs/tags/`. */
  prefix: string;
  /** Branch protection rules that are viewable by non-admins */
  refUpdateRule?: RefUpdateRule;
  /** The repository the ref belongs to. */
  repository: Repository;
  /** The object the ref points to. Returns null when object does not exist. */
  target?: GitObject;
}

/** The connection type for Ref. */
export interface RefConnection {
  /** A list of edges. */
  edges?: Maybe<RefEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Ref>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface RefEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Ref;
}

/** A ref update rules for a viewer. */
export interface RefUpdateRule {
  /** Can this branch be deleted. */
  allowsDeletions: boolean;
  /** Are force pushes allowed on this branch. */
  allowsForcePushes: boolean;
  /** Identifies the protection rule pattern. */
  pattern: string;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: number;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<string>[];
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews: boolean;
  /** Are conversations required to be resolved before merging. */
  requiresConversationResolution: boolean;
  /** Are merge commits prohibited from being pushed to this branch. */
  requiresLinearHistory: boolean;
  /** Are commits required to be signed. */
  requiresSignatures: boolean;
  /** Is the viewer allowed to dismiss reviews. */
  viewerAllowedToDismissReviews: boolean;
  /** Can the viewer push to the branch */
  viewerCanPush: boolean;
}

/** Represents a 'referenced' event on a given `ReferencedSubject`. */
export interface ReferencedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the commit associated with the 'referenced' event. */
  commit?: Commit;
  /** Identifies the repository associated with the 'referenced' event. */
  commitRepository: Repository;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Reference originated in a different repository. */
  isCrossRepository: boolean;
  /** Checks if the commit message itself references the subject. Can be false in the case of a commit comment reference. */
  isDirectReference: boolean;
  /** Object referenced by event. */
  subject: ReferencedSubject;
}

/** Autogenerated return type of RegenerateEnterpriseIdentityProviderRecoveryCodes */
export interface RegenerateEnterpriseIdentityProviderRecoveryCodesPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The identity provider for the enterprise. */
  identityProvider?: EnterpriseIdentityProvider;
}

/** Autogenerated return type of RegenerateVerifiableDomainToken */
export interface RegenerateVerifiableDomainTokenPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The verification token that was generated. */
  verificationToken?: string;
}

/** Autogenerated return type of RejectDeployments */
export interface RejectDeploymentsPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The affected deployments. */
  deployments?: Deployment[];
}

/** Argument input type for ReleaseReactionsInput. */
export interface ReleaseReactionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Allows filtering Reactions by emoji. */
  content?: ReactionContent;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows specifying the order in which reactions are returned. */
  orderBy?: ReactionOrder;
}

/** Argument input type for ReleaseReleaseAssetsInput. */
export interface ReleaseReleaseAssetsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** A list of names to filter the assets by. */
  name?: string;
}

/** Argument input type for ReleaseShortDescriptionHTMLInput. */
export interface ReleaseShortDescriptionHTMLInput {
  /** How many characters to return. */
  limit?: number;
}

/** A release contains the content for a release. */
export interface Release {
  /** The author of the release */
  author?: User;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The description of the release. */
  description?: string;
  /** The description of this release rendered to HTML. */
  descriptionHTML?: HTML;
  id: ID;
  /** Whether or not the release is a draft */
  isDraft: boolean;
  /** Whether or not the release is the latest releast */
  isLatest: boolean;
  /** Whether or not the release is a prerelease */
  isPrerelease: boolean;
  /** The title of the release. */
  name?: string;
  /** Identifies the date and time when the release was created. */
  publishedAt?: DateTime;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: ReactionGroup[];
  /** A list of Reactions left on the Issue. */
  reactions(
    root: ParentType<Release>,
    args: ReleaseReactionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactionConnection>;
  /** List of releases assets which are dependent on this release. */
  releaseAssets(
    root: ParentType<Release>,
    args: ReleaseReleaseAssetsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReleaseAssetConnection>;
  /** The repository that the release belongs to. */
  repository: Repository;
  /** The HTTP path for this issue */
  resourcePath: URI;
  /** A description of the release, rendered to HTML without any links in it. */
  shortDescriptionHTML?(
    root: ParentType<Release>,
    args: ReleaseShortDescriptionHTMLInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<HTML>>;
  /** The Git tag the release points to */
  tag?: Ref;
  /** The tag commit for this release. */
  tagCommit?: Commit;
  /** The name of the release's Git tag */
  tagName: string;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this issue */
  url: URI;
  /** Can user react to this subject */
  viewerCanReact: boolean;
}

/** A release asset contains the content for a release asset. */
export interface ReleaseAsset {
  /** The asset's content-type */
  contentType: string;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The number of times this asset was downloaded */
  downloadCount: number;
  /** Identifies the URL where you can download the release asset via the browser. */
  downloadUrl: URI;
  id: ID;
  /** Identifies the title of the release asset. */
  name: string;
  /** Release that the asset is associated with */
  release?: Release;
  /** The size (in bytes) of the asset */
  size: number;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The user that performed the upload */
  uploadedBy: User;
  /** Identifies the URL of the release asset. */
  url: URI;
}

/** The connection type for ReleaseAsset. */
export interface ReleaseAssetConnection {
  /** A list of edges. */
  edges?: Maybe<ReleaseAssetEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<ReleaseAsset>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface ReleaseAssetEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: ReleaseAsset;
}

/** The connection type for Release. */
export interface ReleaseConnection {
  /** A list of edges. */
  edges?: Maybe<ReleaseEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Release>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface ReleaseEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Release;
}

/** Autogenerated return type of RemoveAssigneesFromAssignable */
export interface RemoveAssigneesFromAssignablePayload {
  /** The item that was unassigned. */
  assignable?: Assignable;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of RemoveEnterpriseAdmin */
export interface RemoveEnterpriseAdminPayload {
  /** The user who was removed as an administrator. */
  admin?: User;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated enterprise. */
  enterprise?: Enterprise;
  /** A message confirming the result of removing an administrator. */
  message?: string;
  /** The viewer performing the mutation. */
  viewer?: User;
}

/** Autogenerated return type of RemoveEnterpriseIdentityProvider */
export interface RemoveEnterpriseIdentityProviderPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The identity provider that was removed from the enterprise. */
  identityProvider?: EnterpriseIdentityProvider;
}

/** Autogenerated return type of RemoveEnterpriseOrganization */
export interface RemoveEnterpriseOrganizationPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated enterprise. */
  enterprise?: Enterprise;
  /** The organization that was removed from the enterprise. */
  organization?: Organization;
  /** The viewer performing the mutation. */
  viewer?: User;
}

/** Autogenerated return type of RemoveEnterpriseSupportEntitlement */
export interface RemoveEnterpriseSupportEntitlementPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** A message confirming the result of removing the support entitlement. */
  message?: string;
}

/** Autogenerated return type of RemoveLabelsFromLabelable */
export interface RemoveLabelsFromLabelablePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The Labelable the labels were removed from. */
  labelable?: Labelable;
}

/** Autogenerated return type of RemoveOutsideCollaborator */
export interface RemoveOutsideCollaboratorPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The user that was removed as an outside collaborator. */
  removedUser?: User;
}

/** Autogenerated return type of RemoveReaction */
export interface RemoveReactionPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The reaction object. */
  reaction?: Reaction;
  /** The reactable subject. */
  subject?: Reactable;
}

/** Autogenerated return type of RemoveStar */
export interface RemoveStarPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The starrable. */
  starrable?: Starrable;
}

/** Autogenerated return type of RemoveUpvote */
export interface RemoveUpvotePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The votable subject. */
  subject?: Votable;
}

/** Represents a 'removed_from_project' event on a given issue or pull request. */
export interface RemovedFromProjectEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** Project referenced by event. */
  project?: Project;
  /** Column name referenced by this project event. */
  projectColumnName: string;
}

/** Represents a 'renamed' event on a given issue or pull request */
export interface RenamedTitleEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the current title of the issue or pull request. */
  currentTitle: string;
  id: ID;
  /** Identifies the previous title of the issue or pull request. */
  previousTitle: string;
  /** Subject that was renamed. */
  subject: RenamedTitleSubject;
}

/** Autogenerated return type of ReopenIssue */
export interface ReopenIssuePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The issue that was opened. */
  issue?: Issue;
}

/** Autogenerated return type of ReopenPullRequest */
export interface ReopenPullRequestPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The pull request that was reopened. */
  pullRequest?: PullRequest;
}

/** Represents a 'reopened' event on any `Closable`. */
export interface ReopenedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Object that was reopened. */
  closable: Closable;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
}

/** Audit log entry for a repo.access event. */
export interface RepoAccessAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
  /** The visibility of the repository */
  visibility?: RepoAccessAuditEntryVisibility;
}

/** Audit log entry for a repo.add_member event. */
export interface RepoAddMemberAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
  /** The visibility of the repository */
  visibility?: RepoAddMemberAuditEntryVisibility;
}

/** Audit log entry for a repo.add_topic event. */
export interface RepoAddTopicAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The name of the topic added to the repository */
  topic?: Topic;
  /** The name of the topic added to the repository */
  topicName?: string;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repo.archived event. */
export interface RepoArchivedAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
  /** The visibility of the repository */
  visibility?: RepoArchivedAuditEntryVisibility;
}

/** Audit log entry for a repo.change_merge_setting event. */
export interface RepoChangeMergeSettingAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** Whether the change was to enable (true) or disable (false) the merge type */
  isEnabled?: boolean;
  /** The merge method affected by the change */
  mergeType?: RepoChangeMergeSettingAuditEntryMergeType;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repo.config.disable_anonymous_git_access event. */
export interface RepoConfigDisableAnonymousGitAccessAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repo.config.disable_collaborators_only event. */
export interface RepoConfigDisableCollaboratorsOnlyAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repo.config.disable_contributors_only event. */
export interface RepoConfigDisableContributorsOnlyAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repo.config.disable_sockpuppet_disallowed event. */
export interface RepoConfigDisableSockpuppetDisallowedAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repo.config.enable_anonymous_git_access event. */
export interface RepoConfigEnableAnonymousGitAccessAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repo.config.enable_collaborators_only event. */
export interface RepoConfigEnableCollaboratorsOnlyAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repo.config.enable_contributors_only event. */
export interface RepoConfigEnableContributorsOnlyAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repo.config.enable_sockpuppet_disallowed event. */
export interface RepoConfigEnableSockpuppetDisallowedAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repo.config.lock_anonymous_git_access event. */
export interface RepoConfigLockAnonymousGitAccessAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repo.config.unlock_anonymous_git_access event. */
export interface RepoConfigUnlockAnonymousGitAccessAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repo.create event. */
export interface RepoCreateAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The name of the parent repository for this forked repository. */
  forkParentName?: string;
  /** The name of the root repository for this network. */
  forkSourceName?: string;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
  /** The visibility of the repository */
  visibility?: RepoCreateAuditEntryVisibility;
}

/** Audit log entry for a repo.destroy event. */
export interface RepoDestroyAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
  /** The visibility of the repository */
  visibility?: RepoDestroyAuditEntryVisibility;
}

/** Audit log entry for a repo.remove_member event. */
export interface RepoRemoveMemberAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
  /** The visibility of the repository */
  visibility?: RepoRemoveMemberAuditEntryVisibility;
}

/** Audit log entry for a repo.remove_topic event. */
export interface RepoRemoveTopicAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The name of the topic added to the repository */
  topic?: Topic;
  /** The name of the topic added to the repository */
  topicName?: string;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Argument input type for RepositoryAssignableUsersInput. */
export interface RepositoryAssignableUsersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filters users with query on user name and login */
  query?: string;
}

/** Argument input type for RepositoryBranchProtectionRulesInput. */
export interface RepositoryBranchProtectionRulesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for RepositoryCollaboratorsInput. */
export interface RepositoryCollaboratorsInput {
  /** Collaborators affiliation level with a repository. */
  affiliation?: CollaboratorAffiliation;
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filters users with query on user name and login */
  query?: string;
}

/** Argument input type for RepositoryCommitCommentsInput. */
export interface RepositoryCommitCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for RepositoryDependencyGraphManifestsInput. */
export interface RepositoryDependencyGraphManifestsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Cursor to paginate dependencies */
  dependenciesAfter?: string;
  /** Number of dependencies to fetch */
  dependenciesFirst?: number;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Flag to scope to only manifests with dependencies */
  withDependencies?: boolean;
}

/** Argument input type for RepositoryDeployKeysInput. */
export interface RepositoryDeployKeysInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for RepositoryDeploymentsInput. */
export interface RepositoryDeploymentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Environments to list deployments for */
  environments?: string[];
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for deployments returned from the connection. */
  orderBy?: DeploymentOrder;
}

/** Argument input type for RepositoryDiscussionInput. */
export interface RepositoryDiscussionInput {
  /** The number for the discussion to be returned. */
  number: number;
}

/** Argument input type for RepositoryDiscussionCategoriesInput. */
export interface RepositoryDiscussionCategoriesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for RepositoryDiscussionsInput. */
export interface RepositoryDiscussionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Only include discussions that belong to the category with this ID. */
  categoryId?: ID;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for discussions returned from the connection. */
  orderBy?: DiscussionOrder;
}

/** Argument input type for RepositoryEnvironmentInput. */
export interface RepositoryEnvironmentInput {
  /** The name of the environment to be returned. */
  name: string;
}

/** Argument input type for RepositoryEnvironmentsInput. */
export interface RepositoryEnvironmentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for RepositoryForksInput. */
export interface RepositoryForksInput {
  /** Array of viewer's affiliation options for repositories returned from the
    connection. For example, OWNER will include only repositories that the
    current viewer owns. */
  affiliations?: Maybe<RepositoryAffiliation>[];
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** If non-null, filters repositories according to whether they have been locked */
  isLocked?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for repositories returned from the connection */
  orderBy?: RepositoryOrder;
  /** Array of owner's affiliation options for repositories returned from the
    connection. For example, OWNER will include only repositories that the
    organization or user being viewed owns. */
  ownerAffiliations?: Maybe<RepositoryAffiliation>[];
  /** If non-null, filters repositories according to privacy */
  privacy?: RepositoryPrivacy;
}

/** Argument input type for RepositoryIssueInput. */
export interface RepositoryIssueInput {
  /** The number for the issue to be returned. */
  number: number;
}

/** Argument input type for RepositoryIssueOrPullRequestInput. */
export interface RepositoryIssueOrPullRequestInput {
  /** The number for the issue to be returned. */
  number: number;
}

/** Argument input type for RepositoryIssuesInput. */
export interface RepositoryIssuesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Filtering options for issues returned from the connection. */
  filterBy?: IssueFilters;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** A list of label names to filter the pull requests by. */
  labels?: string[];
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for issues returned from the connection. */
  orderBy?: IssueOrder;
  /** A list of states to filter the issues by. */
  states?: IssueState[];
}

/** Argument input type for RepositoryLabelInput. */
export interface RepositoryLabelInput {
  /** Label name */
  name: string;
}

/** Argument input type for RepositoryLabelsInput. */
export interface RepositoryLabelsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for labels returned from the connection. */
  orderBy?: LabelOrder;
  /** If provided, searches labels by name and description. */
  query?: string;
}

/** Argument input type for RepositoryLanguagesInput. */
export interface RepositoryLanguagesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Order for connection */
  orderBy?: LanguageOrder;
}

/** Argument input type for RepositoryMentionableUsersInput. */
export interface RepositoryMentionableUsersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filters users with query on user name and login */
  query?: string;
}

/** Argument input type for RepositoryMilestoneInput. */
export interface RepositoryMilestoneInput {
  /** The number for the milestone to be returned. */
  number: number;
}

/** Argument input type for RepositoryMilestonesInput. */
export interface RepositoryMilestonesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for milestones. */
  orderBy?: MilestoneOrder;
  /** Filters milestones with a query on the title */
  query?: string;
  /** Filter by the state of the milestones. */
  states?: MilestoneState[];
}

/** Argument input type for RepositoryObjectInput. */
export interface RepositoryObjectInput {
  /** A Git revision expression suitable for rev-parse */
  expression?: string;
  /** The Git object ID */
  oid?: GitObjectID;
}

/** Argument input type for RepositoryPackagesInput. */
export interface RepositoryPackagesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Find packages by their names. */
  names?: Maybe<string>[];
  /** Ordering of the returned packages. */
  orderBy?: PackageOrder;
  /** Filter registry package by type. */
  packageType?: PackageType;
  /** Find packages in a repository by ID. */
  repositoryId?: ID;
}

/** Argument input type for RepositoryPinnedDiscussionsInput. */
export interface RepositoryPinnedDiscussionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for RepositoryPinnedIssuesInput. */
export interface RepositoryPinnedIssuesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for RepositoryProjectInput. */
export interface RepositoryProjectInput {
  /** The project number to find. */
  number: number;
}

/** Argument input type for RepositoryProjectsInput. */
export interface RepositoryProjectsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for projects returned from the connection */
  orderBy?: ProjectOrder;
  /** Query to search projects by, currently only searching by name. */
  search?: string;
  /** A list of states to filter the projects by. */
  states?: ProjectState[];
}

/** Argument input type for RepositoryPullRequestInput. */
export interface RepositoryPullRequestInput {
  /** The number for the pull request to be returned. */
  number: number;
}

/** Argument input type for RepositoryPullRequestsInput. */
export interface RepositoryPullRequestsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** The base ref name to filter the pull requests by. */
  baseRefName?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** The head ref name to filter the pull requests by. */
  headRefName?: string;
  /** A list of label names to filter the pull requests by. */
  labels?: string[];
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for pull requests returned from the connection. */
  orderBy?: IssueOrder;
  /** A list of states to filter the pull requests by. */
  states?: PullRequestState[];
}

/** Argument input type for RepositoryRefInput. */
export interface RepositoryRefInput {
  /** The ref to retrieve. Fully qualified matches are checked in order
    (`refs/heads/master`) before falling back onto checks for short name matches (`master`). */
  qualifiedName: string;
}

/** Argument input type for RepositoryRefsInput. */
export interface RepositoryRefsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** DEPRECATED: use orderBy. The ordering direction. */
  direction?: OrderDirection;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for refs returned from the connection. */
  orderBy?: RefOrder;
  /** Filters refs with query on name */
  query?: string;
  /** A ref name prefix like `refs/heads/`, `refs/tags/`, etc. */
  refPrefix: string;
}

/** Argument input type for RepositoryReleaseInput. */
export interface RepositoryReleaseInput {
  /** The name of the Tag the Release was created from */
  tagName: string;
}

/** Argument input type for RepositoryReleasesInput. */
export interface RepositoryReleasesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Order for connection */
  orderBy?: ReleaseOrder;
}

/** Argument input type for RepositoryRepositoryTopicsInput. */
export interface RepositoryRepositoryTopicsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for RepositoryShortDescriptionHTMLInput. */
export interface RepositoryShortDescriptionHTMLInput {
  /** How many characters to return. */
  limit?: number;
}

/** Argument input type for RepositoryStargazersInput. */
export interface RepositoryStargazersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Order for connection */
  orderBy?: StarOrder;
}

/** Argument input type for RepositorySubmodulesInput. */
export interface RepositorySubmodulesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for RepositoryVulnerabilityAlertsInput. */
export interface RepositoryVulnerabilityAlertsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for RepositoryWatchersInput. */
export interface RepositoryWatchersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A repository contains the content for a project. */
export interface Repository {
  /** A list of users that can be assigned to issues in this repository. */
  assignableUsers(
    root: ParentType<Repository>,
    args: RepositoryAssignableUsersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserConnection>;
  /** A list of branch protection rules for this repository. */
  branchProtectionRules(
    root: ParentType<Repository>,
    args: RepositoryBranchProtectionRulesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<BranchProtectionRuleConnection>;
  /** Returns the code of conduct for this repository */
  codeOfConduct?: CodeOfConduct;
  /** A list of collaborators associated with the repository. */
  collaborators?(
    root: ParentType<Repository>,
    args: RepositoryCollaboratorsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RepositoryCollaboratorConnection>>;
  /** A list of commit comments associated with the repository. */
  commitComments(
    root: ParentType<Repository>,
    args: RepositoryCommitCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CommitCommentConnection>;
  /** Returns a list of contact links associated to the repository */
  contactLinks?: RepositoryContactLink[];
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The Ref associated with the repository's default branch. */
  defaultBranchRef?: Ref;
  /** Whether or not branches are automatically deleted when merged in this repository. */
  deleteBranchOnMerge: boolean;
  /** A list of dependency manifests contained in the repository */
  dependencyGraphManifests?(
    root: ParentType<Repository>,
    args: RepositoryDependencyGraphManifestsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DependencyGraphManifestConnection>>;
  /** A list of deploy keys that are on this repository. */
  deployKeys(
    root: ParentType<Repository>,
    args: RepositoryDeployKeysInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DeployKeyConnection>;
  /** Deployments associated with the repository */
  deployments(
    root: ParentType<Repository>,
    args: RepositoryDeploymentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DeploymentConnection>;
  /** The description of the repository. */
  description?: string;
  /** The description of the repository rendered to HTML. */
  descriptionHTML: HTML;
  /** Returns a single discussion from the current repository by number. */
  discussion?(
    root: ParentType<Repository>,
    args: RepositoryDiscussionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Discussion>>;
  /** A list of discussion categories that are available in the repository. */
  discussionCategories(
    root: ParentType<Repository>,
    args: RepositoryDiscussionCategoriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DiscussionCategoryConnection>;
  /** A list of discussions that have been opened in the repository. */
  discussions(
    root: ParentType<Repository>,
    args: RepositoryDiscussionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DiscussionConnection>;
  /** The number of kilobytes this repository occupies on disk. */
  diskUsage?: number;
  /** Returns a single active environment from the current repository by name. */
  environment?(
    root: ParentType<Repository>,
    args: RepositoryEnvironmentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Environment>>;
  /** A list of environments that are in this repository. */
  environments(
    root: ParentType<Repository>,
    args: RepositoryEnvironmentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<EnvironmentConnection>;
  /** Returns how many forks there are of this repository in the whole network. */
  forkCount: number;
  /** A list of direct forked repositories. */
  forks(
    root: ParentType<Repository>,
    args: RepositoryForksInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<RepositoryConnection>;
  /** The funding links for this repository */
  fundingLinks: FundingLink[];
  /** Indicates if the repository has issues feature enabled. */
  hasIssuesEnabled: boolean;
  /** Indicates if the repository has the Projects feature enabled. */
  hasProjectsEnabled: boolean;
  /** Indicates if the repository has wiki feature enabled. */
  hasWikiEnabled: boolean;
  /** The repository's URL. */
  homepageUrl?: URI;
  id: ID;
  /** The interaction ability settings for this repository. */
  interactionAbility?: RepositoryInteractionAbility;
  /** Indicates if the repository is unmaintained. */
  isArchived: boolean;
  /** Returns true if blank issue creation is allowed */
  isBlankIssuesEnabled: boolean;
  /** Returns whether or not this repository disabled. */
  isDisabled: boolean;
  /** Returns whether or not this repository is empty. */
  isEmpty: boolean;
  /** Identifies if the repository is a fork. */
  isFork: boolean;
  /** Indicates if a repository is either owned by an organization, or is a private fork of an organization repository. */
  isInOrganization: boolean;
  /** Indicates if the repository has been locked or not. */
  isLocked: boolean;
  /** Identifies if the repository is a mirror. */
  isMirror: boolean;
  /** Identifies if the repository is private or internal. */
  isPrivate: boolean;
  /** Returns true if this repository has a security policy */
  isSecurityPolicyEnabled?: boolean;
  /** Identifies if the repository is a template that can be used to generate new repositories. */
  isTemplate: boolean;
  /** Is this repository a user configuration repository? */
  isUserConfigurationRepository: boolean;
  /** Returns a single issue from the current repository by number. */
  issue?(
    root: ParentType<Repository>,
    args: RepositoryIssueInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Issue>>;
  /** Returns a single issue-like object from the current repository by number. */
  issueOrPullRequest?(
    root: ParentType<Repository>,
    args: RepositoryIssueOrPullRequestInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<IssueOrPullRequest>>;
  /** Returns a list of issue templates associated to the repository */
  issueTemplates?: IssueTemplate[];
  /** A list of issues that have been opened in the repository. */
  issues(
    root: ParentType<Repository>,
    args: RepositoryIssuesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IssueConnection>;
  /** Returns a single label by name */
  label?(
    root: ParentType<Repository>,
    args: RepositoryLabelInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Label>>;
  /** A list of labels associated with the repository. */
  labels?(
    root: ParentType<Repository>,
    args: RepositoryLabelsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<LabelConnection>>;
  /** A list containing a breakdown of the language composition of the repository. */
  languages?(
    root: ParentType<Repository>,
    args: RepositoryLanguagesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<LanguageConnection>>;
  /** Get the latest release for the repository if one exists. */
  latestRelease?: Release;
  /** The license associated with the repository */
  licenseInfo?: License;
  /** The reason the repository has been locked. */
  lockReason?: RepositoryLockReason;
  /** A list of Users that can be mentioned in the context of the repository. */
  mentionableUsers(
    root: ParentType<Repository>,
    args: RepositoryMentionableUsersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserConnection>;
  /** Whether or not PRs are merged with a merge commit on this repository. */
  mergeCommitAllowed: boolean;
  /** Returns a single milestone from the current repository by number. */
  milestone?(
    root: ParentType<Repository>,
    args: RepositoryMilestoneInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Milestone>>;
  /** A list of milestones associated with the repository. */
  milestones?(
    root: ParentType<Repository>,
    args: RepositoryMilestonesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<MilestoneConnection>>;
  /** The repository's original mirror URL. */
  mirrorUrl?: URI;
  /** The name of the repository. */
  name: string;
  /** The repository's name with owner. */
  nameWithOwner: string;
  /** A Git object in the repository */
  object?(
    root: ParentType<Repository>,
    args: RepositoryObjectInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<GitObject>>;
  /** The image used to represent this repository in Open Graph data. */
  openGraphImageUrl: URI;
  /** The User owner of the repository. */
  owner: RepositoryOwner;
  /** A list of packages under the owner. */
  packages(
    root: ParentType<Repository>,
    args: RepositoryPackagesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PackageConnection>;
  /** The repository parent, if this is a fork. */
  parent?: Repository;
  /** A list of discussions that have been pinned in this repository. */
  pinnedDiscussions(
    root: ParentType<Repository>,
    args: RepositoryPinnedDiscussionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PinnedDiscussionConnection>;
  /** A list of pinned issues for this repository. */
  pinnedIssues?(
    root: ParentType<Repository>,
    args: RepositoryPinnedIssuesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<PinnedIssueConnection>>;
  /** The primary language of the repository's code. */
  primaryLanguage?: Language;
  /** Find project by number. */
  project?(
    root: ParentType<Repository>,
    args: RepositoryProjectInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Project>>;
  /** A list of projects under the owner. */
  projects(
    root: ParentType<Repository>,
    args: RepositoryProjectsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ProjectConnection>;
  /** The HTTP path listing the repository's projects */
  projectsResourcePath: URI;
  /** The HTTP URL listing the repository's projects */
  projectsUrl: URI;
  /** Returns a single pull request from the current repository by number. */
  pullRequest?(
    root: ParentType<Repository>,
    args: RepositoryPullRequestInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<PullRequest>>;
  /** Returns a list of pull request templates associated to the repository */
  pullRequestTemplates?: PullRequestTemplate[];
  /** A list of pull requests that have been opened in the repository. */
  pullRequests(
    root: ParentType<Repository>,
    args: RepositoryPullRequestsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestConnection>;
  /** Identifies when the repository was last pushed to. */
  pushedAt?: DateTime;
  /** Whether or not rebase-merging is enabled on this repository. */
  rebaseMergeAllowed: boolean;
  /** Fetch a given ref from the repository */
  ref?(
    root: ParentType<Repository>,
    args: RepositoryRefInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Ref>>;
  /** Fetch a list of refs from the repository */
  refs?(
    root: ParentType<Repository>,
    args: RepositoryRefsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RefConnection>>;
  /** Lookup a single release given various criteria. */
  release?(
    root: ParentType<Repository>,
    args: RepositoryReleaseInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Release>>;
  /** List of releases which are dependent on this repository. */
  releases(
    root: ParentType<Repository>,
    args: RepositoryReleasesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReleaseConnection>;
  /** A list of applied repository-topic associations for this repository. */
  repositoryTopics(
    root: ParentType<Repository>,
    args: RepositoryRepositoryTopicsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<RepositoryTopicConnection>;
  /** The HTTP path for this repository */
  resourcePath: URI;
  /** The security policy URL. */
  securityPolicyUrl?: URI;
  /** A description of the repository, rendered to HTML without any links in it. */
  shortDescriptionHTML(
    root: ParentType<Repository>,
    args: RepositoryShortDescriptionHTMLInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<HTML>;
  /** Whether or not squash-merging is enabled on this repository. */
  squashMergeAllowed: boolean;
  /** The SSH URL to clone this repository */
  sshUrl: GitSSHRemote;
  /** Returns a count of how many stargazers there are on this object */
  stargazerCount: number;
  /** A list of users who have starred this starrable. */
  stargazers(
    root: ParentType<Repository>,
    args: RepositoryStargazersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<StargazerConnection>;
  /** Returns a list of all submodules in this repository parsed from the
    .gitmodules file as of the default branch's HEAD commit. */
  submodules(
    root: ParentType<Repository>,
    args: RepositorySubmodulesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SubmoduleConnection>;
  /** Temporary authentication token for cloning this repository. */
  tempCloneToken?: string;
  /** The repository from which this repository was generated, if any. */
  templateRepository?: Repository;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this repository */
  url: URI;
  /** Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar. */
  usesCustomOpenGraphImage: boolean;
  /** Indicates whether the viewer has admin permissions on this repository. */
  viewerCanAdminister: boolean;
  /** Can the current viewer create new projects on this owner. */
  viewerCanCreateProjects: boolean;
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: boolean;
  /** Indicates whether the viewer can update the topics of this repository. */
  viewerCanUpdateTopics: boolean;
  /** The last commit email for the viewer. */
  viewerDefaultCommitEmail?: string;
  /** The last used merge method by the viewer or the default for the repository. */
  viewerDefaultMergeMethod: PullRequestMergeMethod;
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  viewerHasStarred: boolean;
  /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */
  viewerPermission?: RepositoryPermission;
  /** A list of emails this viewer can commit with. */
  viewerPossibleCommitEmails?: string[];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: SubscriptionState;
  /** A list of vulnerability alerts that are on this repository. */
  vulnerabilityAlerts?(
    root: ParentType<Repository>,
    args: RepositoryVulnerabilityAlertsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RepositoryVulnerabilityAlertConnection>>;
  /** A list of users watching the repository. */
  watchers(
    root: ParentType<Repository>,
    args: RepositoryWatchersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserConnection>;
}

/** The connection type for User. */
export interface RepositoryCollaboratorConnection {
  /** A list of edges. */
  edges?: Maybe<RepositoryCollaboratorEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<User>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Represents a user who is a collaborator of a repository. */
export interface RepositoryCollaboratorEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  node: User;
  /** The permission the user has on the repository. */
  permission: RepositoryPermission;
  /** A list of sources for the user's access to the repository. */
  permissionSources?: PermissionSource[];
}

/** A list of repositories owned by the subject. */
export interface RepositoryConnection {
  /** A list of edges. */
  edges?: Maybe<RepositoryEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Repository>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
  /** The total size in kilobytes of all repositories in the connection. */
  totalDiskUsage: number;
}

/** A repository contact link. */
export interface RepositoryContactLink {
  /** The contact link purpose. */
  about: string;
  /** The contact link name. */
  name: string;
  /** The contact link URL. */
  url: URI;
}

/** An edge in a connection. */
export interface RepositoryEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Repository;
}

/** Repository interaction limit that applies to this object. */
export interface RepositoryInteractionAbility {
  /** The time the currently active limit expires. */
  expiresAt?: DateTime;
  /** The current limit that is enabled on this object. */
  limit: RepositoryInteractionLimit;
  /** The origin of the currently active interaction limit. */
  origin: RepositoryInteractionLimitOrigin;
}

/** An invitation for a user to be added to a repository. */
export interface RepositoryInvitation {
  /** The email address that received the invitation. */
  email?: string;
  id: ID;
  /** The user who received the invitation. */
  invitee?: User;
  /** The user who created the invitation. */
  inviter: User;
  /** The permalink for this repository invitation. */
  permalink: URI;
  /** The permission granted on this repository by this invitation. */
  permission: RepositoryPermission;
  /** The Repository the user is invited to. */
  repository?: RepositoryInfo;
}

/** The connection type for RepositoryInvitation. */
export interface RepositoryInvitationConnection {
  /** A list of edges. */
  edges?: Maybe<RepositoryInvitationEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<RepositoryInvitation>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface RepositoryInvitationEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: RepositoryInvitation;
}

/** A repository-topic connects a repository to a topic. */
export interface RepositoryTopic {
  id: ID;
  /** The HTTP path for this repository-topic. */
  resourcePath: URI;
  /** The topic. */
  topic: Topic;
  /** The HTTP URL for this repository-topic. */
  url: URI;
}

/** The connection type for RepositoryTopic. */
export interface RepositoryTopicConnection {
  /** A list of edges. */
  edges?: Maybe<RepositoryTopicEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<RepositoryTopic>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface RepositoryTopicEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: RepositoryTopic;
}

/** Audit log entry for a repository_visibility_change.disable event. */
export interface RepositoryVisibilityChangeDisableAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: URI;
  /** The slug of the enterprise. */
  enterpriseSlug?: string;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: URI;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a repository_visibility_change.enable event. */
export interface RepositoryVisibilityChangeEnableAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: URI;
  /** The slug of the enterprise. */
  enterpriseSlug?: string;
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: URI;
  id: ID;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** A alert for a repository with an affected vulnerability. */
export interface RepositoryVulnerabilityAlert {
  /** When was the alert created? */
  createdAt: DateTime;
  /** The reason the alert was dismissed */
  dismissReason?: string;
  /** When was the alert dismissed? */
  dismissedAt?: DateTime;
  /** The user who dismissed the alert */
  dismisser?: User;
  id: ID;
  /** The associated repository */
  repository: Repository;
  /** The associated security advisory */
  securityAdvisory?: SecurityAdvisory;
  /** The associated security vulnerability */
  securityVulnerability?: SecurityVulnerability;
  /** The vulnerable manifest filename */
  vulnerableManifestFilename: string;
  /** The vulnerable manifest path */
  vulnerableManifestPath: string;
  /** The vulnerable requirements */
  vulnerableRequirements?: string;
}

/** The connection type for RepositoryVulnerabilityAlert. */
export interface RepositoryVulnerabilityAlertConnection {
  /** A list of edges. */
  edges?: Maybe<RepositoryVulnerabilityAlertEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<RepositoryVulnerabilityAlert>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface RepositoryVulnerabilityAlertEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: RepositoryVulnerabilityAlert;
}

/** Autogenerated return type of RequestReviews */
export interface RequestReviewsPayload {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The pull request that is getting requests. */
  pullRequest?: PullRequest;
  /** The edge from the pull request to the requested reviewers. */
  requestedReviewersEdge?: UserEdge;
}

/** Autogenerated return type of RerequestCheckSuite */
export interface RerequestCheckSuitePayload {
  /** The requested check suite. */
  checkSuite?: CheckSuite;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of ResolveReviewThread */
export interface ResolveReviewThreadPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The thread to resolve. */
  thread?: PullRequestReviewThread;
}

/** Represents a private contribution a user made on GitHub. */
export interface RestrictedContribution {
  /** Whether this contribution is associated with a record you do not have access to. For
    example, your own 'first issue' contribution may have been made on a repository you can no
    longer access. */
  isRestricted: boolean;
  /** When this contribution was made. */
  occurredAt: DateTime;
  /** The HTTP path for this contribution. */
  resourcePath: URI;
  /** The HTTP URL for this contribution. */
  url: URI;
  /** The user who made this contribution. */
  user: User;
}

/** A team or user who has the ability to dismiss a review on a protected branch. */
export interface ReviewDismissalAllowance {
  /** The actor that can dismiss. */
  actor?: ReviewDismissalAllowanceActor;
  /** Identifies the branch protection rule associated with the allowed user or team. */
  branchProtectionRule?: BranchProtectionRule;
  id: ID;
}

/** The connection type for ReviewDismissalAllowance. */
export interface ReviewDismissalAllowanceConnection {
  /** A list of edges. */
  edges?: Maybe<ReviewDismissalAllowanceEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<ReviewDismissalAllowance>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface ReviewDismissalAllowanceEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: ReviewDismissalAllowance;
}

/** Represents a 'review_dismissed' event on a given issue or pull request. */
export interface ReviewDismissedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** Identifies the optional message associated with the 'review_dismissed' event. */
  dismissalMessage?: string;
  /** Identifies the optional message associated with the event, rendered to HTML. */
  dismissalMessageHTML?: string;
  id: ID;
  /** Identifies the previous state of the review with the 'review_dismissed' event. */
  previousReviewState: PullRequestReviewState;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
  /** Identifies the commit which caused the review to become stale. */
  pullRequestCommit?: PullRequestCommit;
  /** The HTTP path for this review dismissed event. */
  resourcePath: URI;
  /** Identifies the review associated with the 'review_dismissed' event. */
  review?: PullRequestReview;
  /** The HTTP URL for this review dismissed event. */
  url: URI;
}

/** A request for a user to review a pull request. */
export interface ReviewRequest {
  /** Whether this request was created for a code owner */
  asCodeOwner: boolean;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** Identifies the pull request associated with this review request. */
  pullRequest: PullRequest;
  /** The reviewer that is requested. */
  requestedReviewer?: RequestedReviewer;
}

/** The connection type for ReviewRequest. */
export interface ReviewRequestConnection {
  /** A list of edges. */
  edges?: Maybe<ReviewRequestEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<ReviewRequest>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface ReviewRequestEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: ReviewRequest;
}

/** Represents an 'review_request_removed' event on a given pull request. */
export interface ReviewRequestRemovedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
  /** Identifies the reviewer whose review request was removed. */
  requestedReviewer?: RequestedReviewer;
}

/** Represents an 'review_requested' event on a given pull request. */
export interface ReviewRequestedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** PullRequest referenced by event. */
  pullRequest: PullRequest;
  /** Identifies the reviewer whose review was requested. */
  requestedReviewer?: RequestedReviewer;
}

/** A hovercard context with a message describing the current code review state of the pull
request. */
export interface ReviewStatusHovercardContext {
  /** A string describing this context */
  message: string;
  /** An octicon to accompany this context */
  octicon: string;
  /** The current status of the pull request with respect to code review. */
  reviewDecision?: PullRequestReviewDecision;
}

/** A Saved Reply is text a user can use to reply quickly. */
export interface SavedReply {
  /** The body of the saved reply. */
  body: string;
  /** The saved reply body rendered to HTML. */
  bodyHTML: HTML;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** The title of the saved reply. */
  title: string;
  /** The user that saved this reply. */
  user?: Actor;
}

/** The connection type for SavedReply. */
export interface SavedReplyConnection {
  /** A list of edges. */
  edges?: Maybe<SavedReplyEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<SavedReply>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface SavedReplyEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: SavedReply;
}

/** A list of results that matched against a search query. */
export interface SearchResultItemConnection {
  /** The number of pieces of code that matched the search query. */
  codeCount: number;
  /** The number of discussions that matched the search query. */
  discussionCount: number;
  /** A list of edges. */
  edges?: Maybe<SearchResultItemEdge>[];
  /** The number of issues that matched the search query. */
  issueCount: number;
  /** A list of nodes. */
  nodes?: Maybe<SearchResultItem>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The number of repositories that matched the search query. */
  repositoryCount: number;
  /** The number of users that matched the search query. */
  userCount: number;
  /** The number of wiki pages that matched the search query. */
  wikiCount: number;
}

/** An edge in a connection. */
export interface SearchResultItemEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: SearchResultItem;
  /** Text matches on the result found. */
  textMatches?: Maybe<TextMatch>[];
}

/** Argument input type for SecurityAdvisoryCwesInput. */
export interface SecurityAdvisoryCwesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for SecurityAdvisoryVulnerabilitiesInput. */
export interface SecurityAdvisoryVulnerabilitiesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** An ecosystem to filter vulnerabilities by. */
  ecosystem?: SecurityAdvisoryEcosystem;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for the returned topics. */
  orderBy?: SecurityVulnerabilityOrder;
  /** A package name to filter vulnerabilities by. */
  package?: string;
  /** A list of severities to filter vulnerabilities by. */
  severities?: SecurityAdvisorySeverity[];
}

/** A GitHub Security Advisory */
export interface SecurityAdvisory {
  /** The CVSS associated with this advisory */
  cvss: CVSS;
  /** CWEs associated with this Advisory */
  cwes(
    root: ParentType<SecurityAdvisory>,
    args: SecurityAdvisoryCwesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CWEConnection>;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** This is a long plaintext description of the advisory */
  description: string;
  /** The GitHub Security Advisory ID */
  ghsaId: string;
  id: ID;
  /** A list of identifiers for this advisory */
  identifiers: SecurityAdvisoryIdentifier[];
  /** The permalink for the advisory's dependabot alerts page */
  notificationsPermalink?: URI;
  /** The organization that originated the advisory */
  origin: string;
  /** The permalink for the advisory */
  permalink?: URI;
  /** When the advisory was published */
  publishedAt: DateTime;
  /** A list of references for this advisory */
  references: SecurityAdvisoryReference[];
  /** The severity of the advisory */
  severity: SecurityAdvisorySeverity;
  /** A short plaintext summary of the advisory */
  summary: string;
  /** When the advisory was last updated */
  updatedAt: DateTime;
  /** Vulnerabilities associated with this Advisory */
  vulnerabilities(
    root: ParentType<SecurityAdvisory>,
    args: SecurityAdvisoryVulnerabilitiesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SecurityVulnerabilityConnection>;
  /** When the advisory was withdrawn, if it has been withdrawn */
  withdrawnAt?: DateTime;
}

/** The connection type for SecurityAdvisory. */
export interface SecurityAdvisoryConnection {
  /** A list of edges. */
  edges?: Maybe<SecurityAdvisoryEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<SecurityAdvisory>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface SecurityAdvisoryEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: SecurityAdvisory;
}

/** A GitHub Security Advisory Identifier */
export interface SecurityAdvisoryIdentifier {
  /** The identifier type, e.g. GHSA, CVE */
  type: string;
  /** The identifier */
  value: string;
}

/** An individual package */
export interface SecurityAdvisoryPackage {
  /** The ecosystem the package belongs to, e.g. RUBYGEMS, NPM */
  ecosystem: SecurityAdvisoryEcosystem;
  /** The package name */
  name: string;
}

/** An individual package version */
export interface SecurityAdvisoryPackageVersion {
  /** The package name or version */
  identifier: string;
}

/** A GitHub Security Advisory Reference */
export interface SecurityAdvisoryReference {
  /** A publicly accessible reference */
  url: URI;
}

/** An individual vulnerability within an Advisory */
export interface SecurityVulnerability {
  /** The Advisory associated with this Vulnerability */
  advisory: SecurityAdvisory;
  /** The first version containing a fix for the vulnerability */
  firstPatchedVersion?: SecurityAdvisoryPackageVersion;
  /** A description of the vulnerable package */
  package: SecurityAdvisoryPackage;
  /** The severity of the vulnerability within this package */
  severity: SecurityAdvisorySeverity;
  /** When the vulnerability was last updated */
  updatedAt: DateTime;
  /** A string that describes the vulnerable package versions.
    This string follows a basic syntax with a few forms.
    + `= 0.2.0` denotes a single vulnerable version.
    + `<= 1.0.8` denotes a version range up to and including the specified version
    + `< 0.1.11` denotes a version range up to, but excluding, the specified version
    + `>= 4.3.0, < 4.3.5` denotes a version range with a known minimum and maximum version.
    + `>= 0.0.1` denotes a version range with a known minimum, but no known maximum */
  vulnerableVersionRange: string;
}

/** The connection type for SecurityVulnerability. */
export interface SecurityVulnerabilityConnection {
  /** A list of edges. */
  edges?: Maybe<SecurityVulnerabilityEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<SecurityVulnerability>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface SecurityVulnerabilityEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: SecurityVulnerability;
}

/** Autogenerated return type of SetEnterpriseIdentityProvider */
export interface SetEnterpriseIdentityProviderPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The identity provider for the enterprise. */
  identityProvider?: EnterpriseIdentityProvider;
}

/** Autogenerated return type of SetOrganizationInteractionLimit */
export interface SetOrganizationInteractionLimitPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The organization that the interaction limit was set for. */
  organization?: Organization;
}

/** Autogenerated return type of SetRepositoryInteractionLimit */
export interface SetRepositoryInteractionLimitPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The repository that the interaction limit was set for. */
  repository?: Repository;
}

/** Autogenerated return type of SetUserInteractionLimit */
export interface SetUserInteractionLimitPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The user that the interaction limit was set for. */
  user?: User;
}

/** Represents an S/MIME signature on a Commit or Tag. */
export interface SmimeSignature {
  /** Email used to sign this object. */
  email: string;
  /** True if the signature is valid and verified by GitHub. */
  isValid: boolean;
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: string;
  /** ASCII-armored signature header from object. */
  signature: string;
  /** GitHub user corresponding to the email signing this commit. */
  signer?: User;
  /** The state of this signature. `VALID` if signature is valid and verified by
    GitHub, otherwise represents reason why signature is considered invalid. */
  state: GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: boolean;
}

/** The connection type for SponsorableItem. */
export interface SponsorableItemConnection {
  /** A list of edges. */
  edges?: Maybe<SponsorableItemEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<SponsorableItem>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface SponsorableItemEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: SponsorableItem;
}

/** A goal associated with a GitHub Sponsors listing, representing a target the sponsored maintainer would like to attain. */
export interface SponsorsGoal {
  /** A description of the goal from the maintainer. */
  description?: string;
  /** What the objective of this goal is. */
  kind: SponsorsGoalKind;
  /** The percentage representing how complete this goal is, between 0-100. */
  percentComplete: number;
  /** What the goal amount is. Represents a dollar amount for monthly sponsorship
    amount goals. Represents a count of unique sponsors for total sponsors count goals. */
  targetValue: number;
  /** A brief summary of the kind and target value of this goal. */
  title: string;
}

/** Argument input type for SponsorsListingTiersInput. */
export interface SponsorsListingTiersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for Sponsors tiers returned from the connection. */
  orderBy?: SponsorsTierOrder;
}

/** A GitHub Sponsors listing. */
export interface SponsorsListing {
  /** The current goal the maintainer is trying to reach with GitHub Sponsors, if any. */
  activeGoal?: SponsorsGoal;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The full description of the listing. */
  fullDescription: string;
  /** The full description of the listing rendered to HTML. */
  fullDescriptionHTML: HTML;
  id: ID;
  /** The listing's full name. */
  name: string;
  /** The short description of the listing. */
  shortDescription: string;
  /** The short name of the listing. */
  slug: string;
  /** The published tiers for this GitHub Sponsors listing. */
  tiers?(
    root: ParentType<SponsorsListing>,
    args: SponsorsListingTiersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<SponsorsTierConnection>>;
}

/** A GitHub Sponsors tier associated with a GitHub Sponsors listing. */
export interface SponsorsTier {
  /** SponsorsTier information only visible to users that can administer the associated Sponsors listing. */
  adminInfo?: SponsorsTierAdminInfo;
  /** Get a different tier for this tier's maintainer that is at the same frequency
    as this tier but with a lesser cost. Returns the published tier with the
    monthly price closest to this tier's without going over. */
  closestLesserValueTier?: SponsorsTier;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The description of the tier. */
  description: string;
  /** The tier description rendered to HTML */
  descriptionHTML: HTML;
  id: ID;
  /** Whether this tier was chosen at checkout time by the sponsor rather than
    defined ahead of time by the maintainer who manages the Sponsors listing. */
  isCustomAmount: boolean;
  /** Whether this tier is only for use with one-time sponsorships. */
  isOneTime: boolean;
  /** How much this tier costs per month in cents. */
  monthlyPriceInCents: number;
  /** How much this tier costs per month in dollars. */
  monthlyPriceInDollars: number;
  /** The name of the tier. */
  name: string;
  /** The sponsors listing that this tier belongs to. */
  sponsorsListing: SponsorsListing;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
}

/** Argument input type for SponsorsTierAdminInfoSponsorshipsInput. */
export interface SponsorsTierAdminInfoSponsorshipsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Whether or not to include private sponsorships in the result set */
  includePrivate?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for sponsorships returned from this connection. If left
    blank, the sponsorships will be ordered based on relevancy to the viewer. */
  orderBy?: SponsorshipOrder;
}

/** SponsorsTier information only visible to users that can administer the associated Sponsors listing. */
export interface SponsorsTierAdminInfo {
  /** The sponsorships associated with this tier. */
  sponsorships(
    root: ParentType<SponsorsTierAdminInfo>,
    args: SponsorsTierAdminInfoSponsorshipsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SponsorshipConnection>;
}

/** The connection type for SponsorsTier. */
export interface SponsorsTierConnection {
  /** A list of edges. */
  edges?: Maybe<SponsorsTierEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<SponsorsTier>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface SponsorsTierEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: SponsorsTier;
}

/** A sponsorship relationship between a sponsor and a maintainer */
export interface Sponsorship {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Whether this sponsorship represents a one-time payment versus a recurring sponsorship. */
  isOneTimePayment: boolean;
  /** The entity that is being sponsored */
  maintainer: User;
  /** The privacy level for this sponsorship. */
  privacyLevel: SponsorshipPrivacy;
  /** The user that is sponsoring. Returns null if the sponsorship is private or if sponsor is not a user. */
  sponsor?: User;
  /** The user or organization that is sponsoring, if you have permission to view them. */
  sponsorEntity?: Sponsor;
  /** The entity that is being sponsored */
  sponsorable: Sponsorable;
  /** The associated sponsorship tier */
  tier?: SponsorsTier;
  /** Identifies the date and time when the current tier was chosen for this sponsorship. */
  tierSelectedAt?: DateTime;
}

/** The connection type for Sponsorship. */
export interface SponsorshipConnection {
  /** A list of edges. */
  edges?: Maybe<SponsorshipEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Sponsorship>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
  /** The total amount in cents of all recurring sponsorships in the connection
    whose amount you can view. Does not include one-time sponsorships. */
  totalRecurringMonthlyPriceInCents: number;
  /** The total dollar amount of all recurring sponsorships in the connection whose
    amount you can view. Does not include one-time sponsorships. */
  totalRecurringMonthlyPriceInDollars: number;
}

/** An edge in a connection. */
export interface SponsorshipEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Sponsorship;
}

/** The connection type for User. */
export interface StargazerConnection {
  /** A list of edges. */
  edges?: Maybe<StargazerEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<User>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Represents a user that's starred a repository. */
export interface StargazerEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  node: User;
  /** Identifies when the item was starred. */
  starredAt: DateTime;
}

/** The connection type for Repository. */
export interface StarredRepositoryConnection {
  /** A list of edges. */
  edges?: Maybe<StarredRepositoryEdge>[];
  /** Is the list of stars for this user truncated? This is true for users that have many stars. */
  isOverLimit: boolean;
  /** A list of nodes. */
  nodes?: Maybe<Repository>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Represents a starred repository. */
export interface StarredRepositoryEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  node: Repository;
  /** Identifies when the item was starred. */
  starredAt: DateTime;
}

/** Argument input type for StatusCombinedContextsInput. */
export interface StatusCombinedContextsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for StatusContextInput. */
export interface StatusContextInput {
  /** The context name. */
  name: string;
}

/** Represents a commit status. */
export interface Status {
  /** A list of status contexts and check runs for this commit. */
  combinedContexts(
    root: ParentType<Status>,
    args: StatusCombinedContextsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<StatusCheckRollupContextConnection>;
  /** The commit this status is attached to. */
  commit?: Commit;
  /** Looks up an individual status context by context name. */
  context?(
    root: ParentType<Status>,
    args: StatusContextInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<StatusContext>>;
  /** The individual status contexts for this commit. */
  contexts: StatusContext[];
  id: ID;
  /** The combined commit status. */
  state: StatusState;
}

/** Argument input type for StatusCheckRollupContextsInput. */
export interface StatusCheckRollupContextsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Represents the rollup for both the check runs and status for a commit. */
export interface StatusCheckRollup {
  /** The commit the status and check runs are attached to. */
  commit?: Commit;
  /** A list of status contexts and check runs for this commit. */
  contexts(
    root: ParentType<StatusCheckRollup>,
    args: StatusCheckRollupContextsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<StatusCheckRollupContextConnection>;
  id: ID;
  /** The combined status for the commit. */
  state: StatusState;
}

/** The connection type for StatusCheckRollupContext. */
export interface StatusCheckRollupContextConnection {
  /** A list of edges. */
  edges?: Maybe<StatusCheckRollupContextEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<StatusCheckRollupContext>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface StatusCheckRollupContextEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: StatusCheckRollupContext;
}

/** Argument input type for StatusContextAvatarUrlInput. */
export interface StatusContextAvatarUrlInput {
  /** The size of the resulting square image. */
  size?: number;
}

/** Argument input type for StatusContextIsRequiredInput. */
export interface StatusContextIsRequiredInput {
  /** The id of the pull request this is required for */
  pullRequestId?: ID;
  /** The number of the pull request this is required for */
  pullRequestNumber?: number;
}

/** Represents an individual commit status context */
export interface StatusContext {
  /** The avatar of the OAuth application or the user that created the status */
  avatarUrl?(
    root: ParentType<StatusContext>,
    args: StatusContextAvatarUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<URI>>;
  /** This commit this status context is attached to. */
  commit?: Commit;
  /** The name of this status context. */
  context: string;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The actor who created this status context. */
  creator?: Actor;
  /** The description for this status context. */
  description?: string;
  id: ID;
  /** Whether this is required to pass before merging for a specific pull request. */
  isRequired(
    root: ParentType<StatusContext>,
    args: StatusContextIsRequiredInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<boolean>;
  /** The state of this status context. */
  state: StatusState;
  /** The URL for this status context. */
  targetUrl?: URI;
}

/** Autogenerated return type of SubmitPullRequestReview */
export interface SubmitPullRequestReviewPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The submitted pull request review. */
  pullRequestReview?: PullRequestReview;
}

/** A pointer to a repository at a specific revision embedded inside another repository. */
export interface Submodule {
  /** The branch of the upstream submodule for tracking updates */
  branch?: string;
  /** The git URL of the submodule repository */
  gitUrl: URI;
  /** The name of the submodule in .gitmodules */
  name: string;
  /** The path in the superproject that this submodule is located in */
  path: string;
  /** The commit revision of the subproject repository being tracked by the submodule */
  subprojectCommitOid?: GitObjectID;
}

/** The connection type for Submodule. */
export interface SubmoduleConnection {
  /** A list of edges. */
  edges?: Maybe<SubmoduleEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Submodule>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface SubmoduleEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Submodule;
}

/** Represents a 'subscribed' event on a given `Subscribable`. */
export interface SubscribedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Object referenced by event. */
  subscribable: Subscribable;
}

/** A suggestion to review a pull request based on a user's commit history and review comments. */
export interface SuggestedReviewer {
  /** Is this suggestion based on past commits? */
  isAuthor: boolean;
  /** Is this suggestion based on past review comments? */
  isCommenter: boolean;
  /** Identifies the user suggested to review the pull request. */
  reviewer: User;
}

/** Represents a Git tag. */
export interface Tag {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: string;
  /** The HTTP path for this Git object */
  commitResourcePath: URI;
  /** The HTTP URL for this Git object */
  commitUrl: URI;
  id: ID;
  /** The Git tag message. */
  message?: string;
  /** The Git tag name. */
  name: string;
  /** The Git object ID */
  oid: GitObjectID;
  /** The Repository the Git object belongs to */
  repository: Repository;
  /** Details about the tag author. */
  tagger?: GitActor;
  /** The Git object the tag points to. */
  target: GitObject;
}

/** Argument input type for TeamAncestorsInput. */
export interface TeamAncestorsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for TeamAvatarUrlInput. */
export interface TeamAvatarUrlInput {
  /** The size in pixels of the resulting square image. */
  size?: number;
}

/** Argument input type for TeamChildTeamsInput. */
export interface TeamChildTeamsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Whether to list immediate child teams or all descendant child teams. */
  immediateOnly?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Order for connection */
  orderBy?: TeamOrder;
  /** User logins to filter by */
  userLogins?: string[];
}

/** Argument input type for TeamDiscussionInput. */
export interface TeamDiscussionInput {
  /** The sequence number of the discussion to find. */
  number: number;
}

/** Argument input type for TeamDiscussionsInput. */
export interface TeamDiscussionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** If provided, filters discussions according to whether or not they are pinned. */
  isPinned?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Order for connection */
  orderBy?: TeamDiscussionOrder;
}

/** Argument input type for TeamInvitationsInput. */
export interface TeamInvitationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for TeamMemberStatusesInput. */
export interface TeamMemberStatusesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for user statuses returned from the connection. */
  orderBy?: UserStatusOrder;
}

/** Argument input type for TeamMembersInput. */
export interface TeamMembersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filter by membership type */
  membership?: TeamMembershipType;
  /** Order for the connection. */
  orderBy?: TeamMemberOrder;
  /** The search string to look for. */
  query?: string;
  /** Filter by team member role */
  role?: TeamMemberRole;
}

/** Argument input type for TeamRepositoriesInput. */
export interface TeamRepositoriesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Order for the connection. */
  orderBy?: TeamRepositoryOrder;
  /** The search string to look for. */
  query?: string;
}

/** A team of users in an organization. */
export interface Team {
  /** A list of teams that are ancestors of this team. */
  ancestors(
    root: ParentType<Team>,
    args: TeamAncestorsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<TeamConnection>;
  /** A URL pointing to the team's avatar. */
  avatarUrl?(
    root: ParentType<Team>,
    args: TeamAvatarUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<URI>>;
  /** List of child teams belonging to this team */
  childTeams(
    root: ParentType<Team>,
    args: TeamChildTeamsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<TeamConnection>;
  /** The slug corresponding to the organization and team. */
  combinedSlug: string;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The description of the team. */
  description?: string;
  /** Find a team discussion by its number. */
  discussion?(
    root: ParentType<Team>,
    args: TeamDiscussionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<TeamDiscussion>>;
  /** A list of team discussions. */
  discussions(
    root: ParentType<Team>,
    args: TeamDiscussionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<TeamDiscussionConnection>;
  /** The HTTP path for team discussions */
  discussionsResourcePath: URI;
  /** The HTTP URL for team discussions */
  discussionsUrl: URI;
  /** The HTTP path for editing this team */
  editTeamResourcePath: URI;
  /** The HTTP URL for editing this team */
  editTeamUrl: URI;
  id: ID;
  /** A list of pending invitations for users to this team */
  invitations?(
    root: ParentType<Team>,
    args: TeamInvitationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<OrganizationInvitationConnection>>;
  /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
  memberStatuses(
    root: ParentType<Team>,
    args: TeamMemberStatusesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<UserStatusConnection>;
  /** A list of users who are members of this team. */
  members(
    root: ParentType<Team>,
    args: TeamMembersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<TeamMemberConnection>;
  /** The HTTP path for the team' members */
  membersResourcePath: URI;
  /** The HTTP URL for the team' members */
  membersUrl: URI;
  /** The name of the team. */
  name: string;
  /** The HTTP path creating a new team */
  newTeamResourcePath: URI;
  /** The HTTP URL creating a new team */
  newTeamUrl: URI;
  /** The organization that owns this team. */
  organization: Organization;
  /** The parent team of the team. */
  parentTeam?: Team;
  /** The level of privacy the team has. */
  privacy: TeamPrivacy;
  /** A list of repositories this team has access to. */
  repositories(
    root: ParentType<Team>,
    args: TeamRepositoriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<TeamRepositoryConnection>;
  /** The HTTP path for this team's repositories */
  repositoriesResourcePath: URI;
  /** The HTTP URL for this team's repositories */
  repositoriesUrl: URI;
  /** The HTTP path for this team */
  resourcePath: URI;
  /** What algorithm is used for review assignment for this team */
  reviewRequestDelegationAlgorithm?: TeamReviewAssignmentAlgorithm;
  /** True if review assignment is enabled for this team */
  reviewRequestDelegationEnabled: boolean;
  /** How many team members are required for review assignment for this team */
  reviewRequestDelegationMemberCount?: number;
  /** When assigning team members via delegation, whether the entire team should be notified as well. */
  reviewRequestDelegationNotifyTeam: boolean;
  /** The slug corresponding to the team. */
  slug: string;
  /** The HTTP path for this team's teams */
  teamsResourcePath: URI;
  /** The HTTP URL for this team's teams */
  teamsUrl: URI;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this team */
  url: URI;
  /** Team is adminable by the viewer. */
  viewerCanAdminister: boolean;
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: boolean;
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: SubscriptionState;
}

/** Audit log entry for a team.add_member event. */
export interface TeamAddMemberAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** Whether the team was mapped to an LDAP Group. */
  isLdapMapped?: boolean;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The team associated with the action */
  team?: Team;
  /** The name of the team */
  teamName?: string;
  /** The HTTP path for this team */
  teamResourcePath?: URI;
  /** The HTTP URL for this team */
  teamUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a team.add_repository event. */
export interface TeamAddRepositoryAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** Whether the team was mapped to an LDAP Group. */
  isLdapMapped?: boolean;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The team associated with the action */
  team?: Team;
  /** The name of the team */
  teamName?: string;
  /** The HTTP path for this team */
  teamResourcePath?: URI;
  /** The HTTP URL for this team */
  teamUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a team.change_parent_team event. */
export interface TeamChangeParentTeamAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** Whether the team was mapped to an LDAP Group. */
  isLdapMapped?: boolean;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The new parent team. */
  parentTeam?: Team;
  /** The name of the new parent team */
  parentTeamName?: string;
  /** The name of the former parent team */
  parentTeamNameWas?: string;
  /** The HTTP path for the parent team */
  parentTeamResourcePath?: URI;
  /** The HTTP URL for the parent team */
  parentTeamUrl?: URI;
  /** The former parent team. */
  parentTeamWas?: Team;
  /** The HTTP path for the previous parent team */
  parentTeamWasResourcePath?: URI;
  /** The HTTP URL for the previous parent team */
  parentTeamWasUrl?: URI;
  /** The team associated with the action */
  team?: Team;
  /** The name of the team */
  teamName?: string;
  /** The HTTP path for this team */
  teamResourcePath?: URI;
  /** The HTTP URL for this team */
  teamUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** The connection type for Team. */
export interface TeamConnection {
  /** A list of edges. */
  edges?: Maybe<TeamEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Team>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Argument input type for TeamDiscussionCommentsInput. */
export interface TeamDiscussionCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** When provided, filters the connection such that results begin with the comment with this number. */
  fromComment?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Order for connection */
  orderBy?: TeamDiscussionCommentOrder;
}

/** Argument input type for TeamDiscussionReactionsInput. */
export interface TeamDiscussionReactionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Allows filtering Reactions by emoji. */
  content?: ReactionContent;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows specifying the order in which reactions are returned. */
  orderBy?: ReactionOrder;
}

/** Argument input type for TeamDiscussionUserContentEditsInput. */
export interface TeamDiscussionUserContentEditsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A team discussion. */
export interface TeamDiscussion {
  /** The actor who authored the comment. */
  author?: Actor;
  /** Author's association with the discussion's team. */
  authorAssociation: CommentAuthorAssociation;
  /** The body as Markdown. */
  body: string;
  /** The body rendered to HTML. */
  bodyHTML: HTML;
  /** The body rendered to text. */
  bodyText: string;
  /** Identifies the discussion body hash. */
  bodyVersion: string;
  /** A list of comments on this discussion. */
  comments(
    root: ParentType<TeamDiscussion>,
    args: TeamDiscussionCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<TeamDiscussionCommentConnection>;
  /** The HTTP path for discussion comments */
  commentsResourcePath: URI;
  /** The HTTP URL for discussion comments */
  commentsUrl: URI;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Check if this comment was created via an email reply. */
  createdViaEmail: boolean;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The actor who edited the comment. */
  editor?: Actor;
  id: ID;
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: boolean;
  /** Whether or not the discussion is pinned. */
  isPinned: boolean;
  /** Whether or not the discussion is only visible to team members and org admins. */
  isPrivate: boolean;
  /** The moment the editor made the last edit */
  lastEditedAt?: DateTime;
  /** Identifies the discussion within its team. */
  number: number;
  /** Identifies when the comment was published at. */
  publishedAt?: DateTime;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: ReactionGroup[];
  /** A list of Reactions left on the Issue. */
  reactions(
    root: ParentType<TeamDiscussion>,
    args: TeamDiscussionReactionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactionConnection>;
  /** The HTTP path for this discussion */
  resourcePath: URI;
  /** The team that defines the context of this discussion. */
  team: Team;
  /** The title of the discussion */
  title: string;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this discussion */
  url: URI;
  /** A list of edits to this content. */
  userContentEdits?(
    root: ParentType<TeamDiscussion>,
    args: TeamDiscussionUserContentEditsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UserContentEditConnection>>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: boolean;
  /** Whether or not the current viewer can pin this discussion. */
  viewerCanPin: boolean;
  /** Can user react to this subject */
  viewerCanReact: boolean;
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: boolean;
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: CommentCannotUpdateReason[];
  /** Did the viewer author this comment. */
  viewerDidAuthor: boolean;
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: SubscriptionState;
}

/** Argument input type for TeamDiscussionCommentReactionsInput. */
export interface TeamDiscussionCommentReactionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Allows filtering Reactions by emoji. */
  content?: ReactionContent;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Allows specifying the order in which reactions are returned. */
  orderBy?: ReactionOrder;
}

/** Argument input type for TeamDiscussionCommentUserContentEditsInput. */
export interface TeamDiscussionCommentUserContentEditsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A comment on a team discussion. */
export interface TeamDiscussionComment {
  /** The actor who authored the comment. */
  author?: Actor;
  /** Author's association with the comment's team. */
  authorAssociation: CommentAuthorAssociation;
  /** The body as Markdown. */
  body: string;
  /** The body rendered to HTML. */
  bodyHTML: HTML;
  /** The body rendered to text. */
  bodyText: string;
  /** The current version of the body content. */
  bodyVersion: string;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Check if this comment was created via an email reply. */
  createdViaEmail: boolean;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The discussion this comment is about. */
  discussion: TeamDiscussion;
  /** The actor who edited the comment. */
  editor?: Actor;
  id: ID;
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: boolean;
  /** The moment the editor made the last edit */
  lastEditedAt?: DateTime;
  /** Identifies the comment number. */
  number: number;
  /** Identifies when the comment was published at. */
  publishedAt?: DateTime;
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: ReactionGroup[];
  /** A list of Reactions left on the Issue. */
  reactions(
    root: ParentType<TeamDiscussionComment>,
    args: TeamDiscussionCommentReactionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ReactionConnection>;
  /** The HTTP path for this comment */
  resourcePath: URI;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this comment */
  url: URI;
  /** A list of edits to this content. */
  userContentEdits?(
    root: ParentType<TeamDiscussionComment>,
    args: TeamDiscussionCommentUserContentEditsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UserContentEditConnection>>;
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: boolean;
  /** Can user react to this subject */
  viewerCanReact: boolean;
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: boolean;
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: CommentCannotUpdateReason[];
  /** Did the viewer author this comment. */
  viewerDidAuthor: boolean;
}

/** The connection type for TeamDiscussionComment. */
export interface TeamDiscussionCommentConnection {
  /** A list of edges. */
  edges?: Maybe<TeamDiscussionCommentEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<TeamDiscussionComment>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface TeamDiscussionCommentEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: TeamDiscussionComment;
}

/** The connection type for TeamDiscussion. */
export interface TeamDiscussionConnection {
  /** A list of edges. */
  edges?: Maybe<TeamDiscussionEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<TeamDiscussion>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface TeamDiscussionEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: TeamDiscussion;
}

/** An edge in a connection. */
export interface TeamEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: Team;
}

/** The connection type for User. */
export interface TeamMemberConnection {
  /** A list of edges. */
  edges?: Maybe<TeamMemberEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<User>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Represents a user who is a member of a team. */
export interface TeamMemberEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The HTTP path to the organization's member access page. */
  memberAccessResourcePath: URI;
  /** The HTTP URL to the organization's member access page. */
  memberAccessUrl: URI;
  node: User;
  /** The role the member has on the team. */
  role: TeamMemberRole;
}

/** Audit log entry for a team.remove_member event. */
export interface TeamRemoveMemberAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** Whether the team was mapped to an LDAP Group. */
  isLdapMapped?: boolean;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The team associated with the action */
  team?: Team;
  /** The name of the team */
  teamName?: string;
  /** The HTTP path for this team */
  teamResourcePath?: URI;
  /** The HTTP URL for this team */
  teamUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** Audit log entry for a team.remove_repository event. */
export interface TeamRemoveRepositoryAuditEntry {
  /** The action name */
  action: string;
  /** The user who initiated the action */
  actor?: AuditEntryActor;
  /** The IP address of the actor */
  actorIp?: string;
  /** A readable representation of the actor's location */
  actorLocation?: ActorLocation;
  /** The username of the user who initiated the action */
  actorLogin?: string;
  /** The HTTP path for the actor. */
  actorResourcePath?: URI;
  /** The HTTP URL for the actor. */
  actorUrl?: URI;
  /** The time the action was initiated */
  createdAt: PreciseDateTime;
  id: ID;
  /** Whether the team was mapped to an LDAP Group. */
  isLdapMapped?: boolean;
  /** The corresponding operation type for the action */
  operationType?: OperationType;
  /** The Organization associated with the Audit Entry. */
  organization?: Organization;
  /** The name of the Organization. */
  organizationName?: string;
  /** The HTTP path for the organization */
  organizationResourcePath?: URI;
  /** The HTTP URL for the organization */
  organizationUrl?: URI;
  /** The repository associated with the action */
  repository?: Repository;
  /** The name of the repository */
  repositoryName?: string;
  /** The HTTP path for the repository */
  repositoryResourcePath?: URI;
  /** The HTTP URL for the repository */
  repositoryUrl?: URI;
  /** The team associated with the action */
  team?: Team;
  /** The name of the team */
  teamName?: string;
  /** The HTTP path for this team */
  teamResourcePath?: URI;
  /** The HTTP URL for this team */
  teamUrl?: URI;
  /** The user affected by the action */
  user?: User;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: string;
  /** The HTTP path for the user. */
  userResourcePath?: URI;
  /** The HTTP URL for the user. */
  userUrl?: URI;
}

/** The connection type for Repository. */
export interface TeamRepositoryConnection {
  /** A list of edges. */
  edges?: Maybe<TeamRepositoryEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<Repository>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** Represents a team repository. */
export interface TeamRepositoryEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  node: Repository;
  /** The permission level the team has on the repository */
  permission: RepositoryPermission;
}

/** A text match within a search result. */
export interface TextMatch {
  /** The specific text fragment within the property matched on. */
  fragment: string;
  /** Highlights within the matched fragment. */
  highlights: TextMatchHighlight[];
  /** The property matched on. */
  property: string;
}

/** Represents a single highlight in a search result match. */
export interface TextMatchHighlight {
  /** The indice in the fragment where the matched text begins. */
  beginIndice: number;
  /** The indice in the fragment where the matched text ends. */
  endIndice: number;
  /** The text matched. */
  text: string;
}

/** Argument input type for TopicRelatedTopicsInput. */
export interface TopicRelatedTopicsInput {
  /** How many topics to return. */
  first?: number;
}

/** Argument input type for TopicStargazersInput. */
export interface TopicStargazersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Order for connection */
  orderBy?: StarOrder;
}

/** A topic aggregates entities that are related to a subject. */
export interface Topic {
  id: ID;
  /** The topic's name. */
  name: string;
  /** A list of related topics, including aliases of this topic, sorted with the most relevant
    first. Returns up to 10 Topics. */
  relatedTopics(
    root: ParentType<Topic>,
    args: TopicRelatedTopicsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Topic[]>;
  /** Returns a count of how many stargazers there are on this object */
  stargazerCount: number;
  /** A list of users who have starred this starrable. */
  stargazers(
    root: ParentType<Topic>,
    args: TopicStargazersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<StargazerConnection>;
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  viewerHasStarred: boolean;
}

/** Autogenerated return type of TransferIssue */
export interface TransferIssuePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The issue that was transferred */
  issue?: Issue;
}

/** Represents a 'transferred' event on a given issue or pull request. */
export interface TransferredEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The repository this came from */
  fromRepository?: Repository;
  id: ID;
  /** Identifies the issue associated with the event. */
  issue: Issue;
}

/** Represents a Git tree. */
export interface Tree {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: string;
  /** The HTTP path for this Git object */
  commitResourcePath: URI;
  /** The HTTP URL for this Git object */
  commitUrl: URI;
  /** A list of tree entries. */
  entries?: TreeEntry[];
  id: ID;
  /** The Git object ID */
  oid: GitObjectID;
  /** The Repository the Git object belongs to */
  repository: Repository;
}

/** Represents a Git tree entry. */
export interface TreeEntry {
  /** The extension of the file */
  extension?: string;
  /** Whether or not this tree entry is generated */
  isGenerated: boolean;
  /** Entry file mode. */
  mode: number;
  /** Entry file name. */
  name: string;
  /** Entry file object. */
  object?: GitObject;
  /** Entry file Git object ID. */
  oid: GitObjectID;
  /** The full path of the file. */
  path?: string;
  /** The Repository the tree entry belongs to */
  repository: Repository;
  /** If the TreeEntry is for a directory occupied by a submodule project, this returns the corresponding submodule */
  submodule?: Submodule;
  /** Entry file type. */
  type: string;
}

/** Autogenerated return type of UnarchiveRepository */
export interface UnarchiveRepositoryPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The repository that was unarchived. */
  repository?: Repository;
}

/** Represents an 'unassigned' event on any assignable object. */
export interface UnassignedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the assignable associated with the event. */
  assignable: Assignable;
  /** Identifies the user or mannequin that was unassigned. */
  assignee?: Assignee;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Identifies the subject (user) who was unassigned. */
  user?: User;
}

/** Autogenerated return type of UnfollowUser */
export interface UnfollowUserPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The user that was unfollowed. */
  user?: User;
}

/** Represents an unknown signature on a Commit or Tag. */
export interface UnknownSignature {
  /** Email used to sign this object. */
  email: string;
  /** True if the signature is valid and verified by GitHub. */
  isValid: boolean;
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: string;
  /** ASCII-armored signature header from object. */
  signature: string;
  /** GitHub user corresponding to the email signing this commit. */
  signer?: User;
  /** The state of this signature. `VALID` if signature is valid and verified by
    GitHub, otherwise represents reason why signature is considered invalid. */
  state: GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: boolean;
}

/** Represents an 'unlabeled' event on a given issue or pull request. */
export interface UnlabeledEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Identifies the label associated with the 'unlabeled' event. */
  label: Label;
  /** Identifies the `Labelable` associated with the event. */
  labelable: Labelable;
}

/** Autogenerated return type of UnlinkRepositoryFromProject */
export interface UnlinkRepositoryFromProjectPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The linked Project. */
  project?: Project;
  /** The linked Repository. */
  repository?: Repository;
}

/** Autogenerated return type of UnlockLockable */
export interface UnlockLockablePayload {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The item that was unlocked. */
  unlockedRecord?: Lockable;
}

/** Represents an 'unlocked' event on a given issue or pull request. */
export interface UnlockedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Object that was unlocked. */
  lockable: Lockable;
}

/** Autogenerated return type of UnmarkDiscussionCommentAsAnswer */
export interface UnmarkDiscussionCommentAsAnswerPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The discussion that includes the comment. */
  discussion?: Discussion;
}

/** Autogenerated return type of UnmarkFileAsViewed */
export interface UnmarkFileAsViewedPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated pull request. */
  pullRequest?: PullRequest;
}

/** Autogenerated return type of UnmarkIssueAsDuplicate */
export interface UnmarkIssueAsDuplicatePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The issue or pull request that was marked as a duplicate. */
  duplicate?: IssueOrPullRequest;
}

/** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
export interface UnmarkedAsDuplicateEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** The authoritative issue or pull request which has been duplicated by another. */
  canonical?: IssueOrPullRequest;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** The issue or pull request which has been marked as a duplicate of another. */
  duplicate?: IssueOrPullRequest;
  id: ID;
  /** Canonical and duplicate belong to different repositories. */
  isCrossRepository: boolean;
}

/** Autogenerated return type of UnminimizeComment */
export interface UnminimizeCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The comment that was unminimized. */
  unminimizedComment?: Minimizable;
}

/** Autogenerated return type of UnpinIssue */
export interface UnpinIssuePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The issue that was unpinned */
  issue?: Issue;
}

/** Represents an 'unpinned' event on a given issue or pull request. */
export interface UnpinnedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Identifies the issue associated with the event. */
  issue: Issue;
}

/** Autogenerated return type of UnresolveReviewThread */
export interface UnresolveReviewThreadPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The thread to resolve. */
  thread?: PullRequestReviewThread;
}

/** Represents an 'unsubscribed' event on a given `Subscribable`. */
export interface UnsubscribedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** Object referenced by event. */
  subscribable: Subscribable;
}

/** Autogenerated return type of UpdateBranchProtectionRule */
export interface UpdateBranchProtectionRulePayload {
  /** The newly created BranchProtectionRule. */
  branchProtectionRule?: BranchProtectionRule;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of UpdateCheckRun */
export interface UpdateCheckRunPayload {
  /** The updated check run. */
  checkRun?: CheckRun;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of UpdateCheckSuitePreferences */
export interface UpdateCheckSuitePreferencesPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated repository. */
  repository?: Repository;
}

/** Autogenerated return type of UpdateDiscussionComment */
export interface UpdateDiscussionCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The modified discussion comment. */
  comment?: DiscussionComment;
}

/** Autogenerated return type of UpdateDiscussion */
export interface UpdateDiscussionPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The modified discussion. */
  discussion?: Discussion;
}

/** Autogenerated return type of UpdateEnterpriseAdministratorRole */
export interface UpdateEnterpriseAdministratorRolePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** A message confirming the result of changing the administrator's role. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseAllowPrivateRepositoryForkingSetting */
export interface UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated allow private repository forking setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the allow private repository forking setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseDefaultRepositoryPermissionSetting */
export interface UpdateEnterpriseDefaultRepositoryPermissionSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated base repository permission setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the base repository permission setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting */
export interface UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated members can change repository visibility setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the members can change repository visibility setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseMembersCanCreateRepositoriesSetting */
export interface UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated members can create repositories setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the members can create repositories setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseMembersCanDeleteIssuesSetting */
export interface UpdateEnterpriseMembersCanDeleteIssuesSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated members can delete issues setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the members can delete issues setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseMembersCanDeleteRepositoriesSetting */
export interface UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated members can delete repositories setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the members can delete repositories setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseMembersCanInviteCollaboratorsSetting */
export interface UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated members can invite collaborators setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the members can invite collaborators setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseMembersCanMakePurchasesSetting */
export interface UpdateEnterpriseMembersCanMakePurchasesSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated members can make purchases setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the members can make purchases setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting */
export interface UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated members can update protected branches setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the members can update protected branches setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseMembersCanViewDependencyInsightsSetting */
export interface UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated members can view dependency insights setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the members can view dependency insights setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseOrganizationProjectsSetting */
export interface UpdateEnterpriseOrganizationProjectsSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated organization projects setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the organization projects setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseProfile */
export interface UpdateEnterpriseProfilePayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated enterprise. */
  enterprise?: Enterprise;
}

/** Autogenerated return type of UpdateEnterpriseRepositoryProjectsSetting */
export interface UpdateEnterpriseRepositoryProjectsSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated repository projects setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the repository projects setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseTeamDiscussionsSetting */
export interface UpdateEnterpriseTeamDiscussionsSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated team discussions setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the team discussions setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnterpriseTwoFactorAuthenticationRequiredSetting */
export interface UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The enterprise with the updated two factor authentication required setting. */
  enterprise?: Enterprise;
  /** A message confirming the result of updating the two factor authentication required setting. */
  message?: string;
}

/** Autogenerated return type of UpdateEnvironment */
export interface UpdateEnvironmentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated environment. */
  environment?: Environment;
}

/** Autogenerated return type of UpdateIpAllowListEnabledSetting */
export interface UpdateIpAllowListEnabledSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The IP allow list owner on which the setting was updated. */
  owner?: IpAllowListOwner;
}

/** Autogenerated return type of UpdateIpAllowListEntry */
export interface UpdateIpAllowListEntryPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The IP allow list entry that was updated. */
  ipAllowListEntry?: IpAllowListEntry;
}

/** Autogenerated return type of UpdateIpAllowListForInstalledAppsEnabledSetting */
export interface UpdateIpAllowListForInstalledAppsEnabledSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The IP allow list owner on which the setting was updated. */
  owner?: IpAllowListOwner;
}

/** Autogenerated return type of UpdateIssueComment */
export interface UpdateIssueCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated comment. */
  issueComment?: IssueComment;
}

/** Autogenerated return type of UpdateIssue */
export interface UpdateIssuePayload {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The issue. */
  issue?: Issue;
}

/** Autogenerated return type of UpdateLabel */
export interface UpdateLabelPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated label. */
  label?: Label;
}

/** Autogenerated return type of UpdateNotificationRestrictionSetting */
export interface UpdateNotificationRestrictionSettingPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The owner on which the setting was updated. */
  owner?: VerifiableDomainOwner;
}

/** Autogenerated return type of UpdateProjectCard */
export interface UpdateProjectCardPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated ProjectCard. */
  projectCard?: ProjectCard;
}

/** Autogenerated return type of UpdateProjectColumn */
export interface UpdateProjectColumnPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated project column. */
  projectColumn?: ProjectColumn;
}

/** Autogenerated return type of UpdateProject */
export interface UpdateProjectPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated project. */
  project?: Project;
}

/** Autogenerated return type of UpdatePullRequest */
export interface UpdatePullRequestPayload {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated pull request. */
  pullRequest?: PullRequest;
}

/** Autogenerated return type of UpdatePullRequestReviewComment */
export interface UpdatePullRequestReviewCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated comment. */
  pullRequestReviewComment?: PullRequestReviewComment;
}

/** Autogenerated return type of UpdatePullRequestReview */
export interface UpdatePullRequestReviewPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated pull request review. */
  pullRequestReview?: PullRequestReview;
}

/** Autogenerated return type of UpdateRef */
export interface UpdateRefPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated Ref. */
  ref?: Ref;
}

/** Autogenerated return type of UpdateRefs */
export interface UpdateRefsPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
}

/** Autogenerated return type of UpdateRepository */
export interface UpdateRepositoryPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated repository. */
  repository?: Repository;
}

/** Autogenerated return type of UpdateSubscription */
export interface UpdateSubscriptionPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The input subscribable entity. */
  subscribable?: Subscribable;
}

/** Autogenerated return type of UpdateTeamDiscussionComment */
export interface UpdateTeamDiscussionCommentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated comment. */
  teamDiscussionComment?: TeamDiscussionComment;
}

/** Autogenerated return type of UpdateTeamDiscussion */
export interface UpdateTeamDiscussionPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The updated discussion. */
  teamDiscussion?: TeamDiscussion;
}

/** Autogenerated return type of UpdateTeamReviewAssignment */
export interface UpdateTeamReviewAssignmentPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The team that was modified */
  team?: Team;
}

/** Autogenerated return type of UpdateTopics */
export interface UpdateTopicsPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** Names of the provided topics that are not valid. */
  invalidTopicNames?: string[];
  /** The updated repository. */
  repository?: Repository;
}

/** Argument input type for UserAnyPinnableItemsInput. */
export interface UserAnyPinnableItemsInput {
  /** Filter to only a particular kind of pinnable item. */
  type?: PinnableItemType;
}

/** Argument input type for UserAvatarUrlInput. */
export interface UserAvatarUrlInput {
  /** The size of the resulting square image. */
  size?: number;
}

/** Argument input type for UserCanReceiveOrganizationEmailsWhenNotificationsRestrictedInput. */
export interface UserCanReceiveOrganizationEmailsWhenNotificationsRestrictedInput {
  /** The login of the organization to check. */
  login: string;
}

/** Argument input type for UserCommitCommentsInput. */
export interface UserCommitCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for UserContributionsCollectionInput. */
export interface UserContributionsCollectionInput {
  /** Only contributions made at this time or later will be counted. If omitted, defaults to a year ago. */
  from?: DateTime;
  /** The ID of the organization used to filter contributions. */
  organizationID?: ID;
  /** Only contributions made before and up to (including) this time will be
    counted. If omitted, defaults to the current time or one year from the
    provided from argument. */
  to?: DateTime;
}

/** Argument input type for UserFollowersInput. */
export interface UserFollowersInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for UserFollowingInput. */
export interface UserFollowingInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for UserGistInput. */
export interface UserGistInput {
  /** The gist name to find. */
  name: string;
}

/** Argument input type for UserGistCommentsInput. */
export interface UserGistCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for UserGistsInput. */
export interface UserGistsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for gists returned from the connection */
  orderBy?: GistOrder;
  /** Filters Gists according to privacy. */
  privacy?: GistPrivacy;
}

/** Argument input type for UserHovercardInput. */
export interface UserHovercardInput {
  /** The ID of the subject to get the hovercard in the context of */
  primarySubjectId?: ID;
}

/** Argument input type for UserIsSponsoredByInput. */
export interface UserIsSponsoredByInput {
  /** The target account's login. */
  accountLogin: string;
}

/** Argument input type for UserIssueCommentsInput. */
export interface UserIssueCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for issue comments returned from the connection. */
  orderBy?: IssueCommentOrder;
}

/** Argument input type for UserIssuesInput. */
export interface UserIssuesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Filtering options for issues returned from the connection. */
  filterBy?: IssueFilters;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** A list of label names to filter the pull requests by. */
  labels?: string[];
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for issues returned from the connection. */
  orderBy?: IssueOrder;
  /** A list of states to filter the issues by. */
  states?: IssueState[];
}

/** Argument input type for UserOrganizationInput. */
export interface UserOrganizationInput {
  /** The login of the organization to find. */
  login: string;
}

/** Argument input type for UserOrganizationVerifiedDomainEmailsInput. */
export interface UserOrganizationVerifiedDomainEmailsInput {
  /** The login of the organization to match verified domains from. */
  login: string;
}

/** Argument input type for UserOrganizationsInput. */
export interface UserOrganizationsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for UserPackagesInput. */
export interface UserPackagesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Find packages by their names. */
  names?: Maybe<string>[];
  /** Ordering of the returned packages. */
  orderBy?: PackageOrder;
  /** Filter registry package by type. */
  packageType?: PackageType;
  /** Find packages in a repository by ID. */
  repositoryId?: ID;
}

/** Argument input type for UserPinnableItemsInput. */
export interface UserPinnableItemsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filter the types of pinnable items that are returned. */
  types?: PinnableItemType[];
}

/** Argument input type for UserPinnedItemsInput. */
export interface UserPinnedItemsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filter the types of pinned items that are returned. */
  types?: PinnableItemType[];
}

/** Argument input type for UserProjectInput. */
export interface UserProjectInput {
  /** The project number to find. */
  number: number;
}

/** Argument input type for UserProjectsInput. */
export interface UserProjectsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for projects returned from the connection */
  orderBy?: ProjectOrder;
  /** Query to search projects by, currently only searching by name. */
  search?: string;
  /** A list of states to filter the projects by. */
  states?: ProjectState[];
}

/** Argument input type for UserPublicKeysInput. */
export interface UserPublicKeysInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for UserPullRequestsInput. */
export interface UserPullRequestsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** The base ref name to filter the pull requests by. */
  baseRefName?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** The head ref name to filter the pull requests by. */
  headRefName?: string;
  /** A list of label names to filter the pull requests by. */
  labels?: string[];
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for pull requests returned from the connection. */
  orderBy?: IssueOrder;
  /** A list of states to filter the pull requests by. */
  states?: PullRequestState[];
}

/** Argument input type for UserRepositoriesInput. */
export interface UserRepositoriesInput {
  /** Array of viewer's affiliation options for repositories returned from the
    connection. For example, OWNER will include only repositories that the
    current viewer owns. */
  affiliations?: Maybe<RepositoryAffiliation>[];
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** If non-null, filters repositories according to whether they are forks of another repository */
  isFork?: boolean;
  /** If non-null, filters repositories according to whether they have been locked */
  isLocked?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for repositories returned from the connection */
  orderBy?: RepositoryOrder;
  /** Array of owner's affiliation options for repositories returned from the
    connection. For example, OWNER will include only repositories that the
    organization or user being viewed owns. */
  ownerAffiliations?: Maybe<RepositoryAffiliation>[];
  /** If non-null, filters repositories according to privacy */
  privacy?: RepositoryPrivacy;
}

/** Argument input type for UserRepositoriesContributedToInput. */
export interface UserRepositoriesContributedToInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** If non-null, include only the specified types of contributions. The
    GitHub.com UI uses [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY] */
  contributionTypes?: Maybe<RepositoryContributionType>[];
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** If true, include user repositories */
  includeUserRepositories?: boolean;
  /** If non-null, filters repositories according to whether they have been locked */
  isLocked?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for repositories returned from the connection */
  orderBy?: RepositoryOrder;
  /** If non-null, filters repositories according to privacy */
  privacy?: RepositoryPrivacy;
}

/** Argument input type for UserRepositoryInput. */
export interface UserRepositoryInput {
  /** Name of Repository to find. */
  name: string;
}

/** Argument input type for UserRepositoryDiscussionCommentsInput. */
export interface UserRepositoryDiscussionCommentsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Filter discussion comments to only those that were marked as the answer */
  onlyAnswers?: boolean;
  /** Filter discussion comments to only those in a specific repository. */
  repositoryId?: ID;
}

/** Argument input type for UserRepositoryDiscussionsInput. */
export interface UserRepositoryDiscussionsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Filter discussions to only those that have been answered or not. Defaults to
    including both answered and unanswered discussions. */
  answered?: boolean;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for discussions returned from the connection. */
  orderBy?: DiscussionOrder;
  /** Filter discussions to only those in a specific repository. */
  repositoryId?: ID;
}

/** Argument input type for UserSavedRepliesInput. */
export interface UserSavedRepliesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** The field to order saved replies by. */
  orderBy?: SavedReplyOrder;
}

/** Argument input type for UserSponsorshipsAsMaintainerInput. */
export interface UserSponsorshipsAsMaintainerInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Whether or not to include private sponsorships in the result set */
  includePrivate?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for sponsorships returned from this connection. If left
    blank, the sponsorships will be ordered based on relevancy to the viewer. */
  orderBy?: SponsorshipOrder;
}

/** Argument input type for UserSponsorshipsAsSponsorInput. */
export interface UserSponsorshipsAsSponsorInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for sponsorships returned from this connection. If left
    blank, the sponsorships will be ordered based on relevancy to the viewer. */
  orderBy?: SponsorshipOrder;
}

/** Argument input type for UserStarredRepositoriesInput. */
export interface UserStarredRepositoriesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Order for connection */
  orderBy?: StarOrder;
  /** Filters starred repositories to only return repositories owned by the viewer. */
  ownedByViewer?: boolean;
}

/** Argument input type for UserTopRepositoriesInput. */
export interface UserTopRepositoriesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for repositories returned from the connection */
  orderBy: RepositoryOrder;
  /** How far back in time to fetch contributed repositories */
  since?: DateTime;
}

/** Argument input type for UserWatchingInput. */
export interface UserWatchingInput {
  /** Affiliation options for repositories returned from the connection. If none
    specified, the results will include repositories for which the current
    viewer is an owner or collaborator, or member. */
  affiliations?: Maybe<RepositoryAffiliation>[];
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** If non-null, filters repositories according to whether they have been locked */
  isLocked?: boolean;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for repositories returned from the connection */
  orderBy?: RepositoryOrder;
  /** Array of owner's affiliation options for repositories returned from the
    connection. For example, OWNER will include only repositories that the
    organization or user being viewed owns. */
  ownerAffiliations?: Maybe<RepositoryAffiliation>[];
  /** If non-null, filters repositories according to privacy */
  privacy?: RepositoryPrivacy;
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export interface User {
  /** Determine if this repository owner has any items that can be pinned to their profile. */
  anyPinnableItems(
    root: ParentType<User>,
    args: UserAnyPinnableItemsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<boolean>;
  /** A URL pointing to the user's public avatar. */
  avatarUrl(
    root: ParentType<User>,
    args: UserAvatarUrlInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<URI>;
  /** The user's public profile bio. */
  bio?: string;
  /** The user's public profile bio as HTML. */
  bioHTML: HTML;
  /** Could this user receive email notifications, if the organization had notification restrictions enabled? */
  canReceiveOrganizationEmailsWhenNotificationsRestricted(
    root: ParentType<User>,
    args: UserCanReceiveOrganizationEmailsWhenNotificationsRestrictedInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<boolean>;
  /** A list of commit comments made by this user. */
  commitComments(
    root: ParentType<User>,
    args: UserCommitCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<CommitCommentConnection>;
  /** The user's public profile company. */
  company?: string;
  /** The user's public profile company as HTML. */
  companyHTML: HTML;
  /** The collection of contributions this user has made to different repositories. */
  contributionsCollection(
    root: ParentType<User>,
    args: UserContributionsCollectionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ContributionsCollection>;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The user's publicly visible profile email. */
  email: string;
  /** A list of users the given user is followed by. */
  followers(
    root: ParentType<User>,
    args: UserFollowersInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<FollowerConnection>;
  /** A list of users the given user is following. */
  following(
    root: ParentType<User>,
    args: UserFollowingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<FollowingConnection>;
  /** Find gist by repo name. */
  gist?(
    root: ParentType<User>,
    args: UserGistInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Gist>>;
  /** A list of gist comments made by this user. */
  gistComments(
    root: ParentType<User>,
    args: UserGistCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<GistCommentConnection>;
  /** A list of the Gists the user has created. */
  gists(
    root: ParentType<User>,
    args: UserGistsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<GistConnection>;
  /** True if this user/organization has a GitHub Sponsors listing. */
  hasSponsorsListing: boolean;
  /** The hovercard information for this user in a given context */
  hovercard(
    root: ParentType<User>,
    args: UserHovercardInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Hovercard>;
  id: ID;
  /** The interaction ability settings for this user. */
  interactionAbility?: RepositoryInteractionAbility;
  /** Whether or not this user is a participant in the GitHub Security Bug Bounty. */
  isBountyHunter: boolean;
  /** Whether or not this user is a participant in the GitHub Campus Experts Program. */
  isCampusExpert: boolean;
  /** Whether or not this user is a GitHub Developer Program member. */
  isDeveloperProgramMember: boolean;
  /** Whether or not this user is a GitHub employee. */
  isEmployee: boolean;
  /** Whether or not this user is a member of the GitHub Stars Program. */
  isGitHubStar: boolean;
  /** Whether or not the user has marked themselves as for hire. */
  isHireable: boolean;
  /** Whether or not this user is a site administrator. */
  isSiteAdmin: boolean;
  /** Check if the given account is sponsoring this user/organization. */
  isSponsoredBy(
    root: ParentType<User>,
    args: UserIsSponsoredByInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<boolean>;
  /** True if the viewer is sponsored by this user/organization. */
  isSponsoringViewer: boolean;
  /** Whether or not this user is the viewing user. */
  isViewer: boolean;
  /** A list of issue comments made by this user. */
  issueComments(
    root: ParentType<User>,
    args: UserIssueCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IssueCommentConnection>;
  /** A list of issues associated with this user. */
  issues(
    root: ParentType<User>,
    args: UserIssuesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<IssueConnection>;
  /** Showcases a selection of repositories and gists that the profile owner has
    either curated or that have been selected automatically based on popularity. */
  itemShowcase: ProfileItemShowcase;
  /** The user's public profile location. */
  location?: string;
  /** The username used to login. */
  login: string;
  /** The user's public profile name. */
  name?: string;
  /** Find an organization by its login that the user belongs to. */
  organization?(
    root: ParentType<User>,
    args: UserOrganizationInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Organization>>;
  /** Verified email addresses that match verified domains for a specified organization the user is a member of. */
  organizationVerifiedDomainEmails(
    root: ParentType<User>,
    args: UserOrganizationVerifiedDomainEmailsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<string[]>;
  /** A list of organizations the user belongs to. */
  organizations(
    root: ParentType<User>,
    args: UserOrganizationsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<OrganizationConnection>;
  /** A list of packages under the owner. */
  packages(
    root: ParentType<User>,
    args: UserPackagesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PackageConnection>;
  /** A list of repositories and gists this profile owner can pin to their profile. */
  pinnableItems(
    root: ParentType<User>,
    args: UserPinnableItemsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PinnableItemConnection>;
  /** A list of repositories and gists this profile owner has pinned to their profile */
  pinnedItems(
    root: ParentType<User>,
    args: UserPinnedItemsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PinnableItemConnection>;
  /** Returns how many more items this profile owner can pin to their profile. */
  pinnedItemsRemaining: number;
  /** Find project by number. */
  project?(
    root: ParentType<User>,
    args: UserProjectInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Project>>;
  /** A list of projects under the owner. */
  projects(
    root: ParentType<User>,
    args: UserProjectsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<ProjectConnection>;
  /** The HTTP path listing user's projects */
  projectsResourcePath: URI;
  /** The HTTP URL listing user's projects */
  projectsUrl: URI;
  /** A list of public keys associated with this user. */
  publicKeys(
    root: ParentType<User>,
    args: UserPublicKeysInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PublicKeyConnection>;
  /** A list of pull requests associated with this user. */
  pullRequests(
    root: ParentType<User>,
    args: UserPullRequestsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<PullRequestConnection>;
  /** A list of repositories that the user owns. */
  repositories(
    root: ParentType<User>,
    args: UserRepositoriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<RepositoryConnection>;
  /** A list of repositories that the user recently contributed to. */
  repositoriesContributedTo(
    root: ParentType<User>,
    args: UserRepositoriesContributedToInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<RepositoryConnection>;
  /** Find Repository. */
  repository?(
    root: ParentType<User>,
    args: UserRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Repository>>;
  /** Discussion comments this user has authored. */
  repositoryDiscussionComments(
    root: ParentType<User>,
    args: UserRepositoryDiscussionCommentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DiscussionCommentConnection>;
  /** Discussions this user has started. */
  repositoryDiscussions(
    root: ParentType<User>,
    args: UserRepositoryDiscussionsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DiscussionConnection>;
  /** The HTTP path for this user */
  resourcePath: URI;
  /** Replies this user has saved */
  savedReplies?(
    root: ParentType<User>,
    args: UserSavedRepliesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<SavedReplyConnection>>;
  /** The GitHub Sponsors listing for this user or organization. */
  sponsorsListing?: SponsorsListing;
  /** The viewer's sponsorship of this entity. */
  sponsorshipForViewerAsSponsor?: Sponsorship;
  /** This object's sponsorships as the maintainer. */
  sponsorshipsAsMaintainer(
    root: ParentType<User>,
    args: UserSponsorshipsAsMaintainerInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SponsorshipConnection>;
  /** This object's sponsorships as the sponsor. */
  sponsorshipsAsSponsor(
    root: ParentType<User>,
    args: UserSponsorshipsAsSponsorInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SponsorshipConnection>;
  /** Repositories the user has starred. */
  starredRepositories(
    root: ParentType<User>,
    args: UserStarredRepositoriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<StarredRepositoryConnection>;
  /** The user's description of what they're currently doing. */
  status?: UserStatus;
  /** Repositories the user has contributed to, ordered by contribution rank, plus repositories the user has created */
  topRepositories(
    root: ParentType<User>,
    args: UserTopRepositoriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<RepositoryConnection>;
  /** The user's Twitter username. */
  twitterUsername?: string;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this user */
  url: URI;
  /** Can the viewer pin repositories and gists to the profile? */
  viewerCanChangePinnedItems: boolean;
  /** Can the current viewer create new projects on this owner. */
  viewerCanCreateProjects: boolean;
  /** Whether or not the viewer is able to follow the user. */
  viewerCanFollow: boolean;
  /** Whether or not the viewer is able to sponsor this user/organization. */
  viewerCanSponsor: boolean;
  /** Whether or not this user is followed by the viewer. */
  viewerIsFollowing: boolean;
  /** True if the viewer is sponsoring this user/organization. */
  viewerIsSponsoring: boolean;
  /** A list of repositories the given user is watching. */
  watching(
    root: ParentType<User>,
    args: UserWatchingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<RepositoryConnection>;
  /** A URL pointing to the user's public website/blog. */
  websiteUrl?: URI;
}

/** Represents a 'user_blocked' event on a given user. */
export interface UserBlockedEvent {
  /** Identifies the actor who performed the event. */
  actor?: Actor;
  /** Number of days that the user was blocked for. */
  blockDuration: UserBlockDuration;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  id: ID;
  /** The user who was blocked. */
  subject?: User;
}

/** The connection type for User. */
export interface UserConnection {
  /** A list of edges. */
  edges?: Maybe<UserEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<User>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edit on user content */
export interface UserContentEdit {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the date and time when the object was deleted. */
  deletedAt?: DateTime;
  /** The actor who deleted this content */
  deletedBy?: Actor;
  /** A summary of the changes for this edit */
  diff?: string;
  /** When this content was edited */
  editedAt: DateTime;
  /** The actor who edited this content */
  editor?: Actor;
  id: ID;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
}

/** A list of edits to content. */
export interface UserContentEditConnection {
  /** A list of edges. */
  edges?: Maybe<UserContentEditEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<UserContentEdit>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface UserContentEditEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: UserContentEdit;
}

/** Represents a user. */
export interface UserEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: User;
}

/** Email attributes from External Identity */
export interface UserEmailMetadata {
  /** Boolean to identify primary emails */
  primary?: boolean;
  /** Type of email */
  type?: string;
  /** Email id */
  value: string;
}

/** The user's description of what they're currently doing. */
export interface UserStatus {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** An emoji summarizing the user's status. */
  emoji?: string;
  /** The status emoji as HTML. */
  emojiHTML?: HTML;
  /** If set, the status will not be shown after this date. */
  expiresAt?: DateTime;
  id: ID;
  /** Whether this status indicates the user is not fully available on GitHub. */
  indicatesLimitedAvailability: boolean;
  /** A brief message describing what the user is doing. */
  message?: string;
  /** The organization whose members can see this status. If null, this status is publicly visible. */
  organization?: Organization;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The user who has this status. */
  user: User;
}

/** The connection type for UserStatus. */
export interface UserStatusConnection {
  /** A list of edges. */
  edges?: Maybe<UserStatusEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<UserStatus>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface UserStatusEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: UserStatus;
}

/** A domain that can be verified or approved for an organization or an enterprise. */
export interface VerifiableDomain {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The DNS host name that should be used for verification. */
  dnsHostName?: URI;
  /** The unicode encoded domain. */
  domain: URI;
  /** Whether a TXT record for verification with the expected host name was found. */
  hasFoundHostName: boolean;
  /** Whether a TXT record for verification with the expected verification token was found. */
  hasFoundVerificationToken: boolean;
  id: ID;
  /** Whether or not the domain is approved. */
  isApproved: boolean;
  /** Whether this domain is required to exist for an organization or enterprise policy to be enforced. */
  isRequiredForPolicyEnforcement: boolean;
  /** Whether or not the domain is verified. */
  isVerified: boolean;
  /** The owner of the domain. */
  owner: VerifiableDomainOwner;
  /** The punycode encoded domain. */
  punycodeEncodedDomain: URI;
  /** The time that the current verification token will expire. */
  tokenExpirationTime?: DateTime;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The current verification token for the domain. */
  verificationToken?: string;
}

/** The connection type for VerifiableDomain. */
export interface VerifiableDomainConnection {
  /** A list of edges. */
  edges?: Maybe<VerifiableDomainEdge>[];
  /** A list of nodes. */
  nodes?: Maybe<VerifiableDomain>[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: number;
}

/** An edge in a connection. */
export interface VerifiableDomainEdge {
  /** A cursor for use in pagination. */
  cursor: string;
  /** The item at the end of the edge. */
  node?: VerifiableDomain;
}

/** Autogenerated return type of VerifyVerifiableDomain */
export interface VerifyVerifiableDomainPayload {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: string;
  /** The verifiable domain that was verified. */
  domain?: VerifiableDomain;
}

/** A hovercard context with a message describing how the viewer is related. */
export interface ViewerHovercardContext {
  /** A string describing this context */
  message: string;
  /** An octicon to accompany this context */
  octicon: string;
  /** Identifies the user who is related to this context. */
  viewer: User;
}

/** A workflow contains meta information about an Actions workflow file. */
export interface Workflow {
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  id: ID;
  /** The name of the workflow. */
  name: string;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
}

/** Argument input type for WorkflowRunDeploymentReviewsInput. */
export interface WorkflowRunDeploymentReviewsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** Argument input type for WorkflowRunPendingDeploymentRequestsInput. */
export interface WorkflowRunPendingDeploymentRequestsInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
}

/** A workflow run. */
export interface WorkflowRun {
  /** The check suite this workflow run belongs to. */
  checkSuite: CheckSuite;
  /** Identifies the date and time when the object was created. */
  createdAt: DateTime;
  /** Identifies the primary key from the database. */
  databaseId?: number;
  /** The log of deployment reviews */
  deploymentReviews(
    root: ParentType<WorkflowRun>,
    args: WorkflowRunDeploymentReviewsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DeploymentReviewConnection>;
  id: ID;
  /** The pending deployment requests of all check runs in this workflow run */
  pendingDeploymentRequests(
    root: ParentType<WorkflowRun>,
    args: WorkflowRunPendingDeploymentRequestsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<DeploymentRequestConnection>;
  /** The HTTP path for this workflow run */
  resourcePath: URI;
  /** A number that uniquely identifies this workflow run in its parent workflow. */
  runNumber: number;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: DateTime;
  /** The HTTP URL for this workflow run */
  url: URI;
  /** The workflow executed in this workflow run. */
  workflow: Workflow;
}

/** Types that can be assigned to issues. */
export type Assignee = Bot | Mannequin | Organization | User;

/** Types that can initiate an audit log event. */
export type AuditEntryActor = Bot | Organization | User;

/** The object which triggered a `ClosedEvent`. */
export type Closer = Commit | PullRequest;

/** Represents either a issue the viewer can access or a restricted contribution. */
export type CreatedIssueOrRestrictedContribution =
  | CreatedIssueContribution
  | RestrictedContribution;

/** Represents either a pull request the viewer can access or a restricted contribution. */
export type CreatedPullRequestOrRestrictedContribution =
  | CreatedPullRequestContribution
  | RestrictedContribution;

/** Represents either a repository the viewer can access or a restricted contribution. */
export type CreatedRepositoryOrRestrictedContribution =
  | CreatedRepositoryContribution
  | RestrictedContribution;

/** Users and teams. */
export type DeploymentReviewer = Team | User;

/** An object that is a member of an enterprise. */
export type EnterpriseMember = EnterpriseUserAccount | User;

/** Types that can own an IP allow list. */
export type IpAllowListOwner = App | Enterprise | Organization;

/** Used for return value of Repository.issueOrPullRequest. */
export type IssueOrPullRequest = Issue | PullRequest;

/** An item in an issue timeline */
export type IssueTimelineItem =
  | AssignedEvent
  | ClosedEvent
  | Commit
  | CrossReferencedEvent
  | DemilestonedEvent
  | IssueComment
  | LabeledEvent
  | LockedEvent
  | MilestonedEvent
  | ReferencedEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | SubscribedEvent
  | TransferredEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnsubscribedEvent
  | UserBlockedEvent;

/** An item in an issue timeline */
export type IssueTimelineItems =
  | AddedToProjectEvent
  | AssignedEvent
  | ClosedEvent
  | CommentDeletedEvent
  | ConnectedEvent
  | ConvertedNoteToIssueEvent
  | CrossReferencedEvent
  | DemilestonedEvent
  | DisconnectedEvent
  | IssueComment
  | LabeledEvent
  | LockedEvent
  | MarkedAsDuplicateEvent
  | MentionedEvent
  | MilestonedEvent
  | MovedColumnsInProjectEvent
  | PinnedEvent
  | ReferencedEvent
  | RemovedFromProjectEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | SubscribedEvent
  | TransferredEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnmarkedAsDuplicateEvent
  | UnpinnedEvent
  | UnsubscribedEvent
  | UserBlockedEvent;

/** Types that can be inside a Milestone. */
export type MilestoneItem = Issue | PullRequest;

/** Types of memberships that can be restored for an Organization member. */
export type OrgRestoreMemberAuditEntryMembership =
  | OrgRestoreMemberMembershipOrganizationAuditEntryData
  | OrgRestoreMemberMembershipRepositoryAuditEntryData
  | OrgRestoreMemberMembershipTeamAuditEntryData;

/** An audit entry in an organization audit log. */
export type OrganizationAuditEntry =
  | MembersCanDeleteReposClearAuditEntry
  | MembersCanDeleteReposDisableAuditEntry
  | MembersCanDeleteReposEnableAuditEntry
  | OauthApplicationCreateAuditEntry
  | OrgAddBillingManagerAuditEntry
  | OrgAddMemberAuditEntry
  | OrgBlockUserAuditEntry
  | OrgConfigDisableCollaboratorsOnlyAuditEntry
  | OrgConfigEnableCollaboratorsOnlyAuditEntry
  | OrgCreateAuditEntry
  | OrgDisableOauthAppRestrictionsAuditEntry
  | OrgDisableSamlAuditEntry
  | OrgDisableTwoFactorRequirementAuditEntry
  | OrgEnableOauthAppRestrictionsAuditEntry
  | OrgEnableSamlAuditEntry
  | OrgEnableTwoFactorRequirementAuditEntry
  | OrgInviteMemberAuditEntry
  | OrgInviteToBusinessAuditEntry
  | OrgOauthAppAccessApprovedAuditEntry
  | OrgOauthAppAccessDeniedAuditEntry
  | OrgOauthAppAccessRequestedAuditEntry
  | OrgRemoveBillingManagerAuditEntry
  | OrgRemoveMemberAuditEntry
  | OrgRemoveOutsideCollaboratorAuditEntry
  | OrgRestoreMemberAuditEntry
  | OrgUnblockUserAuditEntry
  | OrgUpdateDefaultRepositoryPermissionAuditEntry
  | OrgUpdateMemberAuditEntry
  | OrgUpdateMemberRepositoryCreationPermissionAuditEntry
  | OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
  | PrivateRepositoryForkingDisableAuditEntry
  | PrivateRepositoryForkingEnableAuditEntry
  | RepoAccessAuditEntry
  | RepoAddMemberAuditEntry
  | RepoAddTopicAuditEntry
  | RepoArchivedAuditEntry
  | RepoChangeMergeSettingAuditEntry
  | RepoConfigDisableAnonymousGitAccessAuditEntry
  | RepoConfigDisableCollaboratorsOnlyAuditEntry
  | RepoConfigDisableContributorsOnlyAuditEntry
  | RepoConfigDisableSockpuppetDisallowedAuditEntry
  | RepoConfigEnableAnonymousGitAccessAuditEntry
  | RepoConfigEnableCollaboratorsOnlyAuditEntry
  | RepoConfigEnableContributorsOnlyAuditEntry
  | RepoConfigEnableSockpuppetDisallowedAuditEntry
  | RepoConfigLockAnonymousGitAccessAuditEntry
  | RepoConfigUnlockAnonymousGitAccessAuditEntry
  | RepoCreateAuditEntry
  | RepoDestroyAuditEntry
  | RepoRemoveMemberAuditEntry
  | RepoRemoveTopicAuditEntry
  | RepositoryVisibilityChangeDisableAuditEntry
  | RepositoryVisibilityChangeEnableAuditEntry
  | TeamAddMemberAuditEntry
  | TeamAddRepositoryAuditEntry
  | TeamChangeParentTeamAuditEntry
  | TeamRemoveMemberAuditEntry
  | TeamRemoveRepositoryAuditEntry;

/** Types that can grant permissions on a repository to a user */
export type PermissionGranter = Organization | Repository | Team;

/** Types that can be pinned to a profile page. */
export type PinnableItem = Gist | Repository;

/** Types that can be inside Project Cards. */
export type ProjectCardItem = Issue | PullRequest;

/** An item in a pull request timeline */
export type PullRequestTimelineItem =
  | AssignedEvent
  | BaseRefDeletedEvent
  | BaseRefForcePushedEvent
  | ClosedEvent
  | Commit
  | CommitCommentThread
  | CrossReferencedEvent
  | DemilestonedEvent
  | DeployedEvent
  | DeploymentEnvironmentChangedEvent
  | HeadRefDeletedEvent
  | HeadRefForcePushedEvent
  | HeadRefRestoredEvent
  | IssueComment
  | LabeledEvent
  | LockedEvent
  | MergedEvent
  | MilestonedEvent
  | PullRequestReview
  | PullRequestReviewComment
  | PullRequestReviewThread
  | ReferencedEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | ReviewDismissedEvent
  | ReviewRequestRemovedEvent
  | ReviewRequestedEvent
  | SubscribedEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnsubscribedEvent
  | UserBlockedEvent;

/** An item in a pull request timeline */
export type PullRequestTimelineItems =
  | AddedToProjectEvent
  | AssignedEvent
  | AutoMergeDisabledEvent
  | AutoMergeEnabledEvent
  | AutoRebaseEnabledEvent
  | AutoSquashEnabledEvent
  | AutomaticBaseChangeFailedEvent
  | AutomaticBaseChangeSucceededEvent
  | BaseRefChangedEvent
  | BaseRefDeletedEvent
  | BaseRefForcePushedEvent
  | ClosedEvent
  | CommentDeletedEvent
  | ConnectedEvent
  | ConvertToDraftEvent
  | ConvertedNoteToIssueEvent
  | CrossReferencedEvent
  | DemilestonedEvent
  | DeployedEvent
  | DeploymentEnvironmentChangedEvent
  | DisconnectedEvent
  | HeadRefDeletedEvent
  | HeadRefForcePushedEvent
  | HeadRefRestoredEvent
  | IssueComment
  | LabeledEvent
  | LockedEvent
  | MarkedAsDuplicateEvent
  | MentionedEvent
  | MergedEvent
  | MilestonedEvent
  | MovedColumnsInProjectEvent
  | PinnedEvent
  | PullRequestCommit
  | PullRequestCommitCommentThread
  | PullRequestReview
  | PullRequestReviewThread
  | PullRequestRevisionMarker
  | ReadyForReviewEvent
  | ReferencedEvent
  | RemovedFromProjectEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | ReviewDismissedEvent
  | ReviewRequestRemovedEvent
  | ReviewRequestedEvent
  | SubscribedEvent
  | TransferredEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnmarkedAsDuplicateEvent
  | UnpinnedEvent
  | UnsubscribedEvent
  | UserBlockedEvent;

/** Types that can be an actor. */
export type PushAllowanceActor = App | Team | User;

/** Types that can be assigned to reactions. */
export type Reactor = Bot | Mannequin | Organization | User;

/** Any referencable object */
export type ReferencedSubject = Issue | PullRequest;

/** An object which has a renamable title */
export type RenamedTitleSubject = Issue | PullRequest;

/** Types that can be requested reviewers. */
export type RequestedReviewer = Mannequin | Team | User;

/** Types that can be an actor. */
export type ReviewDismissalAllowanceActor = Team | User;

/** The results of a search. */
export type SearchResultItem =
  | App
  | Discussion
  | Issue
  | MarketplaceListing
  | Organization
  | PullRequest
  | Repository
  | User;

/** Entities that can sponsor others via GitHub Sponsors */
export type Sponsor = Organization | User;

/** Entities that can be sponsored via GitHub Sponsors */
export type SponsorableItem = Organization | User;

/** Types that can be inside a StatusCheckRollup context. */
export type StatusCheckRollupContext = CheckRun | StatusContext;

/** Types that can own a verifiable domain. */
export type VerifiableDomainOwner = Enterprise | Organization;

/** Argument input type for MutationAcceptEnterpriseAdministratorInvitationInput. */
export interface MutationAcceptEnterpriseAdministratorInvitationInput {
  /** Parameters for AcceptEnterpriseAdministratorInvitation */
  input: AcceptEnterpriseAdministratorInvitationInput;
}

/** Argument input type for MutationAcceptTopicSuggestionInput. */
export interface MutationAcceptTopicSuggestionInput {
  /** Parameters for AcceptTopicSuggestion */
  input: AcceptTopicSuggestionInput;
}

/** Argument input type for MutationAddAssigneesToAssignableInput. */
export interface MutationAddAssigneesToAssignableInput {
  /** Parameters for AddAssigneesToAssignable */
  input: AddAssigneesToAssignableInput;
}

/** Argument input type for MutationAddCommentInput. */
export interface MutationAddCommentInput {
  /** Parameters for AddComment */
  input: AddCommentInput;
}

/** Argument input type for MutationAddDiscussionCommentInput. */
export interface MutationAddDiscussionCommentInput {
  /** Parameters for AddDiscussionComment */
  input: AddDiscussionCommentInput;
}

/** Argument input type for MutationAddEnterpriseSupportEntitlementInput. */
export interface MutationAddEnterpriseSupportEntitlementInput {
  /** Parameters for AddEnterpriseSupportEntitlement */
  input: AddEnterpriseSupportEntitlementInput;
}

/** Argument input type for MutationAddLabelsToLabelableInput. */
export interface MutationAddLabelsToLabelableInput {
  /** Parameters for AddLabelsToLabelable */
  input: AddLabelsToLabelableInput;
}

/** Argument input type for MutationAddProjectCardInput. */
export interface MutationAddProjectCardInput {
  /** Parameters for AddProjectCard */
  input: AddProjectCardInput;
}

/** Argument input type for MutationAddProjectColumnInput. */
export interface MutationAddProjectColumnInput {
  /** Parameters for AddProjectColumn */
  input: AddProjectColumnInput;
}

/** Argument input type for MutationAddPullRequestReviewInput. */
export interface MutationAddPullRequestReviewInput {
  /** Parameters for AddPullRequestReview */
  input: AddPullRequestReviewInput;
}

/** Argument input type for MutationAddPullRequestReviewCommentInput. */
export interface MutationAddPullRequestReviewCommentInput {
  /** Parameters for AddPullRequestReviewComment */
  input: AddPullRequestReviewCommentInput;
}

/** Argument input type for MutationAddPullRequestReviewThreadInput. */
export interface MutationAddPullRequestReviewThreadInput {
  /** Parameters for AddPullRequestReviewThread */
  input: AddPullRequestReviewThreadInput;
}

/** Argument input type for MutationAddReactionInput. */
export interface MutationAddReactionInput {
  /** Parameters for AddReaction */
  input: AddReactionInput;
}

/** Argument input type for MutationAddStarInput. */
export interface MutationAddStarInput {
  /** Parameters for AddStar */
  input: AddStarInput;
}

/** Argument input type for MutationAddUpvoteInput. */
export interface MutationAddUpvoteInput {
  /** Parameters for AddUpvote */
  input: AddUpvoteInput;
}

/** Argument input type for MutationAddVerifiableDomainInput. */
export interface MutationAddVerifiableDomainInput {
  /** Parameters for AddVerifiableDomain */
  input: AddVerifiableDomainInput;
}

/** Argument input type for MutationApproveDeploymentsInput. */
export interface MutationApproveDeploymentsInput {
  /** Parameters for ApproveDeployments */
  input: ApproveDeploymentsInput;
}

/** Argument input type for MutationApproveVerifiableDomainInput. */
export interface MutationApproveVerifiableDomainInput {
  /** Parameters for ApproveVerifiableDomain */
  input: ApproveVerifiableDomainInput;
}

/** Argument input type for MutationArchiveRepositoryInput. */
export interface MutationArchiveRepositoryInput {
  /** Parameters for ArchiveRepository */
  input: ArchiveRepositoryInput;
}

/** Argument input type for MutationCancelEnterpriseAdminInvitationInput. */
export interface MutationCancelEnterpriseAdminInvitationInput {
  /** Parameters for CancelEnterpriseAdminInvitation */
  input: CancelEnterpriseAdminInvitationInput;
}

/** Argument input type for MutationChangeUserStatusInput. */
export interface MutationChangeUserStatusInput {
  /** Parameters for ChangeUserStatus */
  input: ChangeUserStatusInput;
}

/** Argument input type for MutationClearLabelsFromLabelableInput. */
export interface MutationClearLabelsFromLabelableInput {
  /** Parameters for ClearLabelsFromLabelable */
  input: ClearLabelsFromLabelableInput;
}

/** Argument input type for MutationCloneProjectInput. */
export interface MutationCloneProjectInput {
  /** Parameters for CloneProject */
  input: CloneProjectInput;
}

/** Argument input type for MutationCloneTemplateRepositoryInput. */
export interface MutationCloneTemplateRepositoryInput {
  /** Parameters for CloneTemplateRepository */
  input: CloneTemplateRepositoryInput;
}

/** Argument input type for MutationCloseIssueInput. */
export interface MutationCloseIssueInput {
  /** Parameters for CloseIssue */
  input: CloseIssueInput;
}

/** Argument input type for MutationClosePullRequestInput. */
export interface MutationClosePullRequestInput {
  /** Parameters for ClosePullRequest */
  input: ClosePullRequestInput;
}

/** Argument input type for MutationConvertProjectCardNoteToIssueInput. */
export interface MutationConvertProjectCardNoteToIssueInput {
  /** Parameters for ConvertProjectCardNoteToIssue */
  input: ConvertProjectCardNoteToIssueInput;
}

/** Argument input type for MutationConvertPullRequestToDraftInput. */
export interface MutationConvertPullRequestToDraftInput {
  /** Parameters for ConvertPullRequestToDraft */
  input: ConvertPullRequestToDraftInput;
}

/** Argument input type for MutationCreateBranchProtectionRuleInput. */
export interface MutationCreateBranchProtectionRuleInput {
  /** Parameters for CreateBranchProtectionRule */
  input: CreateBranchProtectionRuleInput;
}

/** Argument input type for MutationCreateCheckRunInput. */
export interface MutationCreateCheckRunInput {
  /** Parameters for CreateCheckRun */
  input: CreateCheckRunInput;
}

/** Argument input type for MutationCreateCheckSuiteInput. */
export interface MutationCreateCheckSuiteInput {
  /** Parameters for CreateCheckSuite */
  input: CreateCheckSuiteInput;
}

/** Argument input type for MutationCreateContentAttachmentInput. */
export interface MutationCreateContentAttachmentInput {
  /** Parameters for CreateContentAttachment */
  input: CreateContentAttachmentInput;
}

/** Argument input type for MutationCreateDeploymentInput. */
export interface MutationCreateDeploymentInput {
  /** Parameters for CreateDeployment */
  input: CreateDeploymentInput;
}

/** Argument input type for MutationCreateDeploymentStatusInput. */
export interface MutationCreateDeploymentStatusInput {
  /** Parameters for CreateDeploymentStatus */
  input: CreateDeploymentStatusInput;
}

/** Argument input type for MutationCreateDiscussionInput. */
export interface MutationCreateDiscussionInput {
  /** Parameters for CreateDiscussion */
  input: CreateDiscussionInput;
}

/** Argument input type for MutationCreateEnterpriseOrganizationInput. */
export interface MutationCreateEnterpriseOrganizationInput {
  /** Parameters for CreateEnterpriseOrganization */
  input: CreateEnterpriseOrganizationInput;
}

/** Argument input type for MutationCreateEnvironmentInput. */
export interface MutationCreateEnvironmentInput {
  /** Parameters for CreateEnvironment */
  input: CreateEnvironmentInput;
}

/** Argument input type for MutationCreateIpAllowListEntryInput. */
export interface MutationCreateIpAllowListEntryInput {
  /** Parameters for CreateIpAllowListEntry */
  input: CreateIpAllowListEntryInput;
}

/** Argument input type for MutationCreateIssueInput. */
export interface MutationCreateIssueInput {
  /** Parameters for CreateIssue */
  input: CreateIssueInput;
}

/** Argument input type for MutationCreateLabelInput. */
export interface MutationCreateLabelInput {
  /** Parameters for CreateLabel */
  input: CreateLabelInput;
}

/** Argument input type for MutationCreateProjectInput. */
export interface MutationCreateProjectInput {
  /** Parameters for CreateProject */
  input: CreateProjectInput;
}

/** Argument input type for MutationCreatePullRequestInput. */
export interface MutationCreatePullRequestInput {
  /** Parameters for CreatePullRequest */
  input: CreatePullRequestInput;
}

/** Argument input type for MutationCreateRefInput. */
export interface MutationCreateRefInput {
  /** Parameters for CreateRef */
  input: CreateRefInput;
}

/** Argument input type for MutationCreateRepositoryInput. */
export interface MutationCreateRepositoryInput {
  /** Parameters for CreateRepository */
  input: CreateRepositoryInput;
}

/** Argument input type for MutationCreateTeamDiscussionInput. */
export interface MutationCreateTeamDiscussionInput {
  /** Parameters for CreateTeamDiscussion */
  input: CreateTeamDiscussionInput;
}

/** Argument input type for MutationCreateTeamDiscussionCommentInput. */
export interface MutationCreateTeamDiscussionCommentInput {
  /** Parameters for CreateTeamDiscussionComment */
  input: CreateTeamDiscussionCommentInput;
}

/** Argument input type for MutationDeclineTopicSuggestionInput. */
export interface MutationDeclineTopicSuggestionInput {
  /** Parameters for DeclineTopicSuggestion */
  input: DeclineTopicSuggestionInput;
}

/** Argument input type for MutationDeleteBranchProtectionRuleInput. */
export interface MutationDeleteBranchProtectionRuleInput {
  /** Parameters for DeleteBranchProtectionRule */
  input: DeleteBranchProtectionRuleInput;
}

/** Argument input type for MutationDeleteDeploymentInput. */
export interface MutationDeleteDeploymentInput {
  /** Parameters for DeleteDeployment */
  input: DeleteDeploymentInput;
}

/** Argument input type for MutationDeleteDiscussionInput. */
export interface MutationDeleteDiscussionInput {
  /** Parameters for DeleteDiscussion */
  input: DeleteDiscussionInput;
}

/** Argument input type for MutationDeleteDiscussionCommentInput. */
export interface MutationDeleteDiscussionCommentInput {
  /** Parameters for DeleteDiscussionComment */
  input: DeleteDiscussionCommentInput;
}

/** Argument input type for MutationDeleteEnvironmentInput. */
export interface MutationDeleteEnvironmentInput {
  /** Parameters for DeleteEnvironment */
  input: DeleteEnvironmentInput;
}

/** Argument input type for MutationDeleteIpAllowListEntryInput. */
export interface MutationDeleteIpAllowListEntryInput {
  /** Parameters for DeleteIpAllowListEntry */
  input: DeleteIpAllowListEntryInput;
}

/** Argument input type for MutationDeleteIssueInput. */
export interface MutationDeleteIssueInput {
  /** Parameters for DeleteIssue */
  input: DeleteIssueInput;
}

/** Argument input type for MutationDeleteIssueCommentInput. */
export interface MutationDeleteIssueCommentInput {
  /** Parameters for DeleteIssueComment */
  input: DeleteIssueCommentInput;
}

/** Argument input type for MutationDeleteLabelInput. */
export interface MutationDeleteLabelInput {
  /** Parameters for DeleteLabel */
  input: DeleteLabelInput;
}

/** Argument input type for MutationDeletePackageVersionInput. */
export interface MutationDeletePackageVersionInput {
  /** Parameters for DeletePackageVersion */
  input: DeletePackageVersionInput;
}

/** Argument input type for MutationDeleteProjectInput. */
export interface MutationDeleteProjectInput {
  /** Parameters for DeleteProject */
  input: DeleteProjectInput;
}

/** Argument input type for MutationDeleteProjectCardInput. */
export interface MutationDeleteProjectCardInput {
  /** Parameters for DeleteProjectCard */
  input: DeleteProjectCardInput;
}

/** Argument input type for MutationDeleteProjectColumnInput. */
export interface MutationDeleteProjectColumnInput {
  /** Parameters for DeleteProjectColumn */
  input: DeleteProjectColumnInput;
}

/** Argument input type for MutationDeletePullRequestReviewInput. */
export interface MutationDeletePullRequestReviewInput {
  /** Parameters for DeletePullRequestReview */
  input: DeletePullRequestReviewInput;
}

/** Argument input type for MutationDeletePullRequestReviewCommentInput. */
export interface MutationDeletePullRequestReviewCommentInput {
  /** Parameters for DeletePullRequestReviewComment */
  input: DeletePullRequestReviewCommentInput;
}

/** Argument input type for MutationDeleteRefInput. */
export interface MutationDeleteRefInput {
  /** Parameters for DeleteRef */
  input: DeleteRefInput;
}

/** Argument input type for MutationDeleteTeamDiscussionInput. */
export interface MutationDeleteTeamDiscussionInput {
  /** Parameters for DeleteTeamDiscussion */
  input: DeleteTeamDiscussionInput;
}

/** Argument input type for MutationDeleteTeamDiscussionCommentInput. */
export interface MutationDeleteTeamDiscussionCommentInput {
  /** Parameters for DeleteTeamDiscussionComment */
  input: DeleteTeamDiscussionCommentInput;
}

/** Argument input type for MutationDeleteVerifiableDomainInput. */
export interface MutationDeleteVerifiableDomainInput {
  /** Parameters for DeleteVerifiableDomain */
  input: DeleteVerifiableDomainInput;
}

/** Argument input type for MutationDisablePullRequestAutoMergeInput. */
export interface MutationDisablePullRequestAutoMergeInput {
  /** Parameters for DisablePullRequestAutoMerge */
  input: DisablePullRequestAutoMergeInput;
}

/** Argument input type for MutationDismissPullRequestReviewInput. */
export interface MutationDismissPullRequestReviewInput {
  /** Parameters for DismissPullRequestReview */
  input: DismissPullRequestReviewInput;
}

/** Argument input type for MutationEnablePullRequestAutoMergeInput. */
export interface MutationEnablePullRequestAutoMergeInput {
  /** Parameters for EnablePullRequestAutoMerge */
  input: EnablePullRequestAutoMergeInput;
}

/** Argument input type for MutationFollowUserInput. */
export interface MutationFollowUserInput {
  /** Parameters for FollowUser */
  input: FollowUserInput;
}

/** Argument input type for MutationImportProjectInput. */
export interface MutationImportProjectInput {
  /** Parameters for ImportProject */
  input: ImportProjectInput;
}

/** Argument input type for MutationInviteEnterpriseAdminInput. */
export interface MutationInviteEnterpriseAdminInput {
  /** Parameters for InviteEnterpriseAdmin */
  input: InviteEnterpriseAdminInput;
}

/** Argument input type for MutationLinkRepositoryToProjectInput. */
export interface MutationLinkRepositoryToProjectInput {
  /** Parameters for LinkRepositoryToProject */
  input: LinkRepositoryToProjectInput;
}

/** Argument input type for MutationLockLockableInput. */
export interface MutationLockLockableInput {
  /** Parameters for LockLockable */
  input: LockLockableInput;
}

/** Argument input type for MutationMarkDiscussionCommentAsAnswerInput. */
export interface MutationMarkDiscussionCommentAsAnswerInput {
  /** Parameters for MarkDiscussionCommentAsAnswer */
  input: MarkDiscussionCommentAsAnswerInput;
}

/** Argument input type for MutationMarkFileAsViewedInput. */
export interface MutationMarkFileAsViewedInput {
  /** Parameters for MarkFileAsViewed */
  input: MarkFileAsViewedInput;
}

/** Argument input type for MutationMarkPullRequestReadyForReviewInput. */
export interface MutationMarkPullRequestReadyForReviewInput {
  /** Parameters for MarkPullRequestReadyForReview */
  input: MarkPullRequestReadyForReviewInput;
}

/** Argument input type for MutationMergeBranchInput. */
export interface MutationMergeBranchInput {
  /** Parameters for MergeBranch */
  input: MergeBranchInput;
}

/** Argument input type for MutationMergePullRequestInput. */
export interface MutationMergePullRequestInput {
  /** Parameters for MergePullRequest */
  input: MergePullRequestInput;
}

/** Argument input type for MutationMinimizeCommentInput. */
export interface MutationMinimizeCommentInput {
  /** Parameters for MinimizeComment */
  input: MinimizeCommentInput;
}

/** Argument input type for MutationMoveProjectCardInput. */
export interface MutationMoveProjectCardInput {
  /** Parameters for MoveProjectCard */
  input: MoveProjectCardInput;
}

/** Argument input type for MutationMoveProjectColumnInput. */
export interface MutationMoveProjectColumnInput {
  /** Parameters for MoveProjectColumn */
  input: MoveProjectColumnInput;
}

/** Argument input type for MutationPinIssueInput. */
export interface MutationPinIssueInput {
  /** Parameters for PinIssue */
  input: PinIssueInput;
}

/** Argument input type for MutationRegenerateEnterpriseIdentityProviderRecoveryCodesInput. */
export interface MutationRegenerateEnterpriseIdentityProviderRecoveryCodesInput {
  /** Parameters for RegenerateEnterpriseIdentityProviderRecoveryCodes */
  input: RegenerateEnterpriseIdentityProviderRecoveryCodesInput;
}

/** Argument input type for MutationRegenerateVerifiableDomainTokenInput. */
export interface MutationRegenerateVerifiableDomainTokenInput {
  /** Parameters for RegenerateVerifiableDomainToken */
  input: RegenerateVerifiableDomainTokenInput;
}

/** Argument input type for MutationRejectDeploymentsInput. */
export interface MutationRejectDeploymentsInput {
  /** Parameters for RejectDeployments */
  input: RejectDeploymentsInput;
}

/** Argument input type for MutationRemoveAssigneesFromAssignableInput. */
export interface MutationRemoveAssigneesFromAssignableInput {
  /** Parameters for RemoveAssigneesFromAssignable */
  input: RemoveAssigneesFromAssignableInput;
}

/** Argument input type for MutationRemoveEnterpriseAdminInput. */
export interface MutationRemoveEnterpriseAdminInput {
  /** Parameters for RemoveEnterpriseAdmin */
  input: RemoveEnterpriseAdminInput;
}

/** Argument input type for MutationRemoveEnterpriseIdentityProviderInput. */
export interface MutationRemoveEnterpriseIdentityProviderInput {
  /** Parameters for RemoveEnterpriseIdentityProvider */
  input: RemoveEnterpriseIdentityProviderInput;
}

/** Argument input type for MutationRemoveEnterpriseOrganizationInput. */
export interface MutationRemoveEnterpriseOrganizationInput {
  /** Parameters for RemoveEnterpriseOrganization */
  input: RemoveEnterpriseOrganizationInput;
}

/** Argument input type for MutationRemoveEnterpriseSupportEntitlementInput. */
export interface MutationRemoveEnterpriseSupportEntitlementInput {
  /** Parameters for RemoveEnterpriseSupportEntitlement */
  input: RemoveEnterpriseSupportEntitlementInput;
}

/** Argument input type for MutationRemoveLabelsFromLabelableInput. */
export interface MutationRemoveLabelsFromLabelableInput {
  /** Parameters for RemoveLabelsFromLabelable */
  input: RemoveLabelsFromLabelableInput;
}

/** Argument input type for MutationRemoveOutsideCollaboratorInput. */
export interface MutationRemoveOutsideCollaboratorInput {
  /** Parameters for RemoveOutsideCollaborator */
  input: RemoveOutsideCollaboratorInput;
}

/** Argument input type for MutationRemoveReactionInput. */
export interface MutationRemoveReactionInput {
  /** Parameters for RemoveReaction */
  input: RemoveReactionInput;
}

/** Argument input type for MutationRemoveStarInput. */
export interface MutationRemoveStarInput {
  /** Parameters for RemoveStar */
  input: RemoveStarInput;
}

/** Argument input type for MutationRemoveUpvoteInput. */
export interface MutationRemoveUpvoteInput {
  /** Parameters for RemoveUpvote */
  input: RemoveUpvoteInput;
}

/** Argument input type for MutationReopenIssueInput. */
export interface MutationReopenIssueInput {
  /** Parameters for ReopenIssue */
  input: ReopenIssueInput;
}

/** Argument input type for MutationReopenPullRequestInput. */
export interface MutationReopenPullRequestInput {
  /** Parameters for ReopenPullRequest */
  input: ReopenPullRequestInput;
}

/** Argument input type for MutationRequestReviewsInput. */
export interface MutationRequestReviewsInput {
  /** Parameters for RequestReviews */
  input: RequestReviewsInput;
}

/** Argument input type for MutationRerequestCheckSuiteInput. */
export interface MutationRerequestCheckSuiteInput {
  /** Parameters for RerequestCheckSuite */
  input: RerequestCheckSuiteInput;
}

/** Argument input type for MutationResolveReviewThreadInput. */
export interface MutationResolveReviewThreadInput {
  /** Parameters for ResolveReviewThread */
  input: ResolveReviewThreadInput;
}

/** Argument input type for MutationSetEnterpriseIdentityProviderInput. */
export interface MutationSetEnterpriseIdentityProviderInput {
  /** Parameters for SetEnterpriseIdentityProvider */
  input: SetEnterpriseIdentityProviderInput;
}

/** Argument input type for MutationSetOrganizationInteractionLimitInput. */
export interface MutationSetOrganizationInteractionLimitInput {
  /** Parameters for SetOrganizationInteractionLimit */
  input: SetOrganizationInteractionLimitInput;
}

/** Argument input type for MutationSetRepositoryInteractionLimitInput. */
export interface MutationSetRepositoryInteractionLimitInput {
  /** Parameters for SetRepositoryInteractionLimit */
  input: SetRepositoryInteractionLimitInput;
}

/** Argument input type for MutationSetUserInteractionLimitInput. */
export interface MutationSetUserInteractionLimitInput {
  /** Parameters for SetUserInteractionLimit */
  input: SetUserInteractionLimitInput;
}

/** Argument input type for MutationSubmitPullRequestReviewInput. */
export interface MutationSubmitPullRequestReviewInput {
  /** Parameters for SubmitPullRequestReview */
  input: SubmitPullRequestReviewInput;
}

/** Argument input type for MutationTransferIssueInput. */
export interface MutationTransferIssueInput {
  /** Parameters for TransferIssue */
  input: TransferIssueInput;
}

/** Argument input type for MutationUnarchiveRepositoryInput. */
export interface MutationUnarchiveRepositoryInput {
  /** Parameters for UnarchiveRepository */
  input: UnarchiveRepositoryInput;
}

/** Argument input type for MutationUnfollowUserInput. */
export interface MutationUnfollowUserInput {
  /** Parameters for UnfollowUser */
  input: UnfollowUserInput;
}

/** Argument input type for MutationUnlinkRepositoryFromProjectInput. */
export interface MutationUnlinkRepositoryFromProjectInput {
  /** Parameters for UnlinkRepositoryFromProject */
  input: UnlinkRepositoryFromProjectInput;
}

/** Argument input type for MutationUnlockLockableInput. */
export interface MutationUnlockLockableInput {
  /** Parameters for UnlockLockable */
  input: UnlockLockableInput;
}

/** Argument input type for MutationUnmarkDiscussionCommentAsAnswerInput. */
export interface MutationUnmarkDiscussionCommentAsAnswerInput {
  /** Parameters for UnmarkDiscussionCommentAsAnswer */
  input: UnmarkDiscussionCommentAsAnswerInput;
}

/** Argument input type for MutationUnmarkFileAsViewedInput. */
export interface MutationUnmarkFileAsViewedInput {
  /** Parameters for UnmarkFileAsViewed */
  input: UnmarkFileAsViewedInput;
}

/** Argument input type for MutationUnmarkIssueAsDuplicateInput. */
export interface MutationUnmarkIssueAsDuplicateInput {
  /** Parameters for UnmarkIssueAsDuplicate */
  input: UnmarkIssueAsDuplicateInput;
}

/** Argument input type for MutationUnminimizeCommentInput. */
export interface MutationUnminimizeCommentInput {
  /** Parameters for UnminimizeComment */
  input: UnminimizeCommentInput;
}

/** Argument input type for MutationUnpinIssueInput. */
export interface MutationUnpinIssueInput {
  /** Parameters for UnpinIssue */
  input: UnpinIssueInput;
}

/** Argument input type for MutationUnresolveReviewThreadInput. */
export interface MutationUnresolveReviewThreadInput {
  /** Parameters for UnresolveReviewThread */
  input: UnresolveReviewThreadInput;
}

/** Argument input type for MutationUpdateBranchProtectionRuleInput. */
export interface MutationUpdateBranchProtectionRuleInput {
  /** Parameters for UpdateBranchProtectionRule */
  input: UpdateBranchProtectionRuleInput;
}

/** Argument input type for MutationUpdateCheckRunInput. */
export interface MutationUpdateCheckRunInput {
  /** Parameters for UpdateCheckRun */
  input: UpdateCheckRunInput;
}

/** Argument input type for MutationUpdateCheckSuitePreferencesInput. */
export interface MutationUpdateCheckSuitePreferencesInput {
  /** Parameters for UpdateCheckSuitePreferences */
  input: UpdateCheckSuitePreferencesInput;
}

/** Argument input type for MutationUpdateDiscussionInput. */
export interface MutationUpdateDiscussionInput {
  /** Parameters for UpdateDiscussion */
  input: UpdateDiscussionInput;
}

/** Argument input type for MutationUpdateDiscussionCommentInput. */
export interface MutationUpdateDiscussionCommentInput {
  /** Parameters for UpdateDiscussionComment */
  input: UpdateDiscussionCommentInput;
}

/** Argument input type for MutationUpdateEnterpriseAdministratorRoleInput. */
export interface MutationUpdateEnterpriseAdministratorRoleInput {
  /** Parameters for UpdateEnterpriseAdministratorRole */
  input: UpdateEnterpriseAdministratorRoleInput;
}

/** Argument input type for MutationUpdateEnterpriseAllowPrivateRepositoryForkingSettingInput. */
export interface MutationUpdateEnterpriseAllowPrivateRepositoryForkingSettingInput {
  /** Parameters for UpdateEnterpriseAllowPrivateRepositoryForkingSetting */
  input: UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput;
}

/** Argument input type for MutationUpdateEnterpriseDefaultRepositoryPermissionSettingInput. */
export interface MutationUpdateEnterpriseDefaultRepositoryPermissionSettingInput {
  /** Parameters for UpdateEnterpriseDefaultRepositoryPermissionSetting */
  input: UpdateEnterpriseDefaultRepositoryPermissionSettingInput;
}

/** Argument input type for MutationUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput. */
export interface MutationUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput {
  /** Parameters for UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting */
  input: UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput;
}

/** Argument input type for MutationUpdateEnterpriseMembersCanCreateRepositoriesSettingInput. */
export interface MutationUpdateEnterpriseMembersCanCreateRepositoriesSettingInput {
  /** Parameters for UpdateEnterpriseMembersCanCreateRepositoriesSetting */
  input: UpdateEnterpriseMembersCanCreateRepositoriesSettingInput;
}

/** Argument input type for MutationUpdateEnterpriseMembersCanDeleteIssuesSettingInput. */
export interface MutationUpdateEnterpriseMembersCanDeleteIssuesSettingInput {
  /** Parameters for UpdateEnterpriseMembersCanDeleteIssuesSetting */
  input: UpdateEnterpriseMembersCanDeleteIssuesSettingInput;
}

/** Argument input type for MutationUpdateEnterpriseMembersCanDeleteRepositoriesSettingInput. */
export interface MutationUpdateEnterpriseMembersCanDeleteRepositoriesSettingInput {
  /** Parameters for UpdateEnterpriseMembersCanDeleteRepositoriesSetting */
  input: UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput;
}

/** Argument input type for MutationUpdateEnterpriseMembersCanInviteCollaboratorsSettingInput. */
export interface MutationUpdateEnterpriseMembersCanInviteCollaboratorsSettingInput {
  /** Parameters for UpdateEnterpriseMembersCanInviteCollaboratorsSetting */
  input: UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput;
}

/** Argument input type for MutationUpdateEnterpriseMembersCanMakePurchasesSettingInput. */
export interface MutationUpdateEnterpriseMembersCanMakePurchasesSettingInput {
  /** Parameters for UpdateEnterpriseMembersCanMakePurchasesSetting */
  input: UpdateEnterpriseMembersCanMakePurchasesSettingInput;
}

/** Argument input type for MutationUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput. */
export interface MutationUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput {
  /** Parameters for UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting */
  input: UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput;
}

/** Argument input type for MutationUpdateEnterpriseMembersCanViewDependencyInsightsSettingInput. */
export interface MutationUpdateEnterpriseMembersCanViewDependencyInsightsSettingInput {
  /** Parameters for UpdateEnterpriseMembersCanViewDependencyInsightsSetting */
  input: UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput;
}

/** Argument input type for MutationUpdateEnterpriseOrganizationProjectsSettingInput. */
export interface MutationUpdateEnterpriseOrganizationProjectsSettingInput {
  /** Parameters for UpdateEnterpriseOrganizationProjectsSetting */
  input: UpdateEnterpriseOrganizationProjectsSettingInput;
}

/** Argument input type for MutationUpdateEnterpriseProfileInput. */
export interface MutationUpdateEnterpriseProfileInput {
  /** Parameters for UpdateEnterpriseProfile */
  input: UpdateEnterpriseProfileInput;
}

/** Argument input type for MutationUpdateEnterpriseRepositoryProjectsSettingInput. */
export interface MutationUpdateEnterpriseRepositoryProjectsSettingInput {
  /** Parameters for UpdateEnterpriseRepositoryProjectsSetting */
  input: UpdateEnterpriseRepositoryProjectsSettingInput;
}

/** Argument input type for MutationUpdateEnterpriseTeamDiscussionsSettingInput. */
export interface MutationUpdateEnterpriseTeamDiscussionsSettingInput {
  /** Parameters for UpdateEnterpriseTeamDiscussionsSetting */
  input: UpdateEnterpriseTeamDiscussionsSettingInput;
}

/** Argument input type for MutationUpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput. */
export interface MutationUpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput {
  /** Parameters for UpdateEnterpriseTwoFactorAuthenticationRequiredSetting */
  input: UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput;
}

/** Argument input type for MutationUpdateEnvironmentInput. */
export interface MutationUpdateEnvironmentInput {
  /** Parameters for UpdateEnvironment */
  input: UpdateEnvironmentInput;
}

/** Argument input type for MutationUpdateIpAllowListEnabledSettingInput. */
export interface MutationUpdateIpAllowListEnabledSettingInput {
  /** Parameters for UpdateIpAllowListEnabledSetting */
  input: UpdateIpAllowListEnabledSettingInput;
}

/** Argument input type for MutationUpdateIpAllowListEntryInput. */
export interface MutationUpdateIpAllowListEntryInput {
  /** Parameters for UpdateIpAllowListEntry */
  input: UpdateIpAllowListEntryInput;
}

/** Argument input type for MutationUpdateIpAllowListForInstalledAppsEnabledSettingInput. */
export interface MutationUpdateIpAllowListForInstalledAppsEnabledSettingInput {
  /** Parameters for UpdateIpAllowListForInstalledAppsEnabledSetting */
  input: UpdateIpAllowListForInstalledAppsEnabledSettingInput;
}

/** Argument input type for MutationUpdateIssueInput. */
export interface MutationUpdateIssueInput {
  /** Parameters for UpdateIssue */
  input: UpdateIssueInput;
}

/** Argument input type for MutationUpdateIssueCommentInput. */
export interface MutationUpdateIssueCommentInput {
  /** Parameters for UpdateIssueComment */
  input: UpdateIssueCommentInput;
}

/** Argument input type for MutationUpdateLabelInput. */
export interface MutationUpdateLabelInput {
  /** Parameters for UpdateLabel */
  input: UpdateLabelInput;
}

/** Argument input type for MutationUpdateNotificationRestrictionSettingInput. */
export interface MutationUpdateNotificationRestrictionSettingInput {
  /** Parameters for UpdateNotificationRestrictionSetting */
  input: UpdateNotificationRestrictionSettingInput;
}

/** Argument input type for MutationUpdateProjectInput. */
export interface MutationUpdateProjectInput {
  /** Parameters for UpdateProject */
  input: UpdateProjectInput;
}

/** Argument input type for MutationUpdateProjectCardInput. */
export interface MutationUpdateProjectCardInput {
  /** Parameters for UpdateProjectCard */
  input: UpdateProjectCardInput;
}

/** Argument input type for MutationUpdateProjectColumnInput. */
export interface MutationUpdateProjectColumnInput {
  /** Parameters for UpdateProjectColumn */
  input: UpdateProjectColumnInput;
}

/** Argument input type for MutationUpdatePullRequestInput. */
export interface MutationUpdatePullRequestInput {
  /** Parameters for UpdatePullRequest */
  input: UpdatePullRequestInput;
}

/** Argument input type for MutationUpdatePullRequestReviewInput. */
export interface MutationUpdatePullRequestReviewInput {
  /** Parameters for UpdatePullRequestReview */
  input: UpdatePullRequestReviewInput;
}

/** Argument input type for MutationUpdatePullRequestReviewCommentInput. */
export interface MutationUpdatePullRequestReviewCommentInput {
  /** Parameters for UpdatePullRequestReviewComment */
  input: UpdatePullRequestReviewCommentInput;
}

/** Argument input type for MutationUpdateRefInput. */
export interface MutationUpdateRefInput {
  /** Parameters for UpdateRef */
  input: UpdateRefInput;
}

/** Argument input type for MutationUpdateRefsInput. */
export interface MutationUpdateRefsInput {
  /** Parameters for UpdateRefs */
  input: UpdateRefsInput;
}

/** Argument input type for MutationUpdateRepositoryInput. */
export interface MutationUpdateRepositoryInput {
  /** Parameters for UpdateRepository */
  input: UpdateRepositoryInput;
}

/** Argument input type for MutationUpdateSubscriptionInput. */
export interface MutationUpdateSubscriptionInput {
  /** Parameters for UpdateSubscription */
  input: UpdateSubscriptionInput;
}

/** Argument input type for MutationUpdateTeamDiscussionInput. */
export interface MutationUpdateTeamDiscussionInput {
  /** Parameters for UpdateTeamDiscussion */
  input: UpdateTeamDiscussionInput;
}

/** Argument input type for MutationUpdateTeamDiscussionCommentInput. */
export interface MutationUpdateTeamDiscussionCommentInput {
  /** Parameters for UpdateTeamDiscussionComment */
  input: UpdateTeamDiscussionCommentInput;
}

/** Argument input type for MutationUpdateTeamReviewAssignmentInput. */
export interface MutationUpdateTeamReviewAssignmentInput {
  /** Parameters for UpdateTeamReviewAssignment */
  input: UpdateTeamReviewAssignmentInput;
}

/** Argument input type for MutationUpdateTopicsInput. */
export interface MutationUpdateTopicsInput {
  /** Parameters for UpdateTopics */
  input: UpdateTopicsInput;
}

/** Argument input type for MutationVerifyVerifiableDomainInput. */
export interface MutationVerifyVerifiableDomainInput {
  /** Parameters for VerifyVerifiableDomain */
  input: VerifyVerifiableDomainInput;
}

/** Argument input type for QueryCodeOfConductInput. */
export interface QueryCodeOfConductInput {
  /** The code of conduct's key */
  key: string;
}

/** Argument input type for QueryCodesOfConductInput. */
export interface QueryCodesOfConductInput {
}

/** Argument input type for QueryEnterpriseInput. */
export interface QueryEnterpriseInput {
  /** The enterprise invitation token. */
  invitationToken?: string;
  /** The enterprise URL slug. */
  slug: string;
}

/** Argument input type for QueryEnterpriseAdministratorInvitationInput. */
export interface QueryEnterpriseAdministratorInvitationInput {
  /** The slug of the enterprise the user was invited to join. */
  enterpriseSlug: string;
  /** The role for the business member invitation. */
  role: EnterpriseAdministratorRole;
  /** The login of the user invited to join the business. */
  userLogin: string;
}

/** Argument input type for QueryEnterpriseAdministratorInvitationByTokenInput. */
export interface QueryEnterpriseAdministratorInvitationByTokenInput {
  /** The invitation token sent with the invitation email. */
  invitationToken: string;
}

/** Argument input type for QueryLicenseInput. */
export interface QueryLicenseInput {
  /** The license's downcased SPDX ID */
  key: string;
}

/** Argument input type for QueryLicensesInput. */
export interface QueryLicensesInput {
}

/** Argument input type for QueryMarketplaceCategoriesInput. */
export interface QueryMarketplaceCategoriesInput {
  /** Exclude categories with no listings. */
  excludeEmpty?: boolean;
  /** Returns top level categories only, excluding any subcategories. */
  excludeSubcategories?: boolean;
  /** Return only the specified categories. */
  includeCategories?: string[];
}

/** Argument input type for QueryMarketplaceCategoryInput. */
export interface QueryMarketplaceCategoryInput {
  /** The URL slug of the category. */
  slug: string;
  /** Also check topic aliases for the category slug */
  useTopicAliases?: boolean;
}

/** Argument input type for QueryMarketplaceListingInput. */
export interface QueryMarketplaceListingInput {
  /** Select the listing that matches this slug. It's the short name of the listing used in its URL. */
  slug: string;
}

/** Argument input type for QueryMarketplaceListingsInput. */
export interface QueryMarketplaceListingsInput {
  /** Select listings that can be administered by the specified user. */
  adminId?: ID;
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Select listings visible to the viewer even if they are not approved. If omitted or
    false, only approved listings will be returned. */
  allStates?: boolean;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Select only listings with the given category. */
  categorySlug?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Select listings for products owned by the specified organization. */
  organizationId?: ID;
  /** Select only listings where the primary category matches the given category slug. */
  primaryCategoryOnly?: boolean;
  /** Select the listings with these slugs, if they are visible to the viewer. */
  slugs?: Maybe<string>[];
  /** Also check topic aliases for the category slug */
  useTopicAliases?: boolean;
  /** Select listings to which user has admin access. If omitted, listings visible to the
    viewer are returned. */
  viewerCanAdmin?: boolean;
  /** Select only listings that offer a free trial. */
  withFreeTrialsOnly?: boolean;
}

/** Argument input type for QueryMetaInput. */
export interface QueryMetaInput {
}

/** Argument input type for QueryNodeInput. */
export interface QueryNodeInput {
  /** ID of the object. */
  id: ID;
}

/** Argument input type for QueryNodesInput. */
export interface QueryNodesInput {
  /** The list of node IDs. */
  ids: ID[];
}

/** Argument input type for QueryOrganizationInput. */
export interface QueryOrganizationInput {
  /** The organization's login. */
  login: string;
}

/** Argument input type for QueryRateLimitInput. */
export interface QueryRateLimitInput {
  /** If true, calculate the cost for the query without evaluating it */
  dryRun?: boolean;
}

/** Argument input type for QueryRelayInput. */
export interface QueryRelayInput {
}

/** Argument input type for QueryRepositoryInput. */
export interface QueryRepositoryInput {
  /** The name of the repository */
  name: string;
  /** The login field of a user or organization */
  owner: string;
}

/** Argument input type for QueryRepositoryOwnerInput. */
export interface QueryRepositoryOwnerInput {
  /** The username to lookup the owner by. */
  login: string;
}

/** Argument input type for QueryResourceInput. */
export interface QueryResourceInput {
  /** The URL. */
  url: URI;
}

/** Argument input type for QuerySearchInput. */
export interface QuerySearchInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** The search string to look for. */
  query: string;
  /** The types of search items to search within. */
  type: SearchType;
}

/** Argument input type for QuerySecurityAdvisoriesInput. */
export interface QuerySecurityAdvisoriesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Filter advisories by identifier, e.g. GHSA or CVE. */
  identifier?: SecurityAdvisoryIdentifierFilter;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for the returned topics. */
  orderBy?: SecurityAdvisoryOrder;
  /** Filter advisories to those published since a time in the past. */
  publishedSince?: DateTime;
  /** Filter advisories to those updated since a time in the past. */
  updatedSince?: DateTime;
}

/** Argument input type for QuerySecurityAdvisoryInput. */
export interface QuerySecurityAdvisoryInput {
  /** GitHub Security Advisory ID. */
  ghsaId: string;
}

/** Argument input type for QuerySecurityVulnerabilitiesInput. */
export interface QuerySecurityVulnerabilitiesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** An ecosystem to filter vulnerabilities by. */
  ecosystem?: SecurityAdvisoryEcosystem;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Ordering options for the returned topics. */
  orderBy?: SecurityVulnerabilityOrder;
  /** A package name to filter vulnerabilities by. */
  package?: string;
  /** A list of severities to filter vulnerabilities by. */
  severities?: SecurityAdvisorySeverity[];
}

/** Argument input type for QuerySponsorablesInput. */
export interface QuerySponsorablesInput {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: string;
  /** Optional filter for which dependencies should be checked for sponsorable
    owners. Only sponsorable owners of dependencies in this ecosystem will be
    included. Used when onlyDependencies = true. */
  dependencyEcosystem?: SecurityAdvisoryEcosystem;
  /** Returns the first _n_ elements from the list. */
  first?: number;
  /** Returns the last _n_ elements from the list. */
  last?: number;
  /** Whether only sponsorables who own the viewer's dependencies will be
    returned. Must be authenticated to use. Can check an organization instead
    for their dependencies owned by sponsorables by passing
    orgLoginForDependencies. */
  onlyDependencies?: boolean;
  /** Ordering options for users and organizations returned from the connection. */
  orderBy?: SponsorableOrder;
  /** Optional organization username for whose dependencies should be checked.
    Used when onlyDependencies = true. Omit to check your own dependencies. If
    you are not an administrator of the organization, only dependencies from its
    public repositories will be considered. */
  orgLoginForDependencies?: string;
}

/** Argument input type for QuerySponsorsListingInput. */
export interface QuerySponsorsListingInput {
  /** Select the Sponsors listing which matches this slug */
  slug: string;
}

/** Argument input type for QueryTopicInput. */
export interface QueryTopicInput {
  /** The topic's name. */
  name: string;
}

/** Argument input type for QueryUserInput. */
export interface QueryUserInput {
  /** The user's login. */
  login: string;
}

/** Argument input type for QueryViewerInput. */
export interface QueryViewerInput {
}

/** The root query for implementing GraphQL mutations. */
export interface Mutation {
  /** Accepts a pending invitation for a user to become an administrator of an enterprise. */
  acceptEnterpriseAdministratorInvitation?(
    root: {},
    args: MutationAcceptEnterpriseAdministratorInvitationInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AcceptEnterpriseAdministratorInvitationPayload>>;
  /** Applies a suggested topic to the repository. */
  acceptTopicSuggestion?(
    root: {},
    args: MutationAcceptTopicSuggestionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AcceptTopicSuggestionPayload>>;
  /** Adds assignees to an assignable object. */
  addAssigneesToAssignable?(
    root: {},
    args: MutationAddAssigneesToAssignableInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddAssigneesToAssignablePayload>>;
  /** Adds a comment to an Issue or Pull Request. */
  addComment?(
    root: {},
    args: MutationAddCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddCommentPayload>>;
  /** Adds a comment to a Discussion, possibly as a reply to another comment. */
  addDiscussionComment?(
    root: {},
    args: MutationAddDiscussionCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddDiscussionCommentPayload>>;
  /** Adds a support entitlement to an enterprise member. */
  addEnterpriseSupportEntitlement?(
    root: {},
    args: MutationAddEnterpriseSupportEntitlementInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddEnterpriseSupportEntitlementPayload>>;
  /** Adds labels to a labelable object. */
  addLabelsToLabelable?(
    root: {},
    args: MutationAddLabelsToLabelableInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddLabelsToLabelablePayload>>;
  /** Adds a card to a ProjectColumn. Either `contentId` or `note` must be provided but **not** both. */
  addProjectCard?(
    root: {},
    args: MutationAddProjectCardInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddProjectCardPayload>>;
  /** Adds a column to a Project. */
  addProjectColumn?(
    root: {},
    args: MutationAddProjectColumnInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddProjectColumnPayload>>;
  /** Adds a review to a Pull Request. */
  addPullRequestReview?(
    root: {},
    args: MutationAddPullRequestReviewInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddPullRequestReviewPayload>>;
  /** Adds a comment to a review. */
  addPullRequestReviewComment?(
    root: {},
    args: MutationAddPullRequestReviewCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddPullRequestReviewCommentPayload>>;
  /** Adds a new thread to a pending Pull Request Review. */
  addPullRequestReviewThread?(
    root: {},
    args: MutationAddPullRequestReviewThreadInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddPullRequestReviewThreadPayload>>;
  /** Adds a reaction to a subject. */
  addReaction?(
    root: {},
    args: MutationAddReactionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddReactionPayload>>;
  /** Adds a star to a Starrable. */
  addStar?(
    root: {},
    args: MutationAddStarInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddStarPayload>>;
  /** Add an upvote to a discussion or discussion comment. */
  addUpvote?(
    root: {},
    args: MutationAddUpvoteInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddUpvotePayload>>;
  /** Adds a verifiable domain to an owning account. */
  addVerifiableDomain?(
    root: {},
    args: MutationAddVerifiableDomainInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<AddVerifiableDomainPayload>>;
  /** Approve all pending deployments under one or more environments */
  approveDeployments?(
    root: {},
    args: MutationApproveDeploymentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ApproveDeploymentsPayload>>;
  /** Approve a verifiable domain for notification delivery. */
  approveVerifiableDomain?(
    root: {},
    args: MutationApproveVerifiableDomainInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ApproveVerifiableDomainPayload>>;
  /** Marks a repository as archived. */
  archiveRepository?(
    root: {},
    args: MutationArchiveRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ArchiveRepositoryPayload>>;
  /** Cancels a pending invitation for an administrator to join an enterprise. */
  cancelEnterpriseAdminInvitation?(
    root: {},
    args: MutationCancelEnterpriseAdminInvitationInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CancelEnterpriseAdminInvitationPayload>>;
  /** Update your status on GitHub. */
  changeUserStatus?(
    root: {},
    args: MutationChangeUserStatusInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ChangeUserStatusPayload>>;
  /** Clears all labels from a labelable object. */
  clearLabelsFromLabelable?(
    root: {},
    args: MutationClearLabelsFromLabelableInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ClearLabelsFromLabelablePayload>>;
  /** Creates a new project by cloning configuration from an existing project. */
  cloneProject?(
    root: {},
    args: MutationCloneProjectInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CloneProjectPayload>>;
  /** Create a new repository with the same files and directory structure as a template repository. */
  cloneTemplateRepository?(
    root: {},
    args: MutationCloneTemplateRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CloneTemplateRepositoryPayload>>;
  /** Close an issue. */
  closeIssue?(
    root: {},
    args: MutationCloseIssueInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CloseIssuePayload>>;
  /** Close a pull request. */
  closePullRequest?(
    root: {},
    args: MutationClosePullRequestInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ClosePullRequestPayload>>;
  /** Convert a project note card to one associated with a newly created issue. */
  convertProjectCardNoteToIssue?(
    root: {},
    args: MutationConvertProjectCardNoteToIssueInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ConvertProjectCardNoteToIssuePayload>>;
  /** Converts a pull request to draft */
  convertPullRequestToDraft?(
    root: {},
    args: MutationConvertPullRequestToDraftInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ConvertPullRequestToDraftPayload>>;
  /** Create a new branch protection rule */
  createBranchProtectionRule?(
    root: {},
    args: MutationCreateBranchProtectionRuleInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateBranchProtectionRulePayload>>;
  /** Create a check run. */
  createCheckRun?(
    root: {},
    args: MutationCreateCheckRunInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateCheckRunPayload>>;
  /** Create a check suite */
  createCheckSuite?(
    root: {},
    args: MutationCreateCheckSuiteInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateCheckSuitePayload>>;
  /** Create a content attachment. */
  createContentAttachment?(
    root: {},
    args: MutationCreateContentAttachmentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateContentAttachmentPayload>>;
  /** Creates a new deployment event. */
  createDeployment?(
    root: {},
    args: MutationCreateDeploymentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateDeploymentPayload>>;
  /** Create a deployment status. */
  createDeploymentStatus?(
    root: {},
    args: MutationCreateDeploymentStatusInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateDeploymentStatusPayload>>;
  /** Create a discussion. */
  createDiscussion?(
    root: {},
    args: MutationCreateDiscussionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateDiscussionPayload>>;
  /** Creates an organization as part of an enterprise account. */
  createEnterpriseOrganization?(
    root: {},
    args: MutationCreateEnterpriseOrganizationInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateEnterpriseOrganizationPayload>>;
  /** Creates an environment or simply returns it if already exists. */
  createEnvironment?(
    root: {},
    args: MutationCreateEnvironmentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateEnvironmentPayload>>;
  /** Creates a new IP allow list entry. */
  createIpAllowListEntry?(
    root: {},
    args: MutationCreateIpAllowListEntryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateIpAllowListEntryPayload>>;
  /** Creates a new issue. */
  createIssue?(
    root: {},
    args: MutationCreateIssueInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateIssuePayload>>;
  /** Creates a new label. */
  createLabel?(
    root: {},
    args: MutationCreateLabelInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateLabelPayload>>;
  /** Creates a new project. */
  createProject?(
    root: {},
    args: MutationCreateProjectInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateProjectPayload>>;
  /** Create a new pull request */
  createPullRequest?(
    root: {},
    args: MutationCreatePullRequestInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreatePullRequestPayload>>;
  /** Create a new Git Ref. */
  createRef?(
    root: {},
    args: MutationCreateRefInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateRefPayload>>;
  /** Create a new repository. */
  createRepository?(
    root: {},
    args: MutationCreateRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateRepositoryPayload>>;
  /** Creates a new team discussion. */
  createTeamDiscussion?(
    root: {},
    args: MutationCreateTeamDiscussionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateTeamDiscussionPayload>>;
  /** Creates a new team discussion comment. */
  createTeamDiscussionComment?(
    root: {},
    args: MutationCreateTeamDiscussionCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CreateTeamDiscussionCommentPayload>>;
  /** Rejects a suggested topic for the repository. */
  declineTopicSuggestion?(
    root: {},
    args: MutationDeclineTopicSuggestionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeclineTopicSuggestionPayload>>;
  /** Delete a branch protection rule */
  deleteBranchProtectionRule?(
    root: {},
    args: MutationDeleteBranchProtectionRuleInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteBranchProtectionRulePayload>>;
  /** Deletes a deployment. */
  deleteDeployment?(
    root: {},
    args: MutationDeleteDeploymentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteDeploymentPayload>>;
  /** Delete a discussion and all of its replies. */
  deleteDiscussion?(
    root: {},
    args: MutationDeleteDiscussionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteDiscussionPayload>>;
  /** Delete a discussion comment. If it has replies, wipe it instead. */
  deleteDiscussionComment?(
    root: {},
    args: MutationDeleteDiscussionCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteDiscussionCommentPayload>>;
  /** Deletes an environment */
  deleteEnvironment?(
    root: {},
    args: MutationDeleteEnvironmentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteEnvironmentPayload>>;
  /** Deletes an IP allow list entry. */
  deleteIpAllowListEntry?(
    root: {},
    args: MutationDeleteIpAllowListEntryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteIpAllowListEntryPayload>>;
  /** Deletes an Issue object. */
  deleteIssue?(
    root: {},
    args: MutationDeleteIssueInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteIssuePayload>>;
  /** Deletes an IssueComment object. */
  deleteIssueComment?(
    root: {},
    args: MutationDeleteIssueCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteIssueCommentPayload>>;
  /** Deletes a label. */
  deleteLabel?(
    root: {},
    args: MutationDeleteLabelInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteLabelPayload>>;
  /** Delete a package version. */
  deletePackageVersion?(
    root: {},
    args: MutationDeletePackageVersionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeletePackageVersionPayload>>;
  /** Deletes a project. */
  deleteProject?(
    root: {},
    args: MutationDeleteProjectInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteProjectPayload>>;
  /** Deletes a project card. */
  deleteProjectCard?(
    root: {},
    args: MutationDeleteProjectCardInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteProjectCardPayload>>;
  /** Deletes a project column. */
  deleteProjectColumn?(
    root: {},
    args: MutationDeleteProjectColumnInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteProjectColumnPayload>>;
  /** Deletes a pull request review. */
  deletePullRequestReview?(
    root: {},
    args: MutationDeletePullRequestReviewInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeletePullRequestReviewPayload>>;
  /** Deletes a pull request review comment. */
  deletePullRequestReviewComment?(
    root: {},
    args: MutationDeletePullRequestReviewCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeletePullRequestReviewCommentPayload>>;
  /** Delete a Git Ref. */
  deleteRef?(
    root: {},
    args: MutationDeleteRefInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteRefPayload>>;
  /** Deletes a team discussion. */
  deleteTeamDiscussion?(
    root: {},
    args: MutationDeleteTeamDiscussionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteTeamDiscussionPayload>>;
  /** Deletes a team discussion comment. */
  deleteTeamDiscussionComment?(
    root: {},
    args: MutationDeleteTeamDiscussionCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteTeamDiscussionCommentPayload>>;
  /** Deletes a verifiable domain. */
  deleteVerifiableDomain?(
    root: {},
    args: MutationDeleteVerifiableDomainInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DeleteVerifiableDomainPayload>>;
  /** Disable auto merge on the given pull request */
  disablePullRequestAutoMerge?(
    root: {},
    args: MutationDisablePullRequestAutoMergeInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DisablePullRequestAutoMergePayload>>;
  /** Dismisses an approved or rejected pull request review. */
  dismissPullRequestReview?(
    root: {},
    args: MutationDismissPullRequestReviewInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<DismissPullRequestReviewPayload>>;
  /** Enable the default auto-merge on a pull request. */
  enablePullRequestAutoMerge?(
    root: {},
    args: MutationEnablePullRequestAutoMergeInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<EnablePullRequestAutoMergePayload>>;
  /** Follow a user. */
  followUser?(
    root: {},
    args: MutationFollowUserInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<FollowUserPayload>>;
  /** Creates a new project by importing columns and a list of issues/PRs. */
  importProject?(
    root: {},
    args: MutationImportProjectInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ImportProjectPayload>>;
  /** Invite someone to become an administrator of the enterprise. */
  inviteEnterpriseAdmin?(
    root: {},
    args: MutationInviteEnterpriseAdminInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<InviteEnterpriseAdminPayload>>;
  /** Creates a repository link for a project. */
  linkRepositoryToProject?(
    root: {},
    args: MutationLinkRepositoryToProjectInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<LinkRepositoryToProjectPayload>>;
  /** Lock a lockable object */
  lockLockable?(
    root: {},
    args: MutationLockLockableInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<LockLockablePayload>>;
  /** Mark a discussion comment as the chosen answer for discussions in an answerable category. */
  markDiscussionCommentAsAnswer?(
    root: {},
    args: MutationMarkDiscussionCommentAsAnswerInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<MarkDiscussionCommentAsAnswerPayload>>;
  /** Mark a pull request file as viewed */
  markFileAsViewed?(
    root: {},
    args: MutationMarkFileAsViewedInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<MarkFileAsViewedPayload>>;
  /** Marks a pull request ready for review. */
  markPullRequestReadyForReview?(
    root: {},
    args: MutationMarkPullRequestReadyForReviewInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<MarkPullRequestReadyForReviewPayload>>;
  /** Merge a head into a branch. */
  mergeBranch?(
    root: {},
    args: MutationMergeBranchInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<MergeBranchPayload>>;
  /** Merge a pull request. */
  mergePullRequest?(
    root: {},
    args: MutationMergePullRequestInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<MergePullRequestPayload>>;
  /** Minimizes a comment on an Issue, Commit, Pull Request, or Gist */
  minimizeComment?(
    root: {},
    args: MutationMinimizeCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<MinimizeCommentPayload>>;
  /** Moves a project card to another place. */
  moveProjectCard?(
    root: {},
    args: MutationMoveProjectCardInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<MoveProjectCardPayload>>;
  /** Moves a project column to another place. */
  moveProjectColumn?(
    root: {},
    args: MutationMoveProjectColumnInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<MoveProjectColumnPayload>>;
  /** Pin an issue to a repository */
  pinIssue?(
    root: {},
    args: MutationPinIssueInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<PinIssuePayload>>;
  /** Regenerates the identity provider recovery codes for an enterprise */
  regenerateEnterpriseIdentityProviderRecoveryCodes?(
    root: {},
    args: MutationRegenerateEnterpriseIdentityProviderRecoveryCodesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<
    Maybe<RegenerateEnterpriseIdentityProviderRecoveryCodesPayload>
  >;
  /** Regenerates a verifiable domain's verification token. */
  regenerateVerifiableDomainToken?(
    root: {},
    args: MutationRegenerateVerifiableDomainTokenInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RegenerateVerifiableDomainTokenPayload>>;
  /** Reject all pending deployments under one or more environments */
  rejectDeployments?(
    root: {},
    args: MutationRejectDeploymentsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RejectDeploymentsPayload>>;
  /** Removes assignees from an assignable object. */
  removeAssigneesFromAssignable?(
    root: {},
    args: MutationRemoveAssigneesFromAssignableInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RemoveAssigneesFromAssignablePayload>>;
  /** Removes an administrator from the enterprise. */
  removeEnterpriseAdmin?(
    root: {},
    args: MutationRemoveEnterpriseAdminInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RemoveEnterpriseAdminPayload>>;
  /** Removes the identity provider from an enterprise */
  removeEnterpriseIdentityProvider?(
    root: {},
    args: MutationRemoveEnterpriseIdentityProviderInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RemoveEnterpriseIdentityProviderPayload>>;
  /** Removes an organization from the enterprise */
  removeEnterpriseOrganization?(
    root: {},
    args: MutationRemoveEnterpriseOrganizationInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RemoveEnterpriseOrganizationPayload>>;
  /** Removes a support entitlement from an enterprise member. */
  removeEnterpriseSupportEntitlement?(
    root: {},
    args: MutationRemoveEnterpriseSupportEntitlementInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RemoveEnterpriseSupportEntitlementPayload>>;
  /** Removes labels from a Labelable object. */
  removeLabelsFromLabelable?(
    root: {},
    args: MutationRemoveLabelsFromLabelableInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RemoveLabelsFromLabelablePayload>>;
  /** Removes outside collaborator from all repositories in an organization. */
  removeOutsideCollaborator?(
    root: {},
    args: MutationRemoveOutsideCollaboratorInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RemoveOutsideCollaboratorPayload>>;
  /** Removes a reaction from a subject. */
  removeReaction?(
    root: {},
    args: MutationRemoveReactionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RemoveReactionPayload>>;
  /** Removes a star from a Starrable. */
  removeStar?(
    root: {},
    args: MutationRemoveStarInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RemoveStarPayload>>;
  /** Remove an upvote to a discussion or discussion comment. */
  removeUpvote?(
    root: {},
    args: MutationRemoveUpvoteInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RemoveUpvotePayload>>;
  /** Reopen a issue. */
  reopenIssue?(
    root: {},
    args: MutationReopenIssueInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ReopenIssuePayload>>;
  /** Reopen a pull request. */
  reopenPullRequest?(
    root: {},
    args: MutationReopenPullRequestInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ReopenPullRequestPayload>>;
  /** Set review requests on a pull request. */
  requestReviews?(
    root: {},
    args: MutationRequestReviewsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RequestReviewsPayload>>;
  /** Rerequests an existing check suite. */
  rerequestCheckSuite?(
    root: {},
    args: MutationRerequestCheckSuiteInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RerequestCheckSuitePayload>>;
  /** Marks a review thread as resolved. */
  resolveReviewThread?(
    root: {},
    args: MutationResolveReviewThreadInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<ResolveReviewThreadPayload>>;
  /** Creates or updates the identity provider for an enterprise. */
  setEnterpriseIdentityProvider?(
    root: {},
    args: MutationSetEnterpriseIdentityProviderInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<SetEnterpriseIdentityProviderPayload>>;
  /** Set an organization level interaction limit for an organization's public repositories. */
  setOrganizationInteractionLimit?(
    root: {},
    args: MutationSetOrganizationInteractionLimitInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<SetOrganizationInteractionLimitPayload>>;
  /** Sets an interaction limit setting for a repository. */
  setRepositoryInteractionLimit?(
    root: {},
    args: MutationSetRepositoryInteractionLimitInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<SetRepositoryInteractionLimitPayload>>;
  /** Set a user level interaction limit for an user's public repositories. */
  setUserInteractionLimit?(
    root: {},
    args: MutationSetUserInteractionLimitInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<SetUserInteractionLimitPayload>>;
  /** Submits a pending pull request review. */
  submitPullRequestReview?(
    root: {},
    args: MutationSubmitPullRequestReviewInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<SubmitPullRequestReviewPayload>>;
  /** Transfer an issue to a different repository */
  transferIssue?(
    root: {},
    args: MutationTransferIssueInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<TransferIssuePayload>>;
  /** Unarchives a repository. */
  unarchiveRepository?(
    root: {},
    args: MutationUnarchiveRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UnarchiveRepositoryPayload>>;
  /** Unfollow a user. */
  unfollowUser?(
    root: {},
    args: MutationUnfollowUserInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UnfollowUserPayload>>;
  /** Deletes a repository link from a project. */
  unlinkRepositoryFromProject?(
    root: {},
    args: MutationUnlinkRepositoryFromProjectInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UnlinkRepositoryFromProjectPayload>>;
  /** Unlock a lockable object */
  unlockLockable?(
    root: {},
    args: MutationUnlockLockableInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UnlockLockablePayload>>;
  /** Unmark a discussion comment as the chosen answer for discussions in an answerable category. */
  unmarkDiscussionCommentAsAnswer?(
    root: {},
    args: MutationUnmarkDiscussionCommentAsAnswerInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UnmarkDiscussionCommentAsAnswerPayload>>;
  /** Unmark a pull request file as viewed */
  unmarkFileAsViewed?(
    root: {},
    args: MutationUnmarkFileAsViewedInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UnmarkFileAsViewedPayload>>;
  /** Unmark an issue as a duplicate of another issue. */
  unmarkIssueAsDuplicate?(
    root: {},
    args: MutationUnmarkIssueAsDuplicateInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UnmarkIssueAsDuplicatePayload>>;
  /** Unminimizes a comment on an Issue, Commit, Pull Request, or Gist */
  unminimizeComment?(
    root: {},
    args: MutationUnminimizeCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UnminimizeCommentPayload>>;
  /** Unpin a pinned issue from a repository */
  unpinIssue?(
    root: {},
    args: MutationUnpinIssueInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UnpinIssuePayload>>;
  /** Marks a review thread as unresolved. */
  unresolveReviewThread?(
    root: {},
    args: MutationUnresolveReviewThreadInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UnresolveReviewThreadPayload>>;
  /** Create a new branch protection rule */
  updateBranchProtectionRule?(
    root: {},
    args: MutationUpdateBranchProtectionRuleInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateBranchProtectionRulePayload>>;
  /** Update a check run */
  updateCheckRun?(
    root: {},
    args: MutationUpdateCheckRunInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateCheckRunPayload>>;
  /** Modifies the settings of an existing check suite */
  updateCheckSuitePreferences?(
    root: {},
    args: MutationUpdateCheckSuitePreferencesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateCheckSuitePreferencesPayload>>;
  /** Update a discussion */
  updateDiscussion?(
    root: {},
    args: MutationUpdateDiscussionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateDiscussionPayload>>;
  /** Update the contents of a comment on a Discussion */
  updateDiscussionComment?(
    root: {},
    args: MutationUpdateDiscussionCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateDiscussionCommentPayload>>;
  /** Updates the role of an enterprise administrator. */
  updateEnterpriseAdministratorRole?(
    root: {},
    args: MutationUpdateEnterpriseAdministratorRoleInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateEnterpriseAdministratorRolePayload>>;
  /** Sets whether private repository forks are enabled for an enterprise. */
  updateEnterpriseAllowPrivateRepositoryForkingSetting?(
    root: {},
    args: MutationUpdateEnterpriseAllowPrivateRepositoryForkingSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<
    Maybe<UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload>
  >;
  /** Sets the base repository permission for organizations in an enterprise. */
  updateEnterpriseDefaultRepositoryPermissionSetting?(
    root: {},
    args: MutationUpdateEnterpriseDefaultRepositoryPermissionSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<
    Maybe<UpdateEnterpriseDefaultRepositoryPermissionSettingPayload>
  >;
  /** Sets whether organization members with admin permissions on a repository can change repository visibility. */
  updateEnterpriseMembersCanChangeRepositoryVisibilitySetting?(
    root: {},
    args:
      MutationUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<
    Maybe<UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload>
  >;
  /** Sets the members can create repositories setting for an enterprise. */
  updateEnterpriseMembersCanCreateRepositoriesSetting?(
    root: {},
    args: MutationUpdateEnterpriseMembersCanCreateRepositoriesSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<
    Maybe<UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload>
  >;
  /** Sets the members can delete issues setting for an enterprise. */
  updateEnterpriseMembersCanDeleteIssuesSetting?(
    root: {},
    args: MutationUpdateEnterpriseMembersCanDeleteIssuesSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateEnterpriseMembersCanDeleteIssuesSettingPayload>>;
  /** Sets the members can delete repositories setting for an enterprise. */
  updateEnterpriseMembersCanDeleteRepositoriesSetting?(
    root: {},
    args: MutationUpdateEnterpriseMembersCanDeleteRepositoriesSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<
    Maybe<UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload>
  >;
  /** Sets whether members can invite collaborators are enabled for an enterprise. */
  updateEnterpriseMembersCanInviteCollaboratorsSetting?(
    root: {},
    args: MutationUpdateEnterpriseMembersCanInviteCollaboratorsSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<
    Maybe<UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload>
  >;
  /** Sets whether or not an organization admin can make purchases. */
  updateEnterpriseMembersCanMakePurchasesSetting?(
    root: {},
    args: MutationUpdateEnterpriseMembersCanMakePurchasesSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateEnterpriseMembersCanMakePurchasesSettingPayload>>;
  /** Sets the members can update protected branches setting for an enterprise. */
  updateEnterpriseMembersCanUpdateProtectedBranchesSetting?(
    root: {},
    args: MutationUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<
    Maybe<UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload>
  >;
  /** Sets the members can view dependency insights for an enterprise. */
  updateEnterpriseMembersCanViewDependencyInsightsSetting?(
    root: {},
    args: MutationUpdateEnterpriseMembersCanViewDependencyInsightsSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<
    Maybe<UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload>
  >;
  /** Sets whether organization projects are enabled for an enterprise. */
  updateEnterpriseOrganizationProjectsSetting?(
    root: {},
    args: MutationUpdateEnterpriseOrganizationProjectsSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateEnterpriseOrganizationProjectsSettingPayload>>;
  /** Updates an enterprise's profile. */
  updateEnterpriseProfile?(
    root: {},
    args: MutationUpdateEnterpriseProfileInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateEnterpriseProfilePayload>>;
  /** Sets whether repository projects are enabled for a enterprise. */
  updateEnterpriseRepositoryProjectsSetting?(
    root: {},
    args: MutationUpdateEnterpriseRepositoryProjectsSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateEnterpriseRepositoryProjectsSettingPayload>>;
  /** Sets whether team discussions are enabled for an enterprise. */
  updateEnterpriseTeamDiscussionsSetting?(
    root: {},
    args: MutationUpdateEnterpriseTeamDiscussionsSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateEnterpriseTeamDiscussionsSettingPayload>>;
  /** Sets whether two factor authentication is required for all users in an enterprise. */
  updateEnterpriseTwoFactorAuthenticationRequiredSetting?(
    root: {},
    args: MutationUpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<
    Maybe<UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload>
  >;
  /** Updates an environment. */
  updateEnvironment?(
    root: {},
    args: MutationUpdateEnvironmentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateEnvironmentPayload>>;
  /** Sets whether an IP allow list is enabled on an owner. */
  updateIpAllowListEnabledSetting?(
    root: {},
    args: MutationUpdateIpAllowListEnabledSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateIpAllowListEnabledSettingPayload>>;
  /** Updates an IP allow list entry. */
  updateIpAllowListEntry?(
    root: {},
    args: MutationUpdateIpAllowListEntryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateIpAllowListEntryPayload>>;
  /** Sets whether IP allow list configuration for installed GitHub Apps is enabled on an owner. */
  updateIpAllowListForInstalledAppsEnabledSetting?(
    root: {},
    args: MutationUpdateIpAllowListForInstalledAppsEnabledSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<
    Maybe<UpdateIpAllowListForInstalledAppsEnabledSettingPayload>
  >;
  /** Updates an Issue. */
  updateIssue?(
    root: {},
    args: MutationUpdateIssueInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateIssuePayload>>;
  /** Updates an IssueComment object. */
  updateIssueComment?(
    root: {},
    args: MutationUpdateIssueCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateIssueCommentPayload>>;
  /** Updates an existing label. */
  updateLabel?(
    root: {},
    args: MutationUpdateLabelInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateLabelPayload>>;
  /** Update the setting to restrict notifications to only verified or approved domains available to an owner. */
  updateNotificationRestrictionSetting?(
    root: {},
    args: MutationUpdateNotificationRestrictionSettingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateNotificationRestrictionSettingPayload>>;
  /** Updates an existing project. */
  updateProject?(
    root: {},
    args: MutationUpdateProjectInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateProjectPayload>>;
  /** Updates an existing project card. */
  updateProjectCard?(
    root: {},
    args: MutationUpdateProjectCardInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateProjectCardPayload>>;
  /** Updates an existing project column. */
  updateProjectColumn?(
    root: {},
    args: MutationUpdateProjectColumnInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateProjectColumnPayload>>;
  /** Update a pull request */
  updatePullRequest?(
    root: {},
    args: MutationUpdatePullRequestInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdatePullRequestPayload>>;
  /** Updates the body of a pull request review. */
  updatePullRequestReview?(
    root: {},
    args: MutationUpdatePullRequestReviewInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdatePullRequestReviewPayload>>;
  /** Updates a pull request review comment. */
  updatePullRequestReviewComment?(
    root: {},
    args: MutationUpdatePullRequestReviewCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdatePullRequestReviewCommentPayload>>;
  /** Update a Git Ref. */
  updateRef?(
    root: {},
    args: MutationUpdateRefInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateRefPayload>>;
  /** Creates, updates and/or deletes multiple refs in a repository.

    This mutation takes a list of `RefUpdate`s and performs these updates
    on the repository. All updates are performed atomically, meaning that
    if one of them is rejected, no other ref will be modified.

    `RefUpdate.beforeOid` specifies that the given reference needs to point
    to the given value before performing any updates. A value of
    `0000000000000000000000000000000000000000` can be used to verify that
    the references should not exist.

    `RefUpdate.afterOid` specifies the value that the given reference
    will point to after performing all updates. A value of
    `0000000000000000000000000000000000000000` can be used to delete a
    reference.

    If `RefUpdate.force` is set to `true`, a non-fast-forward updates
    for the given reference will be allowed. */
  updateRefs?(
    root: {},
    args: MutationUpdateRefsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateRefsPayload>>;
  /** Update information about a repository. */
  updateRepository?(
    root: {},
    args: MutationUpdateRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateRepositoryPayload>>;
  /** Updates the state for subscribable subjects. */
  updateSubscription?(
    root: {},
    args: MutationUpdateSubscriptionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateSubscriptionPayload>>;
  /** Updates a team discussion. */
  updateTeamDiscussion?(
    root: {},
    args: MutationUpdateTeamDiscussionInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateTeamDiscussionPayload>>;
  /** Updates a discussion comment. */
  updateTeamDiscussionComment?(
    root: {},
    args: MutationUpdateTeamDiscussionCommentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateTeamDiscussionCommentPayload>>;
  /** Updates team review assignment. */
  updateTeamReviewAssignment?(
    root: {},
    args: MutationUpdateTeamReviewAssignmentInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateTeamReviewAssignmentPayload>>;
  /** Replaces the repository's topics with the given topics. */
  updateTopics?(
    root: {},
    args: MutationUpdateTopicsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UpdateTopicsPayload>>;
  /** Verify that a verifiable domain has the expected DNS record. */
  verifyVerifiableDomain?(
    root: {},
    args: MutationVerifyVerifiableDomainInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<VerifyVerifiableDomainPayload>>;
}

/** The query root of GitHub's GraphQL interface. */
export interface Query {
  /** Look up a code of conduct by its key */
  codeOfConduct?(
    root: {},
    args: QueryCodeOfConductInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<CodeOfConduct>>;
  /** Look up a code of conduct by its key */
  codesOfConduct?: MaybePromise<Maybe<CodeOfConduct>[]>;
  /** Look up an enterprise by URL slug. */
  enterprise?(
    root: {},
    args: QueryEnterpriseInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Enterprise>>;
  /** Look up a pending enterprise administrator invitation by invitee, enterprise and role. */
  enterpriseAdministratorInvitation?(
    root: {},
    args: QueryEnterpriseAdministratorInvitationInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<EnterpriseAdministratorInvitation>>;
  /** Look up a pending enterprise administrator invitation by invitation token. */
  enterpriseAdministratorInvitationByToken?(
    root: {},
    args: QueryEnterpriseAdministratorInvitationByTokenInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<EnterpriseAdministratorInvitation>>;
  /** Look up an open source license by its key */
  license?(
    root: {},
    args: QueryLicenseInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<License>>;
  /** Return a list of known open source licenses */
  licenses: MaybePromise<Maybe<License>[]>;
  /** Get alphabetically sorted list of Marketplace categories */
  marketplaceCategories(
    root: {},
    args: QueryMarketplaceCategoriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<MarketplaceCategory[]>;
  /** Look up a Marketplace category by its slug. */
  marketplaceCategory?(
    root: {},
    args: QueryMarketplaceCategoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<MarketplaceCategory>>;
  /** Look up a single Marketplace listing */
  marketplaceListing?(
    root: {},
    args: QueryMarketplaceListingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<MarketplaceListing>>;
  /** Look up Marketplace listings */
  marketplaceListings(
    root: {},
    args: QueryMarketplaceListingsInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<MarketplaceListingConnection>;
  /** Return information about the GitHub instance */
  meta: MaybePromise<GitHubMetadata>;
  /** Fetches an object given its ID. */
  node?(
    root: {},
    args: QueryNodeInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Node>>;
  /** Lookup nodes by a list of IDs. */
  nodes(
    root: {},
    args: QueryNodesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Node>[]>;
  /** Lookup a organization by login. */
  organization?(
    root: {},
    args: QueryOrganizationInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Organization>>;
  /** The client's rate limit information. */
  rateLimit?(
    root: {},
    args: QueryRateLimitInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RateLimit>>;
  /** Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object */
  relay: MaybePromise<Query>;
  /** Lookup a given repository by the owner and repository name. */
  repository?(
    root: {},
    args: QueryRepositoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Repository>>;
  /** Lookup a repository owner (ie. either a User or an Organization) by login. */
  repositoryOwner?(
    root: {},
    args: QueryRepositoryOwnerInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<RepositoryOwner>>;
  /** Lookup resource by a URL. */
  resource?(
    root: {},
    args: QueryResourceInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<UniformResourceLocatable>>;
  /** Perform a search across resources. */
  search(
    root: {},
    args: QuerySearchInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SearchResultItemConnection>;
  /** GitHub Security Advisories */
  securityAdvisories(
    root: {},
    args: QuerySecurityAdvisoriesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SecurityAdvisoryConnection>;
  /** Fetch a Security Advisory by its GHSA ID */
  securityAdvisory?(
    root: {},
    args: QuerySecurityAdvisoryInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<SecurityAdvisory>>;
  /** Software Vulnerabilities documented by GitHub Security Advisories */
  securityVulnerabilities(
    root: {},
    args: QuerySecurityVulnerabilitiesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SecurityVulnerabilityConnection>;
  /** Users and organizations who can be sponsored via GitHub Sponsors. */
  sponsorables(
    root: {},
    args: QuerySponsorablesInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<SponsorableItemConnection>;
  /** Look up a single Sponsors Listing */
  sponsorsListing?(
    root: {},
    args: QuerySponsorsListingInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<SponsorsListing>>;
  /** Look up a topic by name. */
  topic?(
    root: {},
    args: QueryTopicInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<Topic>>;
  /** Lookup a user by login. */
  user?(
    root: {},
    args: QueryUserInput,
    context: Context,
    info: GraphQLResolveInfo,
  ): MaybePromise<Maybe<User>>;
  /** The currently authenticated user. */
  viewer: MaybePromise<User>;
}
