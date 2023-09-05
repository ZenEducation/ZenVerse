/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createResponce = /* GraphQL */ `
  mutation CreateResponce(
    $input: CreateResponceInput!
    $condition: ModelResponceConditionInput
  ) {
    createResponce(input: $input, condition: $condition) {
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
export const updateResponce = /* GraphQL */ `
  mutation UpdateResponce(
    $input: UpdateResponceInput!
    $condition: ModelResponceConditionInput
  ) {
    updateResponce(input: $input, condition: $condition) {
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
export const deleteResponce = /* GraphQL */ `
  mutation DeleteResponce(
    $input: DeleteResponceInput!
    $condition: ModelResponceConditionInput
  ) {
    deleteResponce(input: $input, condition: $condition) {
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
export const createAttempt = /* GraphQL */ `
  mutation CreateAttempt(
    $input: CreateAttemptInput!
    $condition: ModelAttemptConditionInput
  ) {
    createAttempt(input: $input, condition: $condition) {
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
      sectionMarks {
        id
        marks
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
            attachmentTitle
            attachmentDesc
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
          testseriess {
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
        attachmentTitle
        attachmentDesc
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
export const updateAttempt = /* GraphQL */ `
  mutation UpdateAttempt(
    $input: UpdateAttemptInput!
    $condition: ModelAttemptConditionInput
  ) {
    updateAttempt(input: $input, condition: $condition) {
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
      sectionMarks {
        id
        marks
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
            attachmentTitle
            attachmentDesc
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
          testseriess {
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
        attachmentTitle
        attachmentDesc
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
export const deleteAttempt = /* GraphQL */ `
  mutation DeleteAttempt(
    $input: DeleteAttemptInput!
    $condition: ModelAttemptConditionInput
  ) {
    deleteAttempt(input: $input, condition: $condition) {
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
      sectionMarks {
        id
        marks
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
            attachmentTitle
            attachmentDesc
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
          testseriess {
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
        attachmentTitle
        attachmentDesc
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
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
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
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
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
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
export const createExam = /* GraphQL */ `
  mutation CreateExam(
    $input: CreateExamInput!
    $condition: ModelExamConditionInput
  ) {
    createExam(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
          sectionMarks {
            id
            marks
            __typename
          }
          Exam {
            id
            title
            description
            instructions
            attachmentTitle
            attachmentDesc
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
      attachmentTitle
      attachmentDesc
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
export const updateExam = /* GraphQL */ `
  mutation UpdateExam(
    $input: UpdateExamInput!
    $condition: ModelExamConditionInput
  ) {
    updateExam(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
          sectionMarks {
            id
            marks
            __typename
          }
          Exam {
            id
            title
            description
            instructions
            attachmentTitle
            attachmentDesc
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
      attachmentTitle
      attachmentDesc
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
export const deleteExam = /* GraphQL */ `
  mutation DeleteExam(
    $input: DeleteExamInput!
    $condition: ModelExamConditionInput
  ) {
    deleteExam(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
          sectionMarks {
            id
            marks
            __typename
          }
          Exam {
            id
            title
            description
            instructions
            attachmentTitle
            attachmentDesc
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
      attachmentTitle
      attachmentDesc
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
export const createVariablePricing = /* GraphQL */ `
  mutation CreateVariablePricing(
    $input: CreateVariablePricingInput!
    $condition: ModelVariablePricingConditionInput
  ) {
    createVariablePricing(input: $input, condition: $condition) {
      id
      days
      price
      discountPrice
      mocktestID
      testseriesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateVariablePricing = /* GraphQL */ `
  mutation UpdateVariablePricing(
    $input: UpdateVariablePricingInput!
    $condition: ModelVariablePricingConditionInput
  ) {
    updateVariablePricing(input: $input, condition: $condition) {
      id
      days
      price
      discountPrice
      mocktestID
      testseriesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteVariablePricing = /* GraphQL */ `
  mutation DeleteVariablePricing(
    $input: DeleteVariablePricingInput!
    $condition: ModelVariablePricingConditionInput
  ) {
    deleteVariablePricing(input: $input, condition: $condition) {
      id
      days
      price
      discountPrice
      mocktestID
      testseriesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createTestSeries = /* GraphQL */ `
  mutation CreateTestSeries(
    $input: CreateTestSeriesInput!
    $condition: ModelTestSeriesConditionInput
  ) {
    createTestSeries(input: $input, condition: $condition) {
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
      isDripping
      isDrippingFixedDate
      drippingFixedDate
      drippings {
        id
        days
        __typename
      }
      orders {
        id
        order
        __typename
      }
      VariablePricing {
        items {
          id
          days
          price
          discountPrice
          mocktestID
          testseriesID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Learners {
        items {
          id
          testSeriesId
          learnerId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
          testSeriesId
          affiliateId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
          testSeriesId
          adminId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
          testSeriesId
          instructorId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
      MockTests {
        items {
          id
          testSeriesId
          mockTestId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
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
          createdAt
          updatedAt
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
export const updateTestSeries = /* GraphQL */ `
  mutation UpdateTestSeries(
    $input: UpdateTestSeriesInput!
    $condition: ModelTestSeriesConditionInput
  ) {
    updateTestSeries(input: $input, condition: $condition) {
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
      isDripping
      isDrippingFixedDate
      drippingFixedDate
      drippings {
        id
        days
        __typename
      }
      orders {
        id
        order
        __typename
      }
      VariablePricing {
        items {
          id
          days
          price
          discountPrice
          mocktestID
          testseriesID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Learners {
        items {
          id
          testSeriesId
          learnerId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
          testSeriesId
          affiliateId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
          testSeriesId
          adminId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
          testSeriesId
          instructorId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
      MockTests {
        items {
          id
          testSeriesId
          mockTestId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
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
          createdAt
          updatedAt
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
export const deleteTestSeries = /* GraphQL */ `
  mutation DeleteTestSeries(
    $input: DeleteTestSeriesInput!
    $condition: ModelTestSeriesConditionInput
  ) {
    deleteTestSeries(input: $input, condition: $condition) {
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
      isDripping
      isDrippingFixedDate
      drippingFixedDate
      drippings {
        id
        days
        __typename
      }
      orders {
        id
        order
        __typename
      }
      VariablePricing {
        items {
          id
          days
          price
          discountPrice
          mocktestID
          testseriesID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Learners {
        items {
          id
          testSeriesId
          learnerId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
          testSeriesId
          affiliateId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
          testSeriesId
          adminId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
          testSeriesId
          instructorId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
      MockTests {
        items {
          id
          testSeriesId
          mockTestId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
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
          createdAt
          updatedAt
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
export const createMockTest = /* GraphQL */ `
  mutation CreateMockTest(
    $input: CreateMockTestInput!
    $condition: ModelMockTestConditionInput
  ) {
    createMockTest(input: $input, condition: $condition) {
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
          testseriesID
          createdAt
          updatedAt
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
            attachmentTitle
            attachmentDesc
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
          testseriess {
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
        attachmentTitle
        attachmentDesc
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
      testseriess {
        items {
          id
          testSeriesId
          mockTestId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
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
          createdAt
          updatedAt
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
export const updateMockTest = /* GraphQL */ `
  mutation UpdateMockTest(
    $input: UpdateMockTestInput!
    $condition: ModelMockTestConditionInput
  ) {
    updateMockTest(input: $input, condition: $condition) {
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
          testseriesID
          createdAt
          updatedAt
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
            attachmentTitle
            attachmentDesc
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
          testseriess {
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
        attachmentTitle
        attachmentDesc
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
      testseriess {
        items {
          id
          testSeriesId
          mockTestId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
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
          createdAt
          updatedAt
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
export const deleteMockTest = /* GraphQL */ `
  mutation DeleteMockTest(
    $input: DeleteMockTestInput!
    $condition: ModelMockTestConditionInput
  ) {
    deleteMockTest(input: $input, condition: $condition) {
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
          testseriesID
          createdAt
          updatedAt
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
            attachmentTitle
            attachmentDesc
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
          testseriess {
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
        attachmentTitle
        attachmentDesc
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
      testseriess {
        items {
          id
          testSeriesId
          mockTestId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
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
          createdAt
          updatedAt
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
export const createLearner = /* GraphQL */ `
  mutation CreateLearner(
    $input: CreateLearnerInput!
    $condition: ModelLearnerConditionInput
  ) {
    createLearner(input: $input, condition: $condition) {
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
      testseriess {
        items {
          id
          testSeriesId
          learnerId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const updateLearner = /* GraphQL */ `
  mutation UpdateLearner(
    $input: UpdateLearnerInput!
    $condition: ModelLearnerConditionInput
  ) {
    updateLearner(input: $input, condition: $condition) {
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
      testseriess {
        items {
          id
          testSeriesId
          learnerId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const deleteLearner = /* GraphQL */ `
  mutation DeleteLearner(
    $input: DeleteLearnerInput!
    $condition: ModelLearnerConditionInput
  ) {
    deleteLearner(input: $input, condition: $condition) {
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
      testseriess {
        items {
          id
          testSeriesId
          learnerId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const createAffiliate = /* GraphQL */ `
  mutation CreateAffiliate(
    $input: CreateAffiliateInput!
    $condition: ModelAffiliateConditionInput
  ) {
    createAffiliate(input: $input, condition: $condition) {
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
      testseriess {
        items {
          id
          testSeriesId
          affiliateId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const updateAffiliate = /* GraphQL */ `
  mutation UpdateAffiliate(
    $input: UpdateAffiliateInput!
    $condition: ModelAffiliateConditionInput
  ) {
    updateAffiliate(input: $input, condition: $condition) {
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
      testseriess {
        items {
          id
          testSeriesId
          affiliateId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const deleteAffiliate = /* GraphQL */ `
  mutation DeleteAffiliate(
    $input: DeleteAffiliateInput!
    $condition: ModelAffiliateConditionInput
  ) {
    deleteAffiliate(input: $input, condition: $condition) {
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
      testseriess {
        items {
          id
          testSeriesId
          affiliateId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const createAdmin = /* GraphQL */ `
  mutation CreateAdmin(
    $input: CreateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    createAdmin(input: $input, condition: $condition) {
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
      testseriess {
        items {
          id
          testSeriesId
          adminId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const updateAdmin = /* GraphQL */ `
  mutation UpdateAdmin(
    $input: UpdateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    updateAdmin(input: $input, condition: $condition) {
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
      testseriess {
        items {
          id
          testSeriesId
          adminId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const deleteAdmin = /* GraphQL */ `
  mutation DeleteAdmin(
    $input: DeleteAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    deleteAdmin(input: $input, condition: $condition) {
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
      testseriess {
        items {
          id
          testSeriesId
          adminId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const createInstructor = /* GraphQL */ `
  mutation CreateInstructor(
    $input: CreateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    createInstructor(input: $input, condition: $condition) {
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
      testseriess {
        items {
          id
          testSeriesId
          instructorId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const updateInstructor = /* GraphQL */ `
  mutation UpdateInstructor(
    $input: UpdateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    updateInstructor(input: $input, condition: $condition) {
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
      testseriess {
        items {
          id
          testSeriesId
          instructorId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const deleteInstructor = /* GraphQL */ `
  mutation DeleteInstructor(
    $input: DeleteInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    deleteInstructor(input: $input, condition: $condition) {
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
      testseriess {
        items {
          id
          testSeriesId
          instructorId
          testSeries {
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
            isDripping
            isDrippingFixedDate
            drippingFixedDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
export const createTestSeriesLearner = /* GraphQL */ `
  mutation CreateTestSeriesLearner(
    $input: CreateTestSeriesLearnerInput!
    $condition: ModelTestSeriesLearnerConditionInput
  ) {
    createTestSeriesLearner(input: $input, condition: $condition) {
      id
      testSeriesId
      learnerId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const updateTestSeriesLearner = /* GraphQL */ `
  mutation UpdateTestSeriesLearner(
    $input: UpdateTestSeriesLearnerInput!
    $condition: ModelTestSeriesLearnerConditionInput
  ) {
    updateTestSeriesLearner(input: $input, condition: $condition) {
      id
      testSeriesId
      learnerId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const deleteTestSeriesLearner = /* GraphQL */ `
  mutation DeleteTestSeriesLearner(
    $input: DeleteTestSeriesLearnerInput!
    $condition: ModelTestSeriesLearnerConditionInput
  ) {
    deleteTestSeriesLearner(input: $input, condition: $condition) {
      id
      testSeriesId
      learnerId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const createTestSeriesAffiliate = /* GraphQL */ `
  mutation CreateTestSeriesAffiliate(
    $input: CreateTestSeriesAffiliateInput!
    $condition: ModelTestSeriesAffiliateConditionInput
  ) {
    createTestSeriesAffiliate(input: $input, condition: $condition) {
      id
      testSeriesId
      affiliateId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const updateTestSeriesAffiliate = /* GraphQL */ `
  mutation UpdateTestSeriesAffiliate(
    $input: UpdateTestSeriesAffiliateInput!
    $condition: ModelTestSeriesAffiliateConditionInput
  ) {
    updateTestSeriesAffiliate(input: $input, condition: $condition) {
      id
      testSeriesId
      affiliateId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const deleteTestSeriesAffiliate = /* GraphQL */ `
  mutation DeleteTestSeriesAffiliate(
    $input: DeleteTestSeriesAffiliateInput!
    $condition: ModelTestSeriesAffiliateConditionInput
  ) {
    deleteTestSeriesAffiliate(input: $input, condition: $condition) {
      id
      testSeriesId
      affiliateId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const createTestSeriesAdmin = /* GraphQL */ `
  mutation CreateTestSeriesAdmin(
    $input: CreateTestSeriesAdminInput!
    $condition: ModelTestSeriesAdminConditionInput
  ) {
    createTestSeriesAdmin(input: $input, condition: $condition) {
      id
      testSeriesId
      adminId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const updateTestSeriesAdmin = /* GraphQL */ `
  mutation UpdateTestSeriesAdmin(
    $input: UpdateTestSeriesAdminInput!
    $condition: ModelTestSeriesAdminConditionInput
  ) {
    updateTestSeriesAdmin(input: $input, condition: $condition) {
      id
      testSeriesId
      adminId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const deleteTestSeriesAdmin = /* GraphQL */ `
  mutation DeleteTestSeriesAdmin(
    $input: DeleteTestSeriesAdminInput!
    $condition: ModelTestSeriesAdminConditionInput
  ) {
    deleteTestSeriesAdmin(input: $input, condition: $condition) {
      id
      testSeriesId
      adminId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const createTestSeriesInstructor = /* GraphQL */ `
  mutation CreateTestSeriesInstructor(
    $input: CreateTestSeriesInstructorInput!
    $condition: ModelTestSeriesInstructorConditionInput
  ) {
    createTestSeriesInstructor(input: $input, condition: $condition) {
      id
      testSeriesId
      instructorId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const updateTestSeriesInstructor = /* GraphQL */ `
  mutation UpdateTestSeriesInstructor(
    $input: UpdateTestSeriesInstructorInput!
    $condition: ModelTestSeriesInstructorConditionInput
  ) {
    updateTestSeriesInstructor(input: $input, condition: $condition) {
      id
      testSeriesId
      instructorId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const deleteTestSeriesInstructor = /* GraphQL */ `
  mutation DeleteTestSeriesInstructor(
    $input: DeleteTestSeriesInstructorInput!
    $condition: ModelTestSeriesInstructorConditionInput
  ) {
    deleteTestSeriesInstructor(input: $input, condition: $condition) {
      id
      testSeriesId
      instructorId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const createTestSeriesMockTest = /* GraphQL */ `
  mutation CreateTestSeriesMockTest(
    $input: CreateTestSeriesMockTestInput!
    $condition: ModelTestSeriesMockTestConditionInput
  ) {
    createTestSeriesMockTest(input: $input, condition: $condition) {
      id
      testSeriesId
      mockTestId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateTestSeriesMockTest = /* GraphQL */ `
  mutation UpdateTestSeriesMockTest(
    $input: UpdateTestSeriesMockTestInput!
    $condition: ModelTestSeriesMockTestConditionInput
  ) {
    updateTestSeriesMockTest(input: $input, condition: $condition) {
      id
      testSeriesId
      mockTestId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteTestSeriesMockTest = /* GraphQL */ `
  mutation DeleteTestSeriesMockTest(
    $input: DeleteTestSeriesMockTestInput!
    $condition: ModelTestSeriesMockTestConditionInput
  ) {
    deleteTestSeriesMockTest(input: $input, condition: $condition) {
      id
      testSeriesId
      mockTestId
      testSeries {
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
        isDripping
        isDrippingFixedDate
        drippingFixedDate
        drippings {
          id
          days
          __typename
        }
        orders {
          id
          order
          __typename
        }
        VariablePricing {
          items {
            id
            days
            price
            discountPrice
            mocktestID
            testseriesID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Learners {
          items {
            id
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
            testSeriesId
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
        MockTests {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createMockTestLearner = /* GraphQL */ `
  mutation CreateMockTestLearner(
    $input: CreateMockTestLearnerInput!
    $condition: ModelMockTestLearnerConditionInput
  ) {
    createMockTestLearner(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const updateMockTestLearner = /* GraphQL */ `
  mutation UpdateMockTestLearner(
    $input: UpdateMockTestLearnerInput!
    $condition: ModelMockTestLearnerConditionInput
  ) {
    updateMockTestLearner(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const deleteMockTestLearner = /* GraphQL */ `
  mutation DeleteMockTestLearner(
    $input: DeleteMockTestLearnerInput!
    $condition: ModelMockTestLearnerConditionInput
  ) {
    deleteMockTestLearner(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const createMockTestAffiliate = /* GraphQL */ `
  mutation CreateMockTestAffiliate(
    $input: CreateMockTestAffiliateInput!
    $condition: ModelMockTestAffiliateConditionInput
  ) {
    createMockTestAffiliate(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const updateMockTestAffiliate = /* GraphQL */ `
  mutation UpdateMockTestAffiliate(
    $input: UpdateMockTestAffiliateInput!
    $condition: ModelMockTestAffiliateConditionInput
  ) {
    updateMockTestAffiliate(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const deleteMockTestAffiliate = /* GraphQL */ `
  mutation DeleteMockTestAffiliate(
    $input: DeleteMockTestAffiliateInput!
    $condition: ModelMockTestAffiliateConditionInput
  ) {
    deleteMockTestAffiliate(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const createMockTestAdmin = /* GraphQL */ `
  mutation CreateMockTestAdmin(
    $input: CreateMockTestAdminInput!
    $condition: ModelMockTestAdminConditionInput
  ) {
    createMockTestAdmin(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const updateMockTestAdmin = /* GraphQL */ `
  mutation UpdateMockTestAdmin(
    $input: UpdateMockTestAdminInput!
    $condition: ModelMockTestAdminConditionInput
  ) {
    updateMockTestAdmin(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const deleteMockTestAdmin = /* GraphQL */ `
  mutation DeleteMockTestAdmin(
    $input: DeleteMockTestAdminInput!
    $condition: ModelMockTestAdminConditionInput
  ) {
    deleteMockTestAdmin(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const createMockTestInstructor = /* GraphQL */ `
  mutation CreateMockTestInstructor(
    $input: CreateMockTestInstructorInput!
    $condition: ModelMockTestInstructorConditionInput
  ) {
    createMockTestInstructor(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const updateMockTestInstructor = /* GraphQL */ `
  mutation UpdateMockTestInstructor(
    $input: UpdateMockTestInstructorInput!
    $condition: ModelMockTestInstructorConditionInput
  ) {
    updateMockTestInstructor(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
export const deleteMockTestInstructor = /* GraphQL */ `
  mutation DeleteMockTestInstructor(
    $input: DeleteMockTestInstructorInput!
    $condition: ModelMockTestInstructorConditionInput
  ) {
    deleteMockTestInstructor(input: $input, condition: $condition) {
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
            testseriesID
            createdAt
            updatedAt
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
          attachmentTitle
          attachmentDesc
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
        testseriess {
          items {
            id
            testSeriesId
            mockTestId
            createdAt
            updatedAt
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
        testseriess {
          items {
            id
            testSeriesId
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
