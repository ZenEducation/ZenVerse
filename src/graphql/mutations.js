/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuthInfo = /* GraphQL */ `
  mutation CreateAuthInfo(
    $input: CreateAuthInfoInput!
    $condition: ModelAuthInfoConditionInput
  ) {
    createAuthInfo(input: $input, condition: $condition) {
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
export const updateAuthInfo = /* GraphQL */ `
  mutation UpdateAuthInfo(
    $input: UpdateAuthInfoInput!
    $condition: ModelAuthInfoConditionInput
  ) {
    updateAuthInfo(input: $input, condition: $condition) {
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
export const deleteAuthInfo = /* GraphQL */ `
  mutation DeleteAuthInfo(
    $input: DeleteAuthInfoInput!
    $condition: ModelAuthInfoConditionInput
  ) {
    deleteAuthInfo(input: $input, condition: $condition) {
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
export const createAuthUserPermission = /* GraphQL */ `
  mutation CreateAuthUserPermission(
    $input: CreateAuthUserPermissionInput!
    $condition: ModelAuthUserPermissionConditionInput
  ) {
    createAuthUserPermission(input: $input, condition: $condition) {
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
export const updateAuthUserPermission = /* GraphQL */ `
  mutation UpdateAuthUserPermission(
    $input: UpdateAuthUserPermissionInput!
    $condition: ModelAuthUserPermissionConditionInput
  ) {
    updateAuthUserPermission(input: $input, condition: $condition) {
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
export const deleteAuthUserPermission = /* GraphQL */ `
  mutation DeleteAuthUserPermission(
    $input: DeleteAuthUserPermissionInput!
    $condition: ModelAuthUserPermissionConditionInput
  ) {
    deleteAuthUserPermission(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createICHAT = /* GraphQL */ `
  mutation CreateICHAT(
    $input: CreateICHATInput!
    $condition: ModelICHATConditionInput
  ) {
    createICHAT(input: $input, condition: $condition) {
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
export const updateICHAT = /* GraphQL */ `
  mutation UpdateICHAT(
    $input: UpdateICHATInput!
    $condition: ModelICHATConditionInput
  ) {
    updateICHAT(input: $input, condition: $condition) {
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
export const deleteICHAT = /* GraphQL */ `
  mutation DeleteICHAT(
    $input: DeleteICHATInput!
    $condition: ModelICHATConditionInput
  ) {
    deleteICHAT(input: $input, condition: $condition) {
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
export const createICHATChannel = /* GraphQL */ `
  mutation CreateICHATChannel(
    $input: CreateICHATChannelInput!
    $condition: ModelICHATChannelConditionInput
  ) {
    createICHATChannel(input: $input, condition: $condition) {
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
export const updateICHATChannel = /* GraphQL */ `
  mutation UpdateICHATChannel(
    $input: UpdateICHATChannelInput!
    $condition: ModelICHATChannelConditionInput
  ) {
    updateICHATChannel(input: $input, condition: $condition) {
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
export const deleteICHATChannel = /* GraphQL */ `
  mutation DeleteICHATChannel(
    $input: DeleteICHATChannelInput!
    $condition: ModelICHATChannelConditionInput
  ) {
    deleteICHATChannel(input: $input, condition: $condition) {
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
export const createICHATGroup = /* GraphQL */ `
  mutation CreateICHATGroup(
    $input: CreateICHATGroupInput!
    $condition: ModelICHATGroupConditionInput
  ) {
    createICHATGroup(input: $input, condition: $condition) {
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
export const updateICHATGroup = /* GraphQL */ `
  mutation UpdateICHATGroup(
    $input: UpdateICHATGroupInput!
    $condition: ModelICHATGroupConditionInput
  ) {
    updateICHATGroup(input: $input, condition: $condition) {
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
export const deleteICHATGroup = /* GraphQL */ `
  mutation DeleteICHATGroup(
    $input: DeleteICHATGroupInput!
    $condition: ModelICHATGroupConditionInput
  ) {
    deleteICHATGroup(input: $input, condition: $condition) {
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
export const createICHATMessage = /* GraphQL */ `
  mutation CreateICHATMessage(
    $input: CreateICHATMessageInput!
    $condition: ModelICHATMessageConditionInput
  ) {
    createICHATMessage(input: $input, condition: $condition) {
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
export const updateICHATMessage = /* GraphQL */ `
  mutation UpdateICHATMessage(
    $input: UpdateICHATMessageInput!
    $condition: ModelICHATMessageConditionInput
  ) {
    updateICHATMessage(input: $input, condition: $condition) {
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
export const deleteICHATMessage = /* GraphQL */ `
  mutation DeleteICHATMessage(
    $input: DeleteICHATMessageInput!
    $condition: ModelICHATMessageConditionInput
  ) {
    deleteICHATMessage(input: $input, condition: $condition) {
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
export const createUserChats = /* GraphQL */ `
  mutation CreateUserChats(
    $input: CreateUserChatsInput!
    $condition: ModelUserChatsConditionInput
  ) {
    createUserChats(input: $input, condition: $condition) {
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
export const updateUserChats = /* GraphQL */ `
  mutation UpdateUserChats(
    $input: UpdateUserChatsInput!
    $condition: ModelUserChatsConditionInput
  ) {
    updateUserChats(input: $input, condition: $condition) {
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
export const deleteUserChats = /* GraphQL */ `
  mutation DeleteUserChats(
    $input: DeleteUserChatsInput!
    $condition: ModelUserChatsConditionInput
  ) {
    deleteUserChats(input: $input, condition: $condition) {
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
export const createUserChannelModerators = /* GraphQL */ `
  mutation CreateUserChannelModerators(
    $input: CreateUserChannelModeratorsInput!
    $condition: ModelUserChannelModeratorsConditionInput
  ) {
    createUserChannelModerators(input: $input, condition: $condition) {
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
export const updateUserChannelModerators = /* GraphQL */ `
  mutation UpdateUserChannelModerators(
    $input: UpdateUserChannelModeratorsInput!
    $condition: ModelUserChannelModeratorsConditionInput
  ) {
    updateUserChannelModerators(input: $input, condition: $condition) {
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
export const deleteUserChannelModerators = /* GraphQL */ `
  mutation DeleteUserChannelModerators(
    $input: DeleteUserChannelModeratorsInput!
    $condition: ModelUserChannelModeratorsConditionInput
  ) {
    deleteUserChannelModerators(input: $input, condition: $condition) {
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
export const createUserGroupAdmins = /* GraphQL */ `
  mutation CreateUserGroupAdmins(
    $input: CreateUserGroupAdminsInput!
    $condition: ModelUserGroupAdminsConditionInput
  ) {
    createUserGroupAdmins(input: $input, condition: $condition) {
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
export const updateUserGroupAdmins = /* GraphQL */ `
  mutation UpdateUserGroupAdmins(
    $input: UpdateUserGroupAdminsInput!
    $condition: ModelUserGroupAdminsConditionInput
  ) {
    updateUserGroupAdmins(input: $input, condition: $condition) {
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
export const deleteUserGroupAdmins = /* GraphQL */ `
  mutation DeleteUserGroupAdmins(
    $input: DeleteUserGroupAdminsInput!
    $condition: ModelUserGroupAdminsConditionInput
  ) {
    deleteUserGroupAdmins(input: $input, condition: $condition) {
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
