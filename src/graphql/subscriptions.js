/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onCreateTopic(filter: $filter) {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onUpdateTopic(filter: $filter) {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic($filter: ModelSubscriptionTopicFilterInput) {
    onDeleteTopic(filter: $filter) {
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
export const onCreateResponce = /* GraphQL */ `
  subscription OnCreateResponce($filter: ModelSubscriptionResponceFilterInput) {
    onCreateResponce(filter: $filter) {
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
export const onUpdateResponce = /* GraphQL */ `
  subscription OnUpdateResponce($filter: ModelSubscriptionResponceFilterInput) {
    onUpdateResponce(filter: $filter) {
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
export const onDeleteResponce = /* GraphQL */ `
  subscription OnDeleteResponce($filter: ModelSubscriptionResponceFilterInput) {
    onDeleteResponce(filter: $filter) {
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
export const onCreateAttempt = /* GraphQL */ `
  subscription OnCreateAttempt($filter: ModelSubscriptionAttemptFilterInput) {
    onCreateAttempt(filter: $filter) {
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
export const onUpdateAttempt = /* GraphQL */ `
  subscription OnUpdateAttempt($filter: ModelSubscriptionAttemptFilterInput) {
    onUpdateAttempt(filter: $filter) {
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
export const onDeleteAttempt = /* GraphQL */ `
  subscription OnDeleteAttempt($filter: ModelSubscriptionAttemptFilterInput) {
    onDeleteAttempt(filter: $filter) {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onCreateQuestion(filter: $filter) {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onUpdateQuestion(filter: $filter) {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onDeleteQuestion(filter: $filter) {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onCreateGroup(filter: $filter) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onUpdateGroup(filter: $filter) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
    onDeleteGroup(filter: $filter) {
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
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection($filter: ModelSubscriptionSectionFilterInput) {
    onCreateSection(filter: $filter) {
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
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection($filter: ModelSubscriptionSectionFilterInput) {
    onUpdateSection(filter: $filter) {
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
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection($filter: ModelSubscriptionSectionFilterInput) {
    onDeleteSection(filter: $filter) {
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
export const onCreateExam = /* GraphQL */ `
  subscription OnCreateExam($filter: ModelSubscriptionExamFilterInput) {
    onCreateExam(filter: $filter) {
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
export const onUpdateExam = /* GraphQL */ `
  subscription OnUpdateExam($filter: ModelSubscriptionExamFilterInput) {
    onUpdateExam(filter: $filter) {
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
export const onDeleteExam = /* GraphQL */ `
  subscription OnDeleteExam($filter: ModelSubscriptionExamFilterInput) {
    onDeleteExam(filter: $filter) {
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
export const onCreateVariablePricing = /* GraphQL */ `
  subscription OnCreateVariablePricing(
    $filter: ModelSubscriptionVariablePricingFilterInput
  ) {
    onCreateVariablePricing(filter: $filter) {
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
export const onUpdateVariablePricing = /* GraphQL */ `
  subscription OnUpdateVariablePricing(
    $filter: ModelSubscriptionVariablePricingFilterInput
  ) {
    onUpdateVariablePricing(filter: $filter) {
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
export const onDeleteVariablePricing = /* GraphQL */ `
  subscription OnDeleteVariablePricing(
    $filter: ModelSubscriptionVariablePricingFilterInput
  ) {
    onDeleteVariablePricing(filter: $filter) {
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
export const onCreateMockTest = /* GraphQL */ `
  subscription OnCreateMockTest($filter: ModelSubscriptionMockTestFilterInput) {
    onCreateMockTest(filter: $filter) {
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
export const onUpdateMockTest = /* GraphQL */ `
  subscription OnUpdateMockTest($filter: ModelSubscriptionMockTestFilterInput) {
    onUpdateMockTest(filter: $filter) {
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
export const onDeleteMockTest = /* GraphQL */ `
  subscription OnDeleteMockTest($filter: ModelSubscriptionMockTestFilterInput) {
    onDeleteMockTest(filter: $filter) {
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
export const onCreateLearner = /* GraphQL */ `
  subscription OnCreateLearner($filter: ModelSubscriptionLearnerFilterInput) {
    onCreateLearner(filter: $filter) {
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
export const onUpdateLearner = /* GraphQL */ `
  subscription OnUpdateLearner($filter: ModelSubscriptionLearnerFilterInput) {
    onUpdateLearner(filter: $filter) {
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
export const onDeleteLearner = /* GraphQL */ `
  subscription OnDeleteLearner($filter: ModelSubscriptionLearnerFilterInput) {
    onDeleteLearner(filter: $filter) {
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
export const onCreateAffiliate = /* GraphQL */ `
  subscription OnCreateAffiliate(
    $filter: ModelSubscriptionAffiliateFilterInput
  ) {
    onCreateAffiliate(filter: $filter) {
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
export const onUpdateAffiliate = /* GraphQL */ `
  subscription OnUpdateAffiliate(
    $filter: ModelSubscriptionAffiliateFilterInput
  ) {
    onUpdateAffiliate(filter: $filter) {
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
export const onDeleteAffiliate = /* GraphQL */ `
  subscription OnDeleteAffiliate(
    $filter: ModelSubscriptionAffiliateFilterInput
  ) {
    onDeleteAffiliate(filter: $filter) {
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
export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onCreateAdmin(filter: $filter) {
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
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onUpdateAdmin(filter: $filter) {
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
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onDeleteAdmin(filter: $filter) {
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
export const onCreateInstructor = /* GraphQL */ `
  subscription OnCreateInstructor(
    $filter: ModelSubscriptionInstructorFilterInput
  ) {
    onCreateInstructor(filter: $filter) {
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
export const onUpdateInstructor = /* GraphQL */ `
  subscription OnUpdateInstructor(
    $filter: ModelSubscriptionInstructorFilterInput
  ) {
    onUpdateInstructor(filter: $filter) {
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
export const onDeleteInstructor = /* GraphQL */ `
  subscription OnDeleteInstructor(
    $filter: ModelSubscriptionInstructorFilterInput
  ) {
    onDeleteInstructor(filter: $filter) {
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
export const onCreateMockTestLearner = /* GraphQL */ `
  subscription OnCreateMockTestLearner(
    $filter: ModelSubscriptionMockTestLearnerFilterInput
  ) {
    onCreateMockTestLearner(filter: $filter) {
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
export const onUpdateMockTestLearner = /* GraphQL */ `
  subscription OnUpdateMockTestLearner(
    $filter: ModelSubscriptionMockTestLearnerFilterInput
  ) {
    onUpdateMockTestLearner(filter: $filter) {
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
export const onDeleteMockTestLearner = /* GraphQL */ `
  subscription OnDeleteMockTestLearner(
    $filter: ModelSubscriptionMockTestLearnerFilterInput
  ) {
    onDeleteMockTestLearner(filter: $filter) {
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
export const onCreateMockTestAffiliate = /* GraphQL */ `
  subscription OnCreateMockTestAffiliate(
    $filter: ModelSubscriptionMockTestAffiliateFilterInput
  ) {
    onCreateMockTestAffiliate(filter: $filter) {
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
export const onUpdateMockTestAffiliate = /* GraphQL */ `
  subscription OnUpdateMockTestAffiliate(
    $filter: ModelSubscriptionMockTestAffiliateFilterInput
  ) {
    onUpdateMockTestAffiliate(filter: $filter) {
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
export const onDeleteMockTestAffiliate = /* GraphQL */ `
  subscription OnDeleteMockTestAffiliate(
    $filter: ModelSubscriptionMockTestAffiliateFilterInput
  ) {
    onDeleteMockTestAffiliate(filter: $filter) {
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
export const onCreateMockTestAdmin = /* GraphQL */ `
  subscription OnCreateMockTestAdmin(
    $filter: ModelSubscriptionMockTestAdminFilterInput
  ) {
    onCreateMockTestAdmin(filter: $filter) {
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
export const onUpdateMockTestAdmin = /* GraphQL */ `
  subscription OnUpdateMockTestAdmin(
    $filter: ModelSubscriptionMockTestAdminFilterInput
  ) {
    onUpdateMockTestAdmin(filter: $filter) {
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
export const onDeleteMockTestAdmin = /* GraphQL */ `
  subscription OnDeleteMockTestAdmin(
    $filter: ModelSubscriptionMockTestAdminFilterInput
  ) {
    onDeleteMockTestAdmin(filter: $filter) {
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
export const onCreateMockTestInstructor = /* GraphQL */ `
  subscription OnCreateMockTestInstructor(
    $filter: ModelSubscriptionMockTestInstructorFilterInput
  ) {
    onCreateMockTestInstructor(filter: $filter) {
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
export const onUpdateMockTestInstructor = /* GraphQL */ `
  subscription OnUpdateMockTestInstructor(
    $filter: ModelSubscriptionMockTestInstructorFilterInput
  ) {
    onUpdateMockTestInstructor(filter: $filter) {
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
export const onDeleteMockTestInstructor = /* GraphQL */ `
  subscription OnDeleteMockTestInstructor(
    $filter: ModelSubscriptionMockTestInstructorFilterInput
  ) {
    onDeleteMockTestInstructor(filter: $filter) {
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
