/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuthInfo = /* GraphQL */ `
  subscription OnCreateAuthInfo($filter: ModelSubscriptionAuthInfoFilterInput) {
    onCreateAuthInfo(filter: $filter) {
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
export const onUpdateAuthInfo = /* GraphQL */ `
  subscription OnUpdateAuthInfo($filter: ModelSubscriptionAuthInfoFilterInput) {
    onUpdateAuthInfo(filter: $filter) {
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
export const onDeleteAuthInfo = /* GraphQL */ `
  subscription OnDeleteAuthInfo($filter: ModelSubscriptionAuthInfoFilterInput) {
    onDeleteAuthInfo(filter: $filter) {
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
export const onCreateAuthUserPermission = /* GraphQL */ `
  subscription OnCreateAuthUserPermission(
    $filter: ModelSubscriptionAuthUserPermissionFilterInput
  ) {
    onCreateAuthUserPermission(filter: $filter) {
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
export const onUpdateAuthUserPermission = /* GraphQL */ `
  subscription OnUpdateAuthUserPermission(
    $filter: ModelSubscriptionAuthUserPermissionFilterInput
  ) {
    onUpdateAuthUserPermission(filter: $filter) {
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
export const onDeleteAuthUserPermission = /* GraphQL */ `
  subscription OnDeleteAuthUserPermission(
    $filter: ModelSubscriptionAuthUserPermissionFilterInput
  ) {
    onDeleteAuthUserPermission(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateICHAT = /* GraphQL */ `
  subscription OnCreateICHAT($filter: ModelSubscriptionICHATFilterInput) {
    onCreateICHAT(filter: $filter) {
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
export const onUpdateICHAT = /* GraphQL */ `
  subscription OnUpdateICHAT($filter: ModelSubscriptionICHATFilterInput) {
    onUpdateICHAT(filter: $filter) {
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
export const onDeleteICHAT = /* GraphQL */ `
  subscription OnDeleteICHAT($filter: ModelSubscriptionICHATFilterInput) {
    onDeleteICHAT(filter: $filter) {
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
export const onCreateICHATChannel = /* GraphQL */ `
  subscription OnCreateICHATChannel(
    $filter: ModelSubscriptionICHATChannelFilterInput
  ) {
    onCreateICHATChannel(filter: $filter) {
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
export const onUpdateICHATChannel = /* GraphQL */ `
  subscription OnUpdateICHATChannel(
    $filter: ModelSubscriptionICHATChannelFilterInput
  ) {
    onUpdateICHATChannel(filter: $filter) {
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
export const onDeleteICHATChannel = /* GraphQL */ `
  subscription OnDeleteICHATChannel(
    $filter: ModelSubscriptionICHATChannelFilterInput
  ) {
    onDeleteICHATChannel(filter: $filter) {
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
export const onCreateICHATGroup = /* GraphQL */ `
  subscription OnCreateICHATGroup(
    $filter: ModelSubscriptionICHATGroupFilterInput
  ) {
    onCreateICHATGroup(filter: $filter) {
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
export const onUpdateICHATGroup = /* GraphQL */ `
  subscription OnUpdateICHATGroup(
    $filter: ModelSubscriptionICHATGroupFilterInput
  ) {
    onUpdateICHATGroup(filter: $filter) {
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
export const onDeleteICHATGroup = /* GraphQL */ `
  subscription OnDeleteICHATGroup(
    $filter: ModelSubscriptionICHATGroupFilterInput
  ) {
    onDeleteICHATGroup(filter: $filter) {
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
export const onCreateICHATMessage = /* GraphQL */ `
  subscription OnCreateICHATMessage(
    $filter: ModelSubscriptionICHATMessageFilterInput
  ) {
    onCreateICHATMessage(filter: $filter) {
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
export const onUpdateICHATMessage = /* GraphQL */ `
  subscription OnUpdateICHATMessage(
    $filter: ModelSubscriptionICHATMessageFilterInput
  ) {
    onUpdateICHATMessage(filter: $filter) {
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
export const onDeleteICHATMessage = /* GraphQL */ `
  subscription OnDeleteICHATMessage(
    $filter: ModelSubscriptionICHATMessageFilterInput
  ) {
    onDeleteICHATMessage(filter: $filter) {
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
export const onCreateUserChats = /* GraphQL */ `
  subscription OnCreateUserChats(
    $filter: ModelSubscriptionUserChatsFilterInput
  ) {
    onCreateUserChats(filter: $filter) {
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
export const onUpdateUserChats = /* GraphQL */ `
  subscription OnUpdateUserChats(
    $filter: ModelSubscriptionUserChatsFilterInput
  ) {
    onUpdateUserChats(filter: $filter) {
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
export const onDeleteUserChats = /* GraphQL */ `
  subscription OnDeleteUserChats(
    $filter: ModelSubscriptionUserChatsFilterInput
  ) {
    onDeleteUserChats(filter: $filter) {
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
export const onCreateUserChannelModerators = /* GraphQL */ `
  subscription OnCreateUserChannelModerators(
    $filter: ModelSubscriptionUserChannelModeratorsFilterInput
  ) {
    onCreateUserChannelModerators(filter: $filter) {
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
export const onUpdateUserChannelModerators = /* GraphQL */ `
  subscription OnUpdateUserChannelModerators(
    $filter: ModelSubscriptionUserChannelModeratorsFilterInput
  ) {
    onUpdateUserChannelModerators(filter: $filter) {
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
export const onDeleteUserChannelModerators = /* GraphQL */ `
  subscription OnDeleteUserChannelModerators(
    $filter: ModelSubscriptionUserChannelModeratorsFilterInput
  ) {
    onDeleteUserChannelModerators(filter: $filter) {
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
export const onCreateUserGroupAdmins = /* GraphQL */ `
  subscription OnCreateUserGroupAdmins(
    $filter: ModelSubscriptionUserGroupAdminsFilterInput
  ) {
    onCreateUserGroupAdmins(filter: $filter) {
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
export const onUpdateUserGroupAdmins = /* GraphQL */ `
  subscription OnUpdateUserGroupAdmins(
    $filter: ModelSubscriptionUserGroupAdminsFilterInput
  ) {
    onUpdateUserGroupAdmins(filter: $filter) {
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
export const onDeleteUserGroupAdmins = /* GraphQL */ `
  subscription OnDeleteUserGroupAdmins(
    $filter: ModelSubscriptionUserGroupAdminsFilterInput
  ) {
    onDeleteUserGroupAdmins(filter: $filter) {
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
