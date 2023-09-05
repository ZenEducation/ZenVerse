import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum AttemptStatus {
  NOTSTARTED = "NOTSTARTED",
  INPROGRESS = "INPROGRESS",
  DONE = "DONE"
}

export enum QuestionType {
  MCQ = "MCQ",
  PARA = "PARA",
  FILLIN = "FILLIN",
  NUM = "NUM"
}

export enum Difficuilty {
  EASY = "EASY",
  MODERATE = "MODERATE",
  HARD = "HARD"
}

type EagerCriteria = {
  readonly text?: string | null;
  readonly percentage?: number | null;
}

type LazyCriteria = {
  readonly text?: string | null;
  readonly percentage?: number | null;
}

export declare type Criteria = LazyLoading extends LazyLoadingDisabled ? EagerCriteria : LazyCriteria

export declare const Criteria: (new (init: ModelInit<Criteria>) => Criteria)

type EagerOption = {
  readonly text?: string | null;
  readonly html?: string | null;
  readonly isCorrectAnswer?: boolean | null;
}

type LazyOption = {
  readonly text?: string | null;
  readonly html?: string | null;
  readonly isCorrectAnswer?: boolean | null;
}

export declare type Option = LazyLoading extends LazyLoadingDisabled ? EagerOption : LazyOption

export declare const Option: (new (init: ModelInit<Option>) => Option)

type EagerRange = {
  readonly is?: boolean | null;
  readonly start?: number | null;
  readonly end?: number | null;
}

type LazyRange = {
  readonly is?: boolean | null;
  readonly start?: number | null;
  readonly end?: number | null;
}

export declare type Range = LazyLoading extends LazyLoadingDisabled ? EagerRange : LazyRange

export declare const Range: (new (init: ModelInit<Range>) => Range)

type EagerSectionMarks = {
  readonly id?: string | null;
  readonly marks?: number | null;
}

type LazySectionMarks = {
  readonly id?: string | null;
  readonly marks?: number | null;
}

export declare type SectionMarks = LazyLoading extends LazyLoadingDisabled ? EagerSectionMarks : LazySectionMarks

export declare const SectionMarks: (new (init: ModelInit<SectionMarks>) => SectionMarks)

type EagerDripping = {
  readonly id?: string | null;
  readonly days?: number | null;
}

type LazyDripping = {
  readonly id?: string | null;
  readonly days?: number | null;
}

export declare type Dripping = LazyLoading extends LazyLoadingDisabled ? EagerDripping : LazyDripping

export declare const Dripping: (new (init: ModelInit<Dripping>) => Dripping)

type EagerOrder = {
  readonly id?: string | null;
  readonly order?: number | null;
}

type LazyOrder = {
  readonly id?: string | null;
  readonly order?: number | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order)

type EagerTopic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Topic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTopic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Topic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Topic = LazyLoading extends LazyLoadingDisabled ? EagerTopic : LazyTopic

export declare const Topic: (new (init: ModelInit<Topic>) => Topic) & {
  copyOf(source: Topic, mutator: (draft: MutableModel<Topic>) => MutableModel<Topic> | void): Topic;
}

type EagerResponce = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Responce, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionID: string;
  readonly time?: number | null;
  readonly responce?: string | null;
  readonly attemptID: string;
  readonly Question?: Question | null;
  readonly sectionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResponce = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Responce, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionID: string;
  readonly time?: number | null;
  readonly responce?: string | null;
  readonly attemptID: string;
  readonly Question: AsyncItem<Question | undefined>;
  readonly sectionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Responce = LazyLoading extends LazyLoadingDisabled ? EagerResponce : LazyResponce

export declare const Responce: (new (init: ModelInit<Responce>) => Responce) & {
  copyOf(source: Responce, mutator: (draft: MutableModel<Responce>) => MutableModel<Responce> | void): Responce;
}

type EagerAttempt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attempt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly examID: string;
  readonly Responces?: (Responce | null)[] | null;
  readonly marks?: number | null;
  readonly status?: AttemptStatus | keyof typeof AttemptStatus | null;
  readonly sectionMarks?: (SectionMarks | null)[] | null;
  readonly Exam?: Exam | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttempt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attempt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly examID: string;
  readonly Responces: AsyncCollection<Responce>;
  readonly marks?: number | null;
  readonly status?: AttemptStatus | keyof typeof AttemptStatus | null;
  readonly sectionMarks?: (SectionMarks | null)[] | null;
  readonly Exam: AsyncItem<Exam | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Attempt = LazyLoading extends LazyLoadingDisabled ? EagerAttempt : LazyAttempt

export declare const Attempt: (new (init: ModelInit<Attempt>) => Attempt) & {
  copyOf(source: Attempt, mutator: (draft: MutableModel<Attempt>) => MutableModel<Attempt> | void): Attempt;
}

type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly titleHTML?: string | null;
  readonly type?: QuestionType | keyof typeof QuestionType | null;
  readonly answer?: string | null;
  readonly range?: Range | null;
  readonly isPartial?: boolean | null;
  readonly isNegative?: boolean | null;
  readonly maxMarks?: number | null;
  readonly ifCorrect?: number | null;
  readonly ifWrong?: number | null;
  readonly options?: (Option | null)[] | null;
  readonly ismultipleChoice?: boolean | null;
  readonly criterias?: (Criteria | null)[] | null;
  readonly explanation?: string | null;
  readonly instruction?: string | null;
  readonly topic?: string | null;
  readonly difficuilty?: Difficuilty | keyof typeof Difficuilty | null;
  readonly sectionID: string;
  readonly groupID?: string | null;
  readonly order?: number | null;
  readonly guidelineTime?: number | null;
  readonly examID: string;
  readonly Responces?: (Responce | null)[] | null;
  readonly Group?: Group | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly titleHTML?: string | null;
  readonly type?: QuestionType | keyof typeof QuestionType | null;
  readonly answer?: string | null;
  readonly range?: Range | null;
  readonly isPartial?: boolean | null;
  readonly isNegative?: boolean | null;
  readonly maxMarks?: number | null;
  readonly ifCorrect?: number | null;
  readonly ifWrong?: number | null;
  readonly options?: (Option | null)[] | null;
  readonly ismultipleChoice?: boolean | null;
  readonly criterias?: (Criteria | null)[] | null;
  readonly explanation?: string | null;
  readonly instruction?: string | null;
  readonly topic?: string | null;
  readonly difficuilty?: Difficuilty | keyof typeof Difficuilty | null;
  readonly sectionID: string;
  readonly groupID?: string | null;
  readonly order?: number | null;
  readonly guidelineTime?: number | null;
  readonly examID: string;
  readonly Responces: AsyncCollection<Responce>;
  readonly Group: AsyncItem<Group | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

type EagerGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly instruction?: string | null;
  readonly order?: number | null;
  readonly difficuilty?: Difficuilty | keyof typeof Difficuilty | null;
  readonly sectionID: string;
  readonly Questions?: (Question | null)[] | null;
  readonly examID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly instruction?: string | null;
  readonly order?: number | null;
  readonly difficuilty?: Difficuilty | keyof typeof Difficuilty | null;
  readonly sectionID: string;
  readonly Questions: AsyncCollection<Question>;
  readonly examID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Group = LazyLoading extends LazyLoadingDisabled ? EagerGroup : LazyGroup

export declare const Group: (new (init: ModelInit<Group>) => Group) & {
  copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}

type EagerSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Section, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly examID: string;
  readonly Questions?: (Question | null)[] | null;
  readonly Groups?: (Group | null)[] | null;
  readonly description?: string | null;
  readonly Responces?: (Responce | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Section, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly examID: string;
  readonly Questions: AsyncCollection<Question>;
  readonly Groups: AsyncCollection<Group>;
  readonly description?: string | null;
  readonly Responces: AsyncCollection<Responce>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Section = LazyLoading extends LazyLoadingDisabled ? EagerSection : LazySection

export declare const Section: (new (init: ModelInit<Section>) => Section) & {
  copyOf(source: Section, mutator: (draft: MutableModel<Section>) => MutableModel<Section> | void): Section;
}

type EagerExam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exam, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly instructions?: string | null;
  readonly Sections?: (Section | null)[] | null;
  readonly MockTest?: MockTest | null;
  readonly Groups?: (Group | null)[] | null;
  readonly Questions?: (Question | null)[] | null;
  readonly Attempts?: (Attempt | null)[] | null;
  readonly attachmentTitle?: string | null;
  readonly attachmentDesc?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly examMockTestId?: string | null;
}

type LazyExam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exam, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly instructions?: string | null;
  readonly Sections: AsyncCollection<Section>;
  readonly MockTest: AsyncItem<MockTest | undefined>;
  readonly Groups: AsyncCollection<Group>;
  readonly Questions: AsyncCollection<Question>;
  readonly Attempts: AsyncCollection<Attempt>;
  readonly attachmentTitle?: string | null;
  readonly attachmentDesc?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly examMockTestId?: string | null;
}

export declare type Exam = LazyLoading extends LazyLoadingDisabled ? EagerExam : LazyExam

export declare const Exam: (new (init: ModelInit<Exam>) => Exam) & {
  copyOf(source: Exam, mutator: (draft: MutableModel<Exam>) => MutableModel<Exam> | void): Exam;
}

type EagerVariablePricing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VariablePricing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly days?: number | null;
  readonly price?: number | null;
  readonly discountPrice?: number | null;
  readonly mocktestID?: string | null;
  readonly testseriesID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVariablePricing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VariablePricing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly days?: number | null;
  readonly price?: number | null;
  readonly discountPrice?: number | null;
  readonly mocktestID?: string | null;
  readonly testseriesID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VariablePricing = LazyLoading extends LazyLoadingDisabled ? EagerVariablePricing : LazyVariablePricing

export declare const VariablePricing: (new (init: ModelInit<VariablePricing>) => VariablePricing) & {
  copyOf(source: VariablePricing, mutator: (draft: MutableModel<VariablePricing>) => MutableModel<VariablePricing> | void): VariablePricing;
}

type EagerTestSeries = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestSeries, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly shortId?: string | null;
  readonly isFree?: boolean | null;
  readonly publishingDate?: string | null;
  readonly publishingStatus?: string | null;
  readonly description?: string | null;
  readonly shortDescription?: string | null;
  readonly price?: number | null;
  readonly discount?: number | null;
  readonly isValidityDays?: boolean | null;
  readonly validityDays?: number | null;
  readonly expiryDate?: string | null;
  readonly isDripping?: boolean | null;
  readonly isDrippingFixedDate?: boolean | null;
  readonly drippingFixedDate?: string | null;
  readonly drippings?: (Dripping | null)[] | null;
  readonly orders?: (Order | null)[] | null;
  readonly VariablePricing?: (VariablePricing | null)[] | null;
  readonly Learners?: (TestSeriesLearner | null)[] | null;
  readonly Affiliates?: (TestSeriesAffiliate | null)[] | null;
  readonly Admin?: (TestSeriesAdmin | null)[] | null;
  readonly Instructors?: (TestSeriesInstructor | null)[] | null;
  readonly MockTests?: (TestSeriesMockTest | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestSeries = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestSeries, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly shortId?: string | null;
  readonly isFree?: boolean | null;
  readonly publishingDate?: string | null;
  readonly publishingStatus?: string | null;
  readonly description?: string | null;
  readonly shortDescription?: string | null;
  readonly price?: number | null;
  readonly discount?: number | null;
  readonly isValidityDays?: boolean | null;
  readonly validityDays?: number | null;
  readonly expiryDate?: string | null;
  readonly isDripping?: boolean | null;
  readonly isDrippingFixedDate?: boolean | null;
  readonly drippingFixedDate?: string | null;
  readonly drippings?: (Dripping | null)[] | null;
  readonly orders?: (Order | null)[] | null;
  readonly VariablePricing: AsyncCollection<VariablePricing>;
  readonly Learners: AsyncCollection<TestSeriesLearner>;
  readonly Affiliates: AsyncCollection<TestSeriesAffiliate>;
  readonly Admin: AsyncCollection<TestSeriesAdmin>;
  readonly Instructors: AsyncCollection<TestSeriesInstructor>;
  readonly MockTests: AsyncCollection<TestSeriesMockTest>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestSeries = LazyLoading extends LazyLoadingDisabled ? EagerTestSeries : LazyTestSeries

export declare const TestSeries: (new (init: ModelInit<TestSeries>) => TestSeries) & {
  copyOf(source: TestSeries, mutator: (draft: MutableModel<TestSeries>) => MutableModel<TestSeries> | void): TestSeries;
}

type EagerMockTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MockTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly shortId?: string | null;
  readonly isFree?: boolean | null;
  readonly publishingDate?: string | null;
  readonly publishingStatus?: string | null;
  readonly description?: string | null;
  readonly shortDescription?: string | null;
  readonly price?: number | null;
  readonly discount?: number | null;
  readonly isValidityDays?: boolean | null;
  readonly validityDays?: number | null;
  readonly expiryDate?: string | null;
  readonly VariablePricings?: (VariablePricing | null)[] | null;
  readonly Exam?: Exam | null;
  readonly Learners?: (MockTestLearner | null)[] | null;
  readonly Affiliates?: (MockTestAffiliate | null)[] | null;
  readonly Admin?: (MockTestAdmin | null)[] | null;
  readonly Instructors?: (MockTestInstructor | null)[] | null;
  readonly testseriess?: (TestSeriesMockTest | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mockTestExamId?: string | null;
}

type LazyMockTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MockTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly shortId?: string | null;
  readonly isFree?: boolean | null;
  readonly publishingDate?: string | null;
  readonly publishingStatus?: string | null;
  readonly description?: string | null;
  readonly shortDescription?: string | null;
  readonly price?: number | null;
  readonly discount?: number | null;
  readonly isValidityDays?: boolean | null;
  readonly validityDays?: number | null;
  readonly expiryDate?: string | null;
  readonly VariablePricings: AsyncCollection<VariablePricing>;
  readonly Exam: AsyncItem<Exam | undefined>;
  readonly Learners: AsyncCollection<MockTestLearner>;
  readonly Affiliates: AsyncCollection<MockTestAffiliate>;
  readonly Admin: AsyncCollection<MockTestAdmin>;
  readonly Instructors: AsyncCollection<MockTestInstructor>;
  readonly testseriess: AsyncCollection<TestSeriesMockTest>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mockTestExamId?: string | null;
}

export declare type MockTest = LazyLoading extends LazyLoadingDisabled ? EagerMockTest : LazyMockTest

export declare const MockTest: (new (init: ModelInit<MockTest>) => MockTest) & {
  copyOf(source: MockTest, mutator: (draft: MutableModel<MockTest>) => MutableModel<MockTest> | void): MockTest;
}

type EagerLearner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Learner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly password?: string | null;
  readonly role?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
  readonly mocktests?: (MockTestLearner | null)[] | null;
  readonly testseriess?: (TestSeriesLearner | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLearner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Learner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly password?: string | null;
  readonly role?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
  readonly mocktests: AsyncCollection<MockTestLearner>;
  readonly testseriess: AsyncCollection<TestSeriesLearner>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Learner = LazyLoading extends LazyLoadingDisabled ? EagerLearner : LazyLearner

export declare const Learner: (new (init: ModelInit<Learner>) => Learner) & {
  copyOf(source: Learner, mutator: (draft: MutableModel<Learner>) => MutableModel<Learner> | void): Learner;
}

type EagerAffiliate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Affiliate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly commitionRate?: number | null;
  readonly isLifelong?: boolean | null;
  readonly password?: string | null;
  readonly role?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
  readonly mocktests?: (MockTestAffiliate | null)[] | null;
  readonly testseriess?: (TestSeriesAffiliate | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAffiliate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Affiliate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly commitionRate?: number | null;
  readonly isLifelong?: boolean | null;
  readonly password?: string | null;
  readonly role?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
  readonly mocktests: AsyncCollection<MockTestAffiliate>;
  readonly testseriess: AsyncCollection<TestSeriesAffiliate>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Affiliate = LazyLoading extends LazyLoadingDisabled ? EagerAffiliate : LazyAffiliate

export declare const Affiliate: (new (init: ModelInit<Affiliate>) => Affiliate) & {
  copyOf(source: Affiliate, mutator: (draft: MutableModel<Affiliate>) => MutableModel<Affiliate> | void): Affiliate;
}

type EagerAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly role: string;
  readonly password?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
  readonly mocktests?: (MockTestAdmin | null)[] | null;
  readonly testseriess?: (TestSeriesAdmin | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly role: string;
  readonly password?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
  readonly mocktests: AsyncCollection<MockTestAdmin>;
  readonly testseriess: AsyncCollection<TestSeriesAdmin>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Admin = LazyLoading extends LazyLoadingDisabled ? EagerAdmin : LazyAdmin

export declare const Admin: (new (init: ModelInit<Admin>) => Admin) & {
  copyOf(source: Admin, mutator: (draft: MutableModel<Admin>) => MutableModel<Admin> | void): Admin;
}

type EagerInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly password?: string | null;
  readonly role?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
  readonly mocktests?: (MockTestInstructor | null)[] | null;
  readonly testseriess?: (TestSeriesInstructor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly mobile: string;
  readonly lastLogin?: string | null;
  readonly joinedOn?: string | null;
  readonly isEnabled?: boolean | null;
  readonly products?: (string | null)[] | null;
  readonly leadStatus?: string | null;
  readonly userSegment?: string | null;
  readonly password?: string | null;
  readonly role?: string | null;
  readonly state?: string | null;
  readonly language?: string | null;
  readonly userNote?: string | null;
  readonly mocktests: AsyncCollection<MockTestInstructor>;
  readonly testseriess: AsyncCollection<TestSeriesInstructor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Instructor = LazyLoading extends LazyLoadingDisabled ? EagerInstructor : LazyInstructor

export declare const Instructor: (new (init: ModelInit<Instructor>) => Instructor) & {
  copyOf(source: Instructor, mutator: (draft: MutableModel<Instructor>) => MutableModel<Instructor> | void): Instructor;
}

type EagerTestSeriesLearner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestSeriesLearner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testSeriesId?: string | null;
  readonly learnerId?: string | null;
  readonly testSeries: TestSeries;
  readonly learner: Learner;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestSeriesLearner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestSeriesLearner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testSeriesId?: string | null;
  readonly learnerId?: string | null;
  readonly testSeries: AsyncItem<TestSeries>;
  readonly learner: AsyncItem<Learner>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestSeriesLearner = LazyLoading extends LazyLoadingDisabled ? EagerTestSeriesLearner : LazyTestSeriesLearner

export declare const TestSeriesLearner: (new (init: ModelInit<TestSeriesLearner>) => TestSeriesLearner) & {
  copyOf(source: TestSeriesLearner, mutator: (draft: MutableModel<TestSeriesLearner>) => MutableModel<TestSeriesLearner> | void): TestSeriesLearner;
}

type EagerTestSeriesAffiliate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestSeriesAffiliate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testSeriesId?: string | null;
  readonly affiliateId?: string | null;
  readonly testSeries: TestSeries;
  readonly affiliate: Affiliate;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestSeriesAffiliate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestSeriesAffiliate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testSeriesId?: string | null;
  readonly affiliateId?: string | null;
  readonly testSeries: AsyncItem<TestSeries>;
  readonly affiliate: AsyncItem<Affiliate>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestSeriesAffiliate = LazyLoading extends LazyLoadingDisabled ? EagerTestSeriesAffiliate : LazyTestSeriesAffiliate

export declare const TestSeriesAffiliate: (new (init: ModelInit<TestSeriesAffiliate>) => TestSeriesAffiliate) & {
  copyOf(source: TestSeriesAffiliate, mutator: (draft: MutableModel<TestSeriesAffiliate>) => MutableModel<TestSeriesAffiliate> | void): TestSeriesAffiliate;
}

type EagerTestSeriesAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestSeriesAdmin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testSeriesId?: string | null;
  readonly adminId?: string | null;
  readonly testSeries: TestSeries;
  readonly admin: Admin;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestSeriesAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestSeriesAdmin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testSeriesId?: string | null;
  readonly adminId?: string | null;
  readonly testSeries: AsyncItem<TestSeries>;
  readonly admin: AsyncItem<Admin>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestSeriesAdmin = LazyLoading extends LazyLoadingDisabled ? EagerTestSeriesAdmin : LazyTestSeriesAdmin

export declare const TestSeriesAdmin: (new (init: ModelInit<TestSeriesAdmin>) => TestSeriesAdmin) & {
  copyOf(source: TestSeriesAdmin, mutator: (draft: MutableModel<TestSeriesAdmin>) => MutableModel<TestSeriesAdmin> | void): TestSeriesAdmin;
}

type EagerTestSeriesInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestSeriesInstructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testSeriesId?: string | null;
  readonly instructorId?: string | null;
  readonly testSeries: TestSeries;
  readonly instructor: Instructor;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestSeriesInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestSeriesInstructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testSeriesId?: string | null;
  readonly instructorId?: string | null;
  readonly testSeries: AsyncItem<TestSeries>;
  readonly instructor: AsyncItem<Instructor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestSeriesInstructor = LazyLoading extends LazyLoadingDisabled ? EagerTestSeriesInstructor : LazyTestSeriesInstructor

export declare const TestSeriesInstructor: (new (init: ModelInit<TestSeriesInstructor>) => TestSeriesInstructor) & {
  copyOf(source: TestSeriesInstructor, mutator: (draft: MutableModel<TestSeriesInstructor>) => MutableModel<TestSeriesInstructor> | void): TestSeriesInstructor;
}

type EagerTestSeriesMockTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestSeriesMockTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testSeriesId?: string | null;
  readonly mockTestId?: string | null;
  readonly testSeries: TestSeries;
  readonly mockTest: MockTest;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestSeriesMockTest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestSeriesMockTest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly testSeriesId?: string | null;
  readonly mockTestId?: string | null;
  readonly testSeries: AsyncItem<TestSeries>;
  readonly mockTest: AsyncItem<MockTest>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestSeriesMockTest = LazyLoading extends LazyLoadingDisabled ? EagerTestSeriesMockTest : LazyTestSeriesMockTest

export declare const TestSeriesMockTest: (new (init: ModelInit<TestSeriesMockTest>) => TestSeriesMockTest) & {
  copyOf(source: TestSeriesMockTest, mutator: (draft: MutableModel<TestSeriesMockTest>) => MutableModel<TestSeriesMockTest> | void): TestSeriesMockTest;
}

type EagerMockTestLearner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MockTestLearner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mockTestId?: string | null;
  readonly learnerId?: string | null;
  readonly mockTest: MockTest;
  readonly learner: Learner;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMockTestLearner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MockTestLearner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mockTestId?: string | null;
  readonly learnerId?: string | null;
  readonly mockTest: AsyncItem<MockTest>;
  readonly learner: AsyncItem<Learner>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MockTestLearner = LazyLoading extends LazyLoadingDisabled ? EagerMockTestLearner : LazyMockTestLearner

export declare const MockTestLearner: (new (init: ModelInit<MockTestLearner>) => MockTestLearner) & {
  copyOf(source: MockTestLearner, mutator: (draft: MutableModel<MockTestLearner>) => MutableModel<MockTestLearner> | void): MockTestLearner;
}

type EagerMockTestAffiliate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MockTestAffiliate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mockTestId?: string | null;
  readonly affiliateId?: string | null;
  readonly mockTest: MockTest;
  readonly affiliate: Affiliate;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMockTestAffiliate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MockTestAffiliate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mockTestId?: string | null;
  readonly affiliateId?: string | null;
  readonly mockTest: AsyncItem<MockTest>;
  readonly affiliate: AsyncItem<Affiliate>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MockTestAffiliate = LazyLoading extends LazyLoadingDisabled ? EagerMockTestAffiliate : LazyMockTestAffiliate

export declare const MockTestAffiliate: (new (init: ModelInit<MockTestAffiliate>) => MockTestAffiliate) & {
  copyOf(source: MockTestAffiliate, mutator: (draft: MutableModel<MockTestAffiliate>) => MutableModel<MockTestAffiliate> | void): MockTestAffiliate;
}

type EagerMockTestAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MockTestAdmin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mockTestId?: string | null;
  readonly adminId?: string | null;
  readonly mockTest: MockTest;
  readonly admin: Admin;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMockTestAdmin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MockTestAdmin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mockTestId?: string | null;
  readonly adminId?: string | null;
  readonly mockTest: AsyncItem<MockTest>;
  readonly admin: AsyncItem<Admin>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MockTestAdmin = LazyLoading extends LazyLoadingDisabled ? EagerMockTestAdmin : LazyMockTestAdmin

export declare const MockTestAdmin: (new (init: ModelInit<MockTestAdmin>) => MockTestAdmin) & {
  copyOf(source: MockTestAdmin, mutator: (draft: MutableModel<MockTestAdmin>) => MutableModel<MockTestAdmin> | void): MockTestAdmin;
}

type EagerMockTestInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MockTestInstructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mockTestId?: string | null;
  readonly instructorId?: string | null;
  readonly mockTest: MockTest;
  readonly instructor: Instructor;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMockTestInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MockTestInstructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mockTestId?: string | null;
  readonly instructorId?: string | null;
  readonly mockTest: AsyncItem<MockTest>;
  readonly instructor: AsyncItem<Instructor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MockTestInstructor = LazyLoading extends LazyLoadingDisabled ? EagerMockTestInstructor : LazyMockTestInstructor

export declare const MockTestInstructor: (new (init: ModelInit<MockTestInstructor>) => MockTestInstructor) & {
  copyOf(source: MockTestInstructor, mutator: (draft: MutableModel<MockTestInstructor>) => MutableModel<MockTestInstructor> | void): MockTestInstructor;
}