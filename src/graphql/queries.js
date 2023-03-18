/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAuthInfo = /* GraphQL */ `
  query GetAuthInfo($userId: ID!) {
    getAuthInfo(userId: $userId) {
      userId
      user {
        id
        image
        name
        type
        address
        pinCode
        authInfo {
          userId
          email
          phoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authUserPermission {
          userId
          allowCourseCreation
          email
          allowEduCares
          phoneNumber
          altPhoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        usersChats {
          nextToken
          startedAt
        }
        moderatorInChannels {
          nextToken
          startedAt
        }
        adminInGroups {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      email
      phoneNum
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAuthInfos = /* GraphQL */ `
  query ListAuthInfos(
    $userId: ID
    $filter: ModelAuthInfoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAuthInfos(
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        email
        phoneNum
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAuthInfos = /* GraphQL */ `
  query SyncAuthInfos(
    $filter: ModelAuthInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuthInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        userId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        email
        phoneNum
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAuthUserPermission = /* GraphQL */ `
  query GetAuthUserPermission($userId: ID!) {
    getAuthUserPermission(userId: $userId) {
      userId
      user {
        id
        image
        name
        type
        address
        pinCode
        authInfo {
          userId
          email
          phoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authUserPermission {
          userId
          allowCourseCreation
          email
          allowEduCares
          phoneNumber
          altPhoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        usersChats {
          nextToken
          startedAt
        }
        moderatorInChannels {
          nextToken
          startedAt
        }
        adminInGroups {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      allowCourseCreation
      email
      allowEduCares
      phoneNumber
      altPhoneNum
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAuthUserPermissions = /* GraphQL */ `
  query ListAuthUserPermissions(
    $userId: ID
    $filter: ModelAuthUserPermissionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAuthUserPermissions(
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        allowCourseCreation
        email
        allowEduCares
        phoneNumber
        altPhoneNum
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAuthUserPermissions = /* GraphQL */ `
  query SyncAuthUserPermissions(
    $filter: ModelAuthUserPermissionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuthUserPermissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        userId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        allowCourseCreation
        email
        allowEduCares
        phoneNumber
        altPhoneNum
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      image
      name
      type
      address
      pinCode
      authInfo {
        userId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        email
        phoneNum
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      authUserPermission {
        userId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        allowCourseCreation
        email
        allowEduCares
        phoneNumber
        altPhoneNum
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      usersChats {
        items {
          id
          userId
          iCHATId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      moderatorInChannels {
        items {
          id
          userId
          iCHATChannelChatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      adminInGroups {
        items {
          id
          userId
          iCHATGroupId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        name
        type
        address
        pinCode
        authInfo {
          userId
          email
          phoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authUserPermission {
          userId
          allowCourseCreation
          email
          allowEduCares
          phoneNumber
          altPhoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        usersChats {
          nextToken
          startedAt
        }
        moderatorInChannels {
          nextToken
          startedAt
        }
        adminInGroups {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        image
        name
        type
        address
        pinCode
        authInfo {
          userId
          email
          phoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authUserPermission {
          userId
          allowCourseCreation
          email
          allowEduCares
          phoneNumber
          altPhoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        usersChats {
          nextToken
          startedAt
        }
        moderatorInChannels {
          nextToken
          startedAt
        }
        adminInGroups {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getICHAT = /* GraphQL */ `
  query GetICHAT($id: ID!) {
    getICHAT(id: $id) {
      name
      id
      users {
        items {
          id
          userId
          iCHATId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      type
      latestMessage {
        id
        sender {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        content
        chatId
        chat {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATMessageSenderId
      }
      messages {
        items {
          id
          content
          chatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATMessageSenderId
        }
        nextToken
      }
      channelInfo {
        chatId
        chat {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        bio
        image
        backgroundImage
        admin {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        moderators {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATChannelAdminId
      }
      groupInfo {
        chatId
        chat {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        bio
        image
        backgroundImage
        admins {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      iCHATLatestMessageId
      iCHATChannelInfoChatId
      iCHATGroupInfoId
    }
  }
`;
export const listICHATS = /* GraphQL */ `
  query ListICHATS(
    $filter: ModelICHATFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listICHATS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        id
        users {
          nextToken
          startedAt
        }
        type
        latestMessage {
          id
          content
          chatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATMessageSenderId
        }
        messages {
          nextToken
        }
        channelInfo {
          chatId
          bio
          image
          backgroundImage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATChannelAdminId
        }
        groupInfo {
          chatId
          bio
          image
          backgroundImage
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATLatestMessageId
        iCHATChannelInfoChatId
        iCHATGroupInfoId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncICHATS = /* GraphQL */ `
  query SyncICHATS(
    $filter: ModelICHATFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncICHATS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        name
        id
        users {
          nextToken
          startedAt
        }
        type
        latestMessage {
          id
          content
          chatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATMessageSenderId
        }
        messages {
          nextToken
        }
        channelInfo {
          chatId
          bio
          image
          backgroundImage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATChannelAdminId
        }
        groupInfo {
          chatId
          bio
          image
          backgroundImage
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATLatestMessageId
        iCHATChannelInfoChatId
        iCHATGroupInfoId
      }
      nextToken
      startedAt
    }
  }
`;
export const getICHATChannel = /* GraphQL */ `
  query GetICHATChannel($chatId: ID!) {
    getICHATChannel(chatId: $chatId) {
      chatId
      chat {
        name
        id
        users {
          nextToken
          startedAt
        }
        type
        latestMessage {
          id
          content
          chatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATMessageSenderId
        }
        messages {
          nextToken
        }
        channelInfo {
          chatId
          bio
          image
          backgroundImage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATChannelAdminId
        }
        groupInfo {
          chatId
          bio
          image
          backgroundImage
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATLatestMessageId
        iCHATChannelInfoChatId
        iCHATGroupInfoId
      }
      bio
      image
      backgroundImage
      admin {
        id
        image
        name
        type
        address
        pinCode
        authInfo {
          userId
          email
          phoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authUserPermission {
          userId
          allowCourseCreation
          email
          allowEduCares
          phoneNumber
          altPhoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        usersChats {
          nextToken
          startedAt
        }
        moderatorInChannels {
          nextToken
          startedAt
        }
        adminInGroups {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      moderators {
        items {
          id
          userId
          iCHATChannelChatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      iCHATChannelAdminId
    }
  }
`;
export const listICHATChannels = /* GraphQL */ `
  query ListICHATChannels(
    $chatId: ID
    $filter: ModelICHATChannelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listICHATChannels(
      chatId: $chatId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        chatId
        chat {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        bio
        image
        backgroundImage
        admin {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        moderators {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATChannelAdminId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncICHATChannels = /* GraphQL */ `
  query SyncICHATChannels(
    $filter: ModelICHATChannelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncICHATChannels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        chatId
        chat {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        bio
        image
        backgroundImage
        admin {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        moderators {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATChannelAdminId
      }
      nextToken
      startedAt
    }
  }
`;
export const getICHATGroup = /* GraphQL */ `
  query GetICHATGroup($id: ID!) {
    getICHATGroup(id: $id) {
      chatId
      chat {
        name
        id
        users {
          nextToken
          startedAt
        }
        type
        latestMessage {
          id
          content
          chatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATMessageSenderId
        }
        messages {
          nextToken
        }
        channelInfo {
          chatId
          bio
          image
          backgroundImage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATChannelAdminId
        }
        groupInfo {
          chatId
          bio
          image
          backgroundImage
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATLatestMessageId
        iCHATChannelInfoChatId
        iCHATGroupInfoId
      }
      bio
      image
      backgroundImage
      admins {
        items {
          id
          userId
          iCHATGroupId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listICHATGroups = /* GraphQL */ `
  query ListICHATGroups(
    $filter: ModelICHATGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listICHATGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        chatId
        chat {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        bio
        image
        backgroundImage
        admins {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncICHATGroups = /* GraphQL */ `
  query SyncICHATGroups(
    $filter: ModelICHATGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncICHATGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        chatId
        chat {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        bio
        image
        backgroundImage
        admins {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getICHATMessage = /* GraphQL */ `
  query GetICHATMessage($id: ID!) {
    getICHATMessage(id: $id) {
      id
      sender {
        id
        image
        name
        type
        address
        pinCode
        authInfo {
          userId
          email
          phoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authUserPermission {
          userId
          allowCourseCreation
          email
          allowEduCares
          phoneNumber
          altPhoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        usersChats {
          nextToken
          startedAt
        }
        moderatorInChannels {
          nextToken
          startedAt
        }
        adminInGroups {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      content
      chatId
      chat {
        name
        id
        users {
          nextToken
          startedAt
        }
        type
        latestMessage {
          id
          content
          chatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATMessageSenderId
        }
        messages {
          nextToken
        }
        channelInfo {
          chatId
          bio
          image
          backgroundImage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATChannelAdminId
        }
        groupInfo {
          chatId
          bio
          image
          backgroundImage
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATLatestMessageId
        iCHATChannelInfoChatId
        iCHATGroupInfoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      iCHATMessageSenderId
    }
  }
`;
export const listICHATMessages = /* GraphQL */ `
  query ListICHATMessages(
    $filter: ModelICHATMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listICHATMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sender {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        content
        chatId
        chat {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATMessageSenderId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncICHATMessages = /* GraphQL */ `
  query SyncICHATMessages(
    $filter: ModelICHATMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncICHATMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sender {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        content
        chatId
        chat {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATMessageSenderId
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserChats = /* GraphQL */ `
  query GetUserChats($id: ID!) {
    getUserChats(id: $id) {
      id
      userId
      iCHATId
      user {
        id
        image
        name
        type
        address
        pinCode
        authInfo {
          userId
          email
          phoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authUserPermission {
          userId
          allowCourseCreation
          email
          allowEduCares
          phoneNumber
          altPhoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        usersChats {
          nextToken
          startedAt
        }
        moderatorInChannels {
          nextToken
          startedAt
        }
        adminInGroups {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      iCHAT {
        name
        id
        users {
          nextToken
          startedAt
        }
        type
        latestMessage {
          id
          content
          chatId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATMessageSenderId
        }
        messages {
          nextToken
        }
        channelInfo {
          chatId
          bio
          image
          backgroundImage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATChannelAdminId
        }
        groupInfo {
          chatId
          bio
          image
          backgroundImage
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATLatestMessageId
        iCHATChannelInfoChatId
        iCHATGroupInfoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserChats = /* GraphQL */ `
  query ListUserChats(
    $filter: ModelUserChatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        iCHATId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        iCHAT {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserChats = /* GraphQL */ `
  query SyncUserChats(
    $filter: ModelUserChatsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserChats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        iCHATId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        iCHAT {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserChannelModerators = /* GraphQL */ `
  query GetUserChannelModerators($id: ID!) {
    getUserChannelModerators(id: $id) {
      id
      userId
      iCHATChannelChatId
      user {
        id
        image
        name
        type
        address
        pinCode
        authInfo {
          userId
          email
          phoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authUserPermission {
          userId
          allowCourseCreation
          email
          allowEduCares
          phoneNumber
          altPhoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        usersChats {
          nextToken
          startedAt
        }
        moderatorInChannels {
          nextToken
          startedAt
        }
        adminInGroups {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      iCHATChannel {
        chatId
        chat {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        bio
        image
        backgroundImage
        admin {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        moderators {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATChannelAdminId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserChannelModerators = /* GraphQL */ `
  query ListUserChannelModerators(
    $filter: ModelUserChannelModeratorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChannelModerators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        iCHATChannelChatId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        iCHATChannel {
          chatId
          bio
          image
          backgroundImage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATChannelAdminId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserChannelModerators = /* GraphQL */ `
  query SyncUserChannelModerators(
    $filter: ModelUserChannelModeratorsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserChannelModerators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        iCHATChannelChatId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        iCHATChannel {
          chatId
          bio
          image
          backgroundImage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATChannelAdminId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserGroupAdmins = /* GraphQL */ `
  query GetUserGroupAdmins($id: ID!) {
    getUserGroupAdmins(id: $id) {
      id
      userId
      iCHATGroupId
      user {
        id
        image
        name
        type
        address
        pinCode
        authInfo {
          userId
          email
          phoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        authUserPermission {
          userId
          allowCourseCreation
          email
          allowEduCares
          phoneNumber
          altPhoneNum
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        usersChats {
          nextToken
          startedAt
        }
        moderatorInChannels {
          nextToken
          startedAt
        }
        adminInGroups {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      iCHATGroup {
        chatId
        chat {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        bio
        image
        backgroundImage
        admins {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserGroupAdmins = /* GraphQL */ `
  query ListUserGroupAdmins(
    $filter: ModelUserGroupAdminsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGroupAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        iCHATGroupId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        iCHATGroup {
          chatId
          bio
          image
          backgroundImage
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserGroupAdmins = /* GraphQL */ `
  query SyncUserGroupAdmins(
    $filter: ModelUserGroupAdminsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserGroupAdmins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        iCHATGroupId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        iCHATGroup {
          chatId
          bio
          image
          backgroundImage
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const messagesByChat = /* GraphQL */ `
  query MessagesByChat(
    $chatId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModeliCHATMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChat(
      chatId: $chatId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sender {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        content
        chatId
        chat {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        iCHATMessageSenderId
      }
      nextToken
    }
  }
`;
export const userChatsByUserId = /* GraphQL */ `
  query UserChatsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        iCHATId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        iCHAT {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userChatsByICHATId = /* GraphQL */ `
  query UserChatsByICHATId(
    $iCHATId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatsByICHATId(
      iCHATId: $iCHATId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        iCHATId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        iCHAT {
          name
          id
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATLatestMessageId
          iCHATChannelInfoChatId
          iCHATGroupInfoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userChannelModeratorsByUserId = /* GraphQL */ `
  query UserChannelModeratorsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChannelModeratorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChannelModeratorsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        iCHATChannelChatId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        iCHATChannel {
          chatId
          bio
          image
          backgroundImage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATChannelAdminId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userChannelModeratorsByICHATChannelChatId = /* GraphQL */ `
  query UserChannelModeratorsByICHATChannelChatId(
    $iCHATChannelChatId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChannelModeratorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChannelModeratorsByICHATChannelChatId(
      iCHATChannelChatId: $iCHATChannelChatId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        iCHATChannelChatId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        iCHATChannel {
          chatId
          bio
          image
          backgroundImage
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          iCHATChannelAdminId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userGroupAdminsByUserId = /* GraphQL */ `
  query UserGroupAdminsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserGroupAdminsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userGroupAdminsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        iCHATGroupId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        iCHATGroup {
          chatId
          bio
          image
          backgroundImage
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userGroupAdminsByICHATGroupId = /* GraphQL */ `
  query UserGroupAdminsByICHATGroupId(
    $iCHATGroupId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserGroupAdminsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userGroupAdminsByICHATGroupId(
      iCHATGroupId: $iCHATGroupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        iCHATGroupId
        user {
          id
          image
          name
          type
          address
          pinCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        iCHATGroup {
          chatId
          bio
          image
          backgroundImage
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
