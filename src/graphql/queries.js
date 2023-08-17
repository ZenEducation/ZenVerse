/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      title
      titleHTML
      type
      answer
      range {
        is
        start
        end
        __typename
      }
      isPartial
      isNegative
      maxMarks
      ifCorrect
      ifWrong
      options {
        text
        html
        isCorrectAnswer
        __typename
      }
      ismultipleChoice
      criterias {
        text
        percentage
        __typename
      }
      explanation
      instruction
      topic
      difficuilty
      sectionID
      groupID
      order
      guidelineTime
      examID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        titleHTML
        type
        answer
        range {
          is
          start
          end
          __typename
        }
        isPartial
        isNegative
        maxMarks
        ifCorrect
        ifWrong
        options {
          text
          html
          isCorrectAnswer
          __typename
        }
        ismultipleChoice
        criterias {
          text
          percentage
          __typename
        }
        explanation
        instruction
        topic
        difficuilty
        sectionID
        groupID
        order
        guidelineTime
        examID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        titleHTML
        type
        answer
        range {
          is
          start
          end
          __typename
        }
        isPartial
        isNegative
        maxMarks
        ifCorrect
        ifWrong
        options {
          text
          html
          isCorrectAnswer
          __typename
        }
        ismultipleChoice
        criterias {
          text
          percentage
          __typename
        }
        explanation
        instruction
        topic
        difficuilty
        sectionID
        groupID
        order
        guidelineTime
        examID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const questionsBySectionID = /* GraphQL */ `
  query QuestionsBySectionID(
    $sectionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsBySectionID(
      sectionID: $sectionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        titleHTML
        type
        answer
        range {
          is
          start
          end
          __typename
        }
        isPartial
        isNegative
        maxMarks
        ifCorrect
        ifWrong
        options {
          text
          html
          isCorrectAnswer
          __typename
        }
        ismultipleChoice
        criterias {
          text
          percentage
          __typename
        }
        explanation
        instruction
        topic
        difficuilty
        sectionID
        groupID
        order
        guidelineTime
        examID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const questionsByGroupID = /* GraphQL */ `
  query QuestionsByGroupID(
    $groupID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsByGroupID(
      groupID: $groupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        titleHTML
        type
        answer
        range {
          is
          start
          end
          __typename
        }
        isPartial
        isNegative
        maxMarks
        ifCorrect
        ifWrong
        options {
          text
          html
          isCorrectAnswer
          __typename
        }
        ismultipleChoice
        criterias {
          text
          percentage
          __typename
        }
        explanation
        instruction
        topic
        difficuilty
        sectionID
        groupID
        order
        guidelineTime
        examID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const questionsByExamID = /* GraphQL */ `
  query QuestionsByExamID(
    $examID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsByExamID(
      examID: $examID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        titleHTML
        type
        answer
        range {
          is
          start
          end
          __typename
        }
        isPartial
        isNegative
        maxMarks
        ifCorrect
        ifWrong
        options {
          text
          html
          isCorrectAnswer
          __typename
        }
        ismultipleChoice
        criterias {
          text
          percentage
          __typename
        }
        explanation
        instruction
        topic
        difficuilty
        sectionID
        groupID
        order
        guidelineTime
        examID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      title
      instruction
      order
      difficuilty
      sectionID
      Questions {
        items {
          id
          title
          titleHTML
          type
          answer
          isPartial
          isNegative
          maxMarks
          ifCorrect
          ifWrong
          ismultipleChoice
          explanation
          instruction
          topic
          difficuilty
          sectionID
          groupID
          order
          guidelineTime
          examID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      examID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        instruction
        order
        difficuilty
        sectionID
        Questions {
          nextToken
          startedAt
          __typename
        }
        examID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncGroups = /* GraphQL */ `
  query SyncGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        instruction
        order
        difficuilty
        sectionID
        Questions {
          nextToken
          startedAt
          __typename
        }
        examID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const groupsBySectionID = /* GraphQL */ `
  query GroupsBySectionID(
    $sectionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupsBySectionID(
      sectionID: $sectionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        instruction
        order
        difficuilty
        sectionID
        Questions {
          nextToken
          startedAt
          __typename
        }
        examID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const groupsByExamID = /* GraphQL */ `
  query GroupsByExamID(
    $examID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupsByExamID(
      examID: $examID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        instruction
        order
        difficuilty
        sectionID
        Questions {
          nextToken
          startedAt
          __typename
        }
        examID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
      id
      title
      examID
      Questions {
        items {
          id
          title
          titleHTML
          type
          answer
          isPartial
          isNegative
          maxMarks
          ifCorrect
          ifWrong
          ismultipleChoice
          explanation
          instruction
          topic
          difficuilty
          sectionID
          groupID
          order
          guidelineTime
          examID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Groups {
        items {
          id
          title
          instruction
          order
          difficuilty
          sectionID
          examID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        examID
        Questions {
          nextToken
          startedAt
          __typename
        }
        Groups {
          nextToken
          startedAt
          __typename
        }
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSections = /* GraphQL */ `
  query SyncSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        examID
        Questions {
          nextToken
          startedAt
          __typename
        }
        Groups {
          nextToken
          startedAt
          __typename
        }
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const sectionsByExamID = /* GraphQL */ `
  query SectionsByExamID(
    $examID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sectionsByExamID(
      examID: $examID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        examID
        Questions {
          nextToken
          startedAt
          __typename
        }
        Groups {
          nextToken
          startedAt
          __typename
        }
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getExam = /* GraphQL */ `
  query GetExam($id: ID!) {
    getExam(id: $id) {
      id
      title
      description
      instructions
      Sections {
        items {
          id
          title
          examID
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      MockTest {
        id
        name
        shortId
        isFree
        publishingDate
        publishingStatus
        description
        shortDescription
        price
        discount
        isValidityDays
        validityDays
        expiryDate
        VariablePricings {
          nextToken
          startedAt
          __typename
        }
        Exam {
          id
          title
          description
          instructions
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          examMockTestId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        mockTestExamId
        __typename
      }
      Groups {
        items {
          id
          title
          instruction
          order
          difficuilty
          sectionID
          examID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Questions {
        items {
          id
          title
          titleHTML
          type
          answer
          isPartial
          isNegative
          maxMarks
          ifCorrect
          ifWrong
          ismultipleChoice
          explanation
          instruction
          topic
          difficuilty
          sectionID
          groupID
          order
          guidelineTime
          examID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      examMockTestId
      __typename
    }
  }
`;
export const listExams = /* GraphQL */ `
  query ListExams(
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        instructions
        Sections {
          nextToken
          startedAt
          __typename
        }
        MockTest {
          id
          name
          shortId
          isFree
          publishingDate
          publishingStatus
          description
          shortDescription
          price
          discount
          isValidityDays
          validityDays
          expiryDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          mockTestExamId
          __typename
        }
        Groups {
          nextToken
          startedAt
          __typename
        }
        Questions {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        examMockTestId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncExams = /* GraphQL */ `
  query SyncExams(
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        instructions
        Sections {
          nextToken
          startedAt
          __typename
        }
        MockTest {
          id
          name
          shortId
          isFree
          publishingDate
          publishingStatus
          description
          shortDescription
          price
          discount
          isValidityDays
          validityDays
          expiryDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          mockTestExamId
          __typename
        }
        Groups {
          nextToken
          startedAt
          __typename
        }
        Questions {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        examMockTestId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getVariablePricing = /* GraphQL */ `
  query GetVariablePricing($id: ID!) {
    getVariablePricing(id: $id) {
      id
      days
      price
      discountPrice
      mocktestID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listVariablePricings = /* GraphQL */ `
  query ListVariablePricings(
    $filter: ModelVariablePricingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVariablePricings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        days
        price
        discountPrice
        mocktestID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncVariablePricings = /* GraphQL */ `
  query SyncVariablePricings(
    $filter: ModelVariablePricingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVariablePricings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        days
        price
        discountPrice
        mocktestID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const variablePricingsByMocktestID = /* GraphQL */ `
  query VariablePricingsByMocktestID(
    $mocktestID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVariablePricingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    variablePricingsByMocktestID(
      mocktestID: $mocktestID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        days
        price
        discountPrice
        mocktestID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMockTest = /* GraphQL */ `
  query GetMockTest($id: ID!) {
    getMockTest(id: $id) {
      id
      name
      shortId
      isFree
      publishingDate
      publishingStatus
      description
      shortDescription
      price
      discount
      isValidityDays
      validityDays
      expiryDate
      VariablePricings {
        items {
          id
          days
          price
          discountPrice
          mocktestID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Exam {
        id
        title
        description
        instructions
        Sections {
          nextToken
          startedAt
          __typename
        }
        MockTest {
          id
          name
          shortId
          isFree
          publishingDate
          publishingStatus
          description
          shortDescription
          price
          discount
          isValidityDays
          validityDays
          expiryDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          mockTestExamId
          __typename
        }
        Groups {
          nextToken
          startedAt
          __typename
        }
        Questions {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        examMockTestId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      mockTestExamId
      __typename
    }
  }
`;
export const listMockTests = /* GraphQL */ `
  query ListMockTests(
    $filter: ModelMockTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMockTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        shortId
        isFree
        publishingDate
        publishingStatus
        description
        shortDescription
        price
        discount
        isValidityDays
        validityDays
        expiryDate
        VariablePricings {
          nextToken
          startedAt
          __typename
        }
        Exam {
          id
          title
          description
          instructions
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          examMockTestId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        mockTestExamId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMockTests = /* GraphQL */ `
  query SyncMockTests(
    $filter: ModelMockTestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMockTests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        shortId
        isFree
        publishingDate
        publishingStatus
        description
        shortDescription
        price
        discount
        isValidityDays
        validityDays
        expiryDate
        VariablePricings {
          nextToken
          startedAt
          __typename
        }
        Exam {
          id
          title
          description
          instructions
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          examMockTestId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        mockTestExamId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getLearner = /* GraphQL */ `
  query GetLearner($id: ID!) {
    getLearner(id: $id) {
      id
      name
      email
      mobile
      lastLogin
      joinedOn
      isEnabled
      products
      leadStatus
      userSegment
      password
      role
      state
      language
      userNote
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listLearners = /* GraphQL */ `
  query ListLearners(
    $filter: ModelLearnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLearners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        password
        role
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncLearners = /* GraphQL */ `
  query SyncLearners(
    $filter: ModelLearnerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLearners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        password
        role
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAffiliate = /* GraphQL */ `
  query GetAffiliate($id: ID!) {
    getAffiliate(id: $id) {
      id
      name
      email
      mobile
      lastLogin
      joinedOn
      isEnabled
      products
      leadStatus
      userSegment
      commitionRate
      isLifelong
      password
      role
      state
      language
      userNote
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAffiliates = /* GraphQL */ `
  query ListAffiliates(
    $filter: ModelAffiliateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAffiliates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        commitionRate
        isLifelong
        password
        role
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAffiliates = /* GraphQL */ `
  query SyncAffiliates(
    $filter: ModelAffiliateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAffiliates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        commitionRate
        isLifelong
        password
        role
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAdmin = /* GraphQL */ `
  query GetAdmin($id: ID!) {
    getAdmin(id: $id) {
      id
      name
      email
      mobile
      lastLogin
      joinedOn
      isEnabled
      products
      leadStatus
      userSegment
      role
      password
      state
      language
      userNote
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAdmins = /* GraphQL */ `
  query ListAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        role
        password
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAdmins = /* GraphQL */ `
  query SyncAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAdmins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        role
        password
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getInstructor = /* GraphQL */ `
  query GetInstructor($id: ID!) {
    getInstructor(id: $id) {
      id
      name
      email
      mobile
      lastLogin
      joinedOn
      isEnabled
      products
      leadStatus
      userSegment
      password
      role
      state
      language
      userNote
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listInstructors = /* GraphQL */ `
  query ListInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        password
        role
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncInstructors = /* GraphQL */ `
  query SyncInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInstructors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        mobile
        lastLogin
        joinedOn
        isEnabled
        products
        leadStatus
        userSegment
        password
        role
        state
        language
        userNote
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
