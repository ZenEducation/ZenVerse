/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
      id
      title
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
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
export const syncTopics = /* GraphQL */ `
  query SyncTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTopics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
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
export const getResponce = /* GraphQL */ `
  query GetResponce($id: ID!) {
    getResponce(id: $id) {
      id
      questionID
      time
      responce
      attemptID
      Question {
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
        Responces {
          items {
            id
            questionID
            time
            responce
            attemptID
            sectionID
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
        Group {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      sectionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listResponces = /* GraphQL */ `
  query ListResponces(
    $filter: ModelResponceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        questionID
        time
        responce
        attemptID
        Question {
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
          Responces {
            nextToken
            startedAt
            __typename
          }
          Group {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        sectionID
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
export const syncResponces = /* GraphQL */ `
  query SyncResponces(
    $filter: ModelResponceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResponces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        questionID
        time
        responce
        attemptID
        Question {
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
          Responces {
            nextToken
            startedAt
            __typename
          }
          Group {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        sectionID
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
export const responcesByQuestionID = /* GraphQL */ `
  query ResponcesByQuestionID(
    $questionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResponceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    responcesByQuestionID(
      questionID: $questionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        questionID
        time
        responce
        attemptID
        Question {
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
          Responces {
            nextToken
            startedAt
            __typename
          }
          Group {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        sectionID
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
export const responcesByAttemptID = /* GraphQL */ `
  query ResponcesByAttemptID(
    $attemptID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResponceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    responcesByAttemptID(
      attemptID: $attemptID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        questionID
        time
        responce
        attemptID
        Question {
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
          Responces {
            nextToken
            startedAt
            __typename
          }
          Group {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        sectionID
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
export const responcesBySectionID = /* GraphQL */ `
  query ResponcesBySectionID(
    $sectionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResponceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    responcesBySectionID(
      sectionID: $sectionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        questionID
        time
        responce
        attemptID
        Question {
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
          Responces {
            nextToken
            startedAt
            __typename
          }
          Group {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        sectionID
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
export const getAttempt = /* GraphQL */ `
  query GetAttempt($id: ID!) {
    getAttempt(id: $id) {
      id
      examID
      Responces {
        items {
          id
          questionID
          time
          responce
          attemptID
          Question {
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
          sectionID
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
      marks
      status
      Exam {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        Attempts {
          items {
            id
            examID
            marks
            status
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAttempts = /* GraphQL */ `
  query ListAttempts(
    $filter: ModelAttemptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttempts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        examID
        Responces {
          items {
            id
            questionID
            time
            responce
            attemptID
            sectionID
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
        marks
        status
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
          Attempts {
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAttempts = /* GraphQL */ `
  query SyncAttempts(
    $filter: ModelAttemptFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttempts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        examID
        Responces {
          items {
            id
            questionID
            time
            responce
            attemptID
            sectionID
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
        marks
        status
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
          Attempts {
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const attemptsByExamID = /* GraphQL */ `
  query AttemptsByExamID(
    $examID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttemptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attemptsByExamID(
      examID: $examID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        examID
        Responces {
          items {
            id
            questionID
            time
            responce
            attemptID
            sectionID
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
        marks
        status
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
          Attempts {
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
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
      Responces {
        items {
          id
          questionID
          time
          responce
          attemptID
          Question {
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
          sectionID
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
      Group {
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
        Responces {
          items {
            id
            questionID
            time
            responce
            attemptID
            sectionID
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
        Group {
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
        Responces {
          items {
            id
            questionID
            time
            responce
            attemptID
            sectionID
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
        Group {
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
        Responces {
          items {
            id
            questionID
            time
            responce
            attemptID
            sectionID
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
        Group {
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
        Responces {
          items {
            id
            questionID
            time
            responce
            attemptID
            sectionID
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
        Group {
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
        Responces {
          items {
            id
            questionID
            time
            responce
            attemptID
            sectionID
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
        Group {
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
          Responces {
            nextToken
            startedAt
            __typename
          }
          Group {
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
          Responces {
            nextToken
            startedAt
            __typename
          }
          Group {
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
      description
      Responces {
        items {
          id
          questionID
          time
          responce
          attemptID
          Question {
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
          sectionID
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
        Responces {
          items {
            id
            questionID
            time
            responce
            attemptID
            sectionID
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
        Responces {
          items {
            id
            questionID
            time
            responce
            attemptID
            sectionID
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
        Responces {
          items {
            id
            questionID
            time
            responce
            attemptID
            sectionID
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
          Responces {
            nextToken
            startedAt
            __typename
          }
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
          Attempts {
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
        Learners {
          items {
            id
            mockTestId
            learnerId
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
        Affiliates {
          items {
            id
            mockTestId
            affiliateId
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
        Admin {
          items {
            id
            mockTestId
            adminId
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
        Instructors {
          items {
            id
            mockTestId
            instructorId
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
      Questions {
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
          Responces {
            nextToken
            startedAt
            __typename
          }
          Group {
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
      Attempts {
        items {
          id
          examID
          Responces {
            nextToken
            startedAt
            __typename
          }
          marks
          status
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        Attempts {
          items {
            id
            examID
            marks
            status
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        Attempts {
          items {
            id
            examID
            marks
            status
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        Attempts {
          items {
            id
            examID
            marks
            status
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
      Learners {
        items {
          id
          mockTestId
          learnerId
          mockTest {
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
          learner {
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
      Affiliates {
        items {
          id
          mockTestId
          affiliateId
          mockTest {
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
          affiliate {
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
      Admin {
        items {
          id
          mockTestId
          adminId
          mockTest {
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
          admin {
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
      Instructors {
        items {
          id
          mockTestId
          instructorId
          mockTest {
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
          instructor {
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
          Attempts {
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
        Learners {
          items {
            id
            mockTestId
            learnerId
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
        Affiliates {
          items {
            id
            mockTestId
            affiliateId
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
        Admin {
          items {
            id
            mockTestId
            adminId
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
        Instructors {
          items {
            id
            mockTestId
            instructorId
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
          Attempts {
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
        Learners {
          items {
            id
            mockTestId
            learnerId
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
        Affiliates {
          items {
            id
            mockTestId
            affiliateId
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
        Admin {
          items {
            id
            mockTestId
            adminId
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
        Instructors {
          items {
            id
            mockTestId
            instructorId
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
      mocktests {
        items {
          id
          mockTestId
          learnerId
          mockTest {
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
          learner {
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
        mocktests {
          items {
            id
            mockTestId
            learnerId
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
        mocktests {
          items {
            id
            mockTestId
            learnerId
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
      mocktests {
        items {
          id
          mockTestId
          affiliateId
          mockTest {
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
          affiliate {
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
        mocktests {
          items {
            id
            mockTestId
            affiliateId
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
        mocktests {
          items {
            id
            mockTestId
            affiliateId
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
      mocktests {
        items {
          id
          mockTestId
          adminId
          mockTest {
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
          admin {
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
        mocktests {
          items {
            id
            mockTestId
            adminId
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
        mocktests {
          items {
            id
            mockTestId
            adminId
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
      mocktests {
        items {
          id
          mockTestId
          instructorId
          mockTest {
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
          instructor {
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
        mocktests {
          items {
            id
            mockTestId
            instructorId
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
        mocktests {
          items {
            id
            mockTestId
            instructorId
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMockTestLearner = /* GraphQL */ `
  query GetMockTestLearner($id: ID!) {
    getMockTestLearner(id: $id) {
      id
      mockTestId
      learnerId
      mockTest {
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
          Attempts {
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
        Learners {
          items {
            id
            mockTestId
            learnerId
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
        Affiliates {
          items {
            id
            mockTestId
            affiliateId
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
        Admin {
          items {
            id
            mockTestId
            adminId
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
        Instructors {
          items {
            id
            mockTestId
            instructorId
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
        mockTestExamId
        __typename
      }
      learner {
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
        mocktests {
          items {
            id
            mockTestId
            learnerId
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
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMockTestLearners = /* GraphQL */ `
  query ListMockTestLearners(
    $filter: ModelMockTestLearnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMockTestLearners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mockTestId
        learnerId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        learner {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const syncMockTestLearners = /* GraphQL */ `
  query SyncMockTestLearners(
    $filter: ModelMockTestLearnerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMockTestLearners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        mockTestId
        learnerId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        learner {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const mockTestLearnersByMockTestId = /* GraphQL */ `
  query MockTestLearnersByMockTestId(
    $mockTestId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMockTestLearnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mockTestLearnersByMockTestId(
      mockTestId: $mockTestId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mockTestId
        learnerId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        learner {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const mockTestLearnersByLearnerId = /* GraphQL */ `
  query MockTestLearnersByLearnerId(
    $learnerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMockTestLearnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mockTestLearnersByLearnerId(
      learnerId: $learnerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mockTestId
        learnerId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        learner {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const getMockTestAffiliate = /* GraphQL */ `
  query GetMockTestAffiliate($id: ID!) {
    getMockTestAffiliate(id: $id) {
      id
      mockTestId
      affiliateId
      mockTest {
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
          Attempts {
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
        Learners {
          items {
            id
            mockTestId
            learnerId
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
        Affiliates {
          items {
            id
            mockTestId
            affiliateId
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
        Admin {
          items {
            id
            mockTestId
            adminId
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
        Instructors {
          items {
            id
            mockTestId
            instructorId
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
        mockTestExamId
        __typename
      }
      affiliate {
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
        mocktests {
          items {
            id
            mockTestId
            affiliateId
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
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMockTestAffiliates = /* GraphQL */ `
  query ListMockTestAffiliates(
    $filter: ModelMockTestAffiliateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMockTestAffiliates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mockTestId
        affiliateId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        affiliate {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const syncMockTestAffiliates = /* GraphQL */ `
  query SyncMockTestAffiliates(
    $filter: ModelMockTestAffiliateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMockTestAffiliates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        mockTestId
        affiliateId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        affiliate {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const mockTestAffiliatesByMockTestId = /* GraphQL */ `
  query MockTestAffiliatesByMockTestId(
    $mockTestId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMockTestAffiliateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mockTestAffiliatesByMockTestId(
      mockTestId: $mockTestId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mockTestId
        affiliateId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        affiliate {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const mockTestAffiliatesByAffiliateId = /* GraphQL */ `
  query MockTestAffiliatesByAffiliateId(
    $affiliateId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMockTestAffiliateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mockTestAffiliatesByAffiliateId(
      affiliateId: $affiliateId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mockTestId
        affiliateId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        affiliate {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const getMockTestAdmin = /* GraphQL */ `
  query GetMockTestAdmin($id: ID!) {
    getMockTestAdmin(id: $id) {
      id
      mockTestId
      adminId
      mockTest {
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
          Attempts {
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
        Learners {
          items {
            id
            mockTestId
            learnerId
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
        Affiliates {
          items {
            id
            mockTestId
            affiliateId
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
        Admin {
          items {
            id
            mockTestId
            adminId
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
        Instructors {
          items {
            id
            mockTestId
            instructorId
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
        mockTestExamId
        __typename
      }
      admin {
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
        mocktests {
          items {
            id
            mockTestId
            adminId
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
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMockTestAdmins = /* GraphQL */ `
  query ListMockTestAdmins(
    $filter: ModelMockTestAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMockTestAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mockTestId
        adminId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        admin {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const syncMockTestAdmins = /* GraphQL */ `
  query SyncMockTestAdmins(
    $filter: ModelMockTestAdminFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMockTestAdmins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        mockTestId
        adminId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        admin {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const mockTestAdminsByMockTestId = /* GraphQL */ `
  query MockTestAdminsByMockTestId(
    $mockTestId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMockTestAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mockTestAdminsByMockTestId(
      mockTestId: $mockTestId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mockTestId
        adminId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        admin {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const mockTestAdminsByAdminId = /* GraphQL */ `
  query MockTestAdminsByAdminId(
    $adminId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMockTestAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mockTestAdminsByAdminId(
      adminId: $adminId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mockTestId
        adminId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        admin {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const getMockTestInstructor = /* GraphQL */ `
  query GetMockTestInstructor($id: ID!) {
    getMockTestInstructor(id: $id) {
      id
      mockTestId
      instructorId
      mockTest {
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
          Attempts {
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
        Learners {
          items {
            id
            mockTestId
            learnerId
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
        Affiliates {
          items {
            id
            mockTestId
            affiliateId
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
        Admin {
          items {
            id
            mockTestId
            adminId
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
        Instructors {
          items {
            id
            mockTestId
            instructorId
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
        mockTestExamId
        __typename
      }
      instructor {
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
        mocktests {
          items {
            id
            mockTestId
            instructorId
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
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMockTestInstructors = /* GraphQL */ `
  query ListMockTestInstructors(
    $filter: ModelMockTestInstructorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMockTestInstructors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mockTestId
        instructorId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        instructor {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const syncMockTestInstructors = /* GraphQL */ `
  query SyncMockTestInstructors(
    $filter: ModelMockTestInstructorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMockTestInstructors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        mockTestId
        instructorId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        instructor {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const mockTestInstructorsByMockTestId = /* GraphQL */ `
  query MockTestInstructorsByMockTestId(
    $mockTestId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMockTestInstructorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mockTestInstructorsByMockTestId(
      mockTestId: $mockTestId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mockTestId
        instructorId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        instructor {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
export const mockTestInstructorsByInstructorId = /* GraphQL */ `
  query MockTestInstructorsByInstructorId(
    $instructorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMockTestInstructorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mockTestInstructorsByInstructorId(
      instructorId: $instructorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mockTestId
        instructorId
        mockTest {
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
          Learners {
            nextToken
            startedAt
            __typename
          }
          Affiliates {
            nextToken
            startedAt
            __typename
          }
          Admin {
            nextToken
            startedAt
            __typename
          }
          Instructors {
            nextToken
            startedAt
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
        instructor {
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
          mocktests {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
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
