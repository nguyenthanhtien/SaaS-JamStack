/* Options:
Date: 2023-05-06 12:45:14
Version: 6.80
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5000

//GlobalNamespace: 
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
    createResponse(): T;
}

export interface IReturnVoid
{
    createResponse(): void;
}

export interface IHasSessionId
{
    sessionId: string;
}

export interface IHasBearerToken
{
    bearerToken: string;
}

export interface IPost
{
}

export interface IPut
{
}

export interface IDelete
{
}

export interface ICreateDb<Table>
{
}

export interface IPatchDb<Table>
{
}

export interface IDeleteDb<Table>
{
}

// @DataContract
export class QueryBase
{
    // @DataMember(Order=1)
    public skip?: number;

    // @DataMember(Order=2)
    public take?: number;

    // @DataMember(Order=3)
    public orderBy: string;

    // @DataMember(Order=4)
    public orderByDesc: string;

    // @DataMember(Order=5)
    public include: string;

    // @DataMember(Order=6)
    public fields: string;

    // @DataMember(Order=7)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<QueryBase>) { (Object as any).assign(this, init); }
}

export class QueryData<T> extends QueryBase
{

    public constructor(init?: Partial<QueryData<T>>) { super(init); (Object as any).assign(this, init); }
}

export class QueryDb<T> extends QueryBase
{

    public constructor(init?: Partial<QueryDb<T>>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class AuditBase
{
    // @DataMember(Order=1)
    public createdDate: string;

    // @DataMember(Order=2)
    // @Required()
    public createdBy: string;

    // @DataMember(Order=3)
    public modifiedDate: string;

    // @DataMember(Order=4)
    // @Required()
    public modifiedBy: string;

    // @DataMember(Order=5)
    public deletedDate?: string;

    // @DataMember(Order=6)
    public deletedBy: string;

    public constructor(init?: Partial<AuditBase>) { (Object as any).assign(this, init); }
}

export enum RoomType
{
    Single = 'Single',
    Double = 'Double',
    Queen = 'Queen',
    Twin = 'Twin',
    Suite = 'Suite',
}

/** @description Booking Details */
export class Booking extends AuditBase
{
    public id: number;
    public name: string;
    public roomType: RoomType;
    public roomNumber: number;
    public bookingStartDate: string;
    public bookingEndDate?: string;
    public cost: number;
    public notes?: string;
    public cancelled?: boolean;

    public constructor(init?: Partial<Booking>) { super(init); (Object as any).assign(this, init); }
}

/** @description FormGroup Details */
export class FormGroup extends AuditBase
{
    public id: number;
    public name: string;
    public index: number;

    public constructor(init?: Partial<FormGroup>) { super(init); (Object as any).assign(this, init); }
}

export class FormFieldTemplate extends AuditBase
{
    public id: string;
    public formTemplateId: string;
    public formTemplate: FormTemplate;
    public fieldId: string;
    public field: Field;
    public value: string;

    public constructor(init?: Partial<FormFieldTemplate>) { super(init); (Object as any).assign(this, init); }
}

export class FormTemplate extends AuditBase
{
    public id: string;
    public formId: string;
    public name: string;
    public formFieldTemplates: FormFieldTemplate[];

    public constructor(init?: Partial<FormTemplate>) { super(init); (Object as any).assign(this, init); }
}

export class Form extends AuditBase
{
    public id: string;
    public name: string;
    public formTemplates: FormTemplate[];
    public fields: Field[];

    public constructor(init?: Partial<Form>) { super(init); (Object as any).assign(this, init); }
}

export enum FieldType
{
    TEXT = 'TEXT',
    NUMBER = 'NUMBER',
    CHECKBOX = 'CHECKBOX',
    DATE = 'DATE',
    DATETIME = 'DATETIME',
    TIME = 'TIME',
    DROPDOWN = 'DROPDOWN',
    MULTIPLE_TAGS = 'MULTIPLE_TAGS',
    RADIO_GROUP = 'RADIO_GROUP',
}

export class Field extends AuditBase
{
    public id: string;
    public formId: string;
    public form: Form;
    public name: string;
    public label: string;
    public type: FieldType;
    public index: number;
    public optional: boolean;

    public constructor(init?: Partial<Field>) { super(init); (Object as any).assign(this, init); }
}

export class FieldTypeData extends AuditBase
{
    public id: string;
    public fieldId: string;
    public field: Field;
    public name: string;
    public description: string;
    public value: string;

    public constructor(init?: Partial<FieldTypeData>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public fieldName: string;

    // @DataMember(Order=3)
    public message: string;

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseError>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public message: string;

    // @DataMember(Order=3)
    public stackTrace: string;

    // @DataMember(Order=4)
    public errors: ResponseError[];

    // @DataMember(Order=5)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseStatus>) { (Object as any).assign(this, init); }
}

export class HelloResponse
{
    public result: string;

    public constructor(init?: Partial<HelloResponse>) { (Object as any).assign(this, init); }
}

export class Todo
{
    public id: number;
    public text: string;
    public isFinished: boolean;

    public constructor(init?: Partial<Todo>) { (Object as any).assign(this, init); }
}

// @DataContract
export class QueryResponse<Todo>
{
    // @DataMember(Order=1)
    public offset: number;

    // @DataMember(Order=2)
    public total: number;

    // @DataMember(Order=3)
    public results: Todo[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    // @DataMember(Order=5)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<QueryResponse<Todo>>) { (Object as any).assign(this, init); }
}

// @DataContract
export class AuthenticateResponse implements IHasSessionId, IHasBearerToken
{
    // @DataMember(Order=1)
    public userId: string;

    // @DataMember(Order=2)
    public sessionId: string;

    // @DataMember(Order=3)
    public userName: string;

    // @DataMember(Order=4)
    public displayName: string;

    // @DataMember(Order=5)
    public referrerUrl: string;

    // @DataMember(Order=6)
    public bearerToken: string;

    // @DataMember(Order=7)
    public refreshToken: string;

    // @DataMember(Order=8)
    public profileUrl: string;

    // @DataMember(Order=9)
    public roles: string[];

    // @DataMember(Order=10)
    public permissions: string[];

    // @DataMember(Order=11)
    public responseStatus: ResponseStatus;

    // @DataMember(Order=12)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<AuthenticateResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class AssignRolesResponse
{
    // @DataMember(Order=1)
    public allRoles: string[];

    // @DataMember(Order=2)
    public allPermissions: string[];

    // @DataMember(Order=3)
    public meta: { [index: string]: string; };

    // @DataMember(Order=4)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<AssignRolesResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class UnAssignRolesResponse
{
    // @DataMember(Order=1)
    public allRoles: string[];

    // @DataMember(Order=2)
    public allPermissions: string[];

    // @DataMember(Order=3)
    public meta: { [index: string]: string; };

    // @DataMember(Order=4)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<UnAssignRolesResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class RegisterResponse implements IHasSessionId, IHasBearerToken
{
    // @DataMember(Order=1)
    public userId: string;

    // @DataMember(Order=2)
    public sessionId: string;

    // @DataMember(Order=3)
    public userName: string;

    // @DataMember(Order=4)
    public referrerUrl: string;

    // @DataMember(Order=5)
    public bearerToken: string;

    // @DataMember(Order=6)
    public refreshToken: string;

    // @DataMember(Order=7)
    public roles: string[];

    // @DataMember(Order=8)
    public permissions: string[];

    // @DataMember(Order=9)
    public responseStatus: ResponseStatus;

    // @DataMember(Order=10)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<RegisterResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class IdResponse
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<IdResponse>) { (Object as any).assign(this, init); }
}

// @Route("/hello")
// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse>
{
    public name: string;

    public constructor(init?: Partial<Hello>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'Hello'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new HelloResponse(); }
}

// @Route("/todos", "GET")
export class QueryTodos extends QueryData<Todo> implements IReturn<QueryResponse<Todo>>
{
    public id?: number;
    public ids?: number[];
    public textContains?: string;

    public constructor(init?: Partial<QueryTodos>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryTodos'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Todo>(); }
}

// @Route("/todos", "POST")
export class CreateTodo implements IReturn<Todo>, IPost
{
    // @Validate(Validator="NotEmpty")
    public text: string;

    public constructor(init?: Partial<CreateTodo>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateTodo'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new Todo(); }
}

// @Route("/todos/{Id}", "PUT")
export class UpdateTodo implements IReturn<Todo>, IPut
{
    public id: number;
    // @Validate(Validator="NotEmpty")
    public text: string;

    public isFinished: boolean;

    public constructor(init?: Partial<UpdateTodo>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateTodo'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new Todo(); }
}

// @Route("/todos/{Id}", "DELETE")
export class DeleteTodo implements IReturnVoid, IDelete
{
    public id: number;

    public constructor(init?: Partial<DeleteTodo>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteTodo'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

// @Route("/todos", "DELETE")
export class DeleteTodos implements IReturnVoid, IDelete
{
    public ids: number[];

    public constructor(init?: Partial<DeleteTodos>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteTodos'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

/** @description Sign In */
// @Route("/auth", "OPTIONS,GET,POST,DELETE")
// @Route("/auth/{provider}", "OPTIONS,GET,POST,DELETE")
// @Api(Description="Sign In")
// @DataContract
export class Authenticate implements IReturn<AuthenticateResponse>, IPost
{
    /** @description AuthProvider, e.g. credentials */
    // @DataMember(Order=1)
    public provider: string;

    // @DataMember(Order=2)
    public state: string;

    // @DataMember(Order=3)
    public oauth_token: string;

    // @DataMember(Order=4)
    public oauth_verifier: string;

    // @DataMember(Order=5)
    public userName: string;

    // @DataMember(Order=6)
    public password: string;

    // @DataMember(Order=7)
    public rememberMe?: boolean;

    // @DataMember(Order=9)
    public errorView: string;

    // @DataMember(Order=10)
    public nonce: string;

    // @DataMember(Order=11)
    public uri: string;

    // @DataMember(Order=12)
    public response: string;

    // @DataMember(Order=13)
    public qop: string;

    // @DataMember(Order=14)
    public nc: string;

    // @DataMember(Order=15)
    public cnonce: string;

    // @DataMember(Order=17)
    public accessToken: string;

    // @DataMember(Order=18)
    public accessTokenSecret: string;

    // @DataMember(Order=19)
    public scope: string;

    // @DataMember(Order=20)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<Authenticate>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'Authenticate'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AuthenticateResponse(); }
}

// @Route("/assignroles", "POST")
// @DataContract
export class AssignRoles implements IReturn<AssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public permissions: string[];

    // @DataMember(Order=3)
    public roles: string[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<AssignRoles>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AssignRoles'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AssignRolesResponse(); }
}

// @Route("/unassignroles", "POST")
// @DataContract
export class UnAssignRoles implements IReturn<UnAssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public permissions: string[];

    // @DataMember(Order=3)
    public roles: string[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<UnAssignRoles>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UnAssignRoles'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new UnAssignRolesResponse(); }
}

/** @description Sign Up */
// @Route("/register", "PUT,POST")
// @Api(Description="Sign Up")
// @DataContract
export class Register implements IReturn<RegisterResponse>, IPost
{
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public firstName: string;

    // @DataMember(Order=3)
    public lastName: string;

    // @DataMember(Order=4)
    public displayName: string;

    // @DataMember(Order=5)
    public email: string;

    // @DataMember(Order=6)
    public password: string;

    // @DataMember(Order=7)
    public confirmPassword: string;

    // @DataMember(Order=8)
    public autoLogin?: boolean;

    // @DataMember(Order=10)
    public errorView: string;

    // @DataMember(Order=11)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<Register>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'Register'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new RegisterResponse(); }
}

/** @description Find Bookings */
// @Route("/bookings", "GET")
// @Route("/bookings/{Id}", "GET")
export class QueryBookings extends QueryDb<Booking> implements IReturn<QueryResponse<Booking>>
{
    public id?: number;

    public constructor(init?: Partial<QueryBookings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryBookings'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Booking>(); }
}

/** @description Find FormGroups */
// @Route("/FormGroups", "GET")
// @Route("/FormGroups/{Id}", "GET")
export class QueryFormGroups extends QueryDb<FormGroup> implements IReturn<QueryResponse<FormGroup>>
{
    public id?: number;

    public constructor(init?: Partial<QueryFormGroups>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryFormGroups'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<FormGroup>(); }
}

/** @description Find FieldTypeData */
// @Route("/FieldTypeData", "GET")
// @Route("/FieldTypeData/{Id}", "GET")
export class QueryFieldTypeDatas extends QueryDb<FieldTypeData> implements IReturn<QueryResponse<FieldTypeData>>
{
    public fieldId?: string;
    public name?: string;
    public description?: string;
    public value?: string;

    public constructor(init?: Partial<QueryFieldTypeDatas>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryFieldTypeDatas'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<FieldTypeData>(); }
}

/** @description Find Field */
// @Route("/Field", "GET")
// @Route("/Field/{Id}", "GET")
export class QueryFields extends QueryDb<Field> implements IReturn<QueryResponse<Field>>
{
    public formId?: string;
    public name?: string;
    public label?: string;
    public type?: FieldType;
    public index?: number;
    public optional?: boolean;

    public constructor(init?: Partial<QueryFields>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryFields'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Field>(); }
}

/** @description Find Form */
// @Route("/form", "GET")
// @Route("/form/{Id}", "GET")
export class QueryForms extends QueryDb<Form> implements IReturn<QueryResponse<Form>>
{
    public id?: number;

    public constructor(init?: Partial<QueryForms>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryForms'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Form>(); }
}

/** @description Find FormFieldTemplate */
// @Route("/FormFieldTemplate", "GET")
// @Route("/FormFieldTemplate/{Id}", "GET")
export class QueryFormFieldTemplates extends QueryDb<FormFieldTemplate> implements IReturn<QueryResponse<FormFieldTemplate>>
{
    public formTemplateId?: string;
    public fieldId?: string;
    public value?: string;

    public constructor(init?: Partial<QueryFormFieldTemplates>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryFormFieldTemplates'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<FormFieldTemplate>(); }
}

/** @description Find FormTemplate */
// @Route("/FormTemplate", "GET")
// @Route("/FormTemplate/{Id}", "GET")
export class QueryFormTemplates extends QueryDb<FormTemplate> implements IReturn<QueryResponse<FormTemplate>>
{
    public formId?: string;
    public name?: string;

    public constructor(init?: Partial<QueryFormTemplates>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryFormTemplates'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<FormTemplate>(); }
}

/** @description Create a new Booking */
// @Route("/bookings", "POST")
// @ValidateRequest(Validator="HasRole(`Employee`)")
export class CreateBooking implements IReturn<IdResponse>, ICreateDb<Booking>
{
    /** @description Name this Booking is for */
    // @Validate(Validator="NotEmpty")
    public name: string;

    public roomType: RoomType;
    // @Validate(Validator="GreaterThan(0)")
    public roomNumber: number;

    // @Validate(Validator="GreaterThan(0)")
    public cost: number;

    public bookingStartDate: string;
    public bookingEndDate?: string;
    public notes?: string;

    public constructor(init?: Partial<CreateBooking>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateBooking'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Update an existing Booking */
// @Route("/booking/{Id}", "PATCH")
// @ValidateRequest(Validator="HasRole(`Employee`)")
export class UpdateBooking implements IReturn<IdResponse>, IPatchDb<Booking>
{
    public id: number;
    public name?: string;
    public roomType?: RoomType;
    // @Validate(Validator="GreaterThan(0)")
    public roomNumber?: number;

    // @Validate(Validator="GreaterThan(0)")
    public cost?: number;

    public bookingStartDate?: string;
    public bookingEndDate?: string;
    public notes?: string;
    public cancelled?: boolean;

    public constructor(init?: Partial<UpdateBooking>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateBooking'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete a Booking */
// @Route("/booking/{Id}", "DELETE")
// @ValidateRequest(Validator="HasRole(`Manager`)")
export class DeleteBooking implements IReturnVoid, IDeleteDb<Booking>
{
    public id: number;

    public constructor(init?: Partial<DeleteBooking>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteBooking'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

/** @description Create a new FormGroup */
// @Route("/FormGroups", "POST")
// @ValidateRequest(Validator="HasRole(`Employee`)")
export class CreateFormGroup implements IReturn<IdResponse>, ICreateDb<FormGroup>
{
    /** @description Name this FormGroup is for */
    // @Validate(Validator="NotEmpty")
    public name: string;

    public index: number;

    public constructor(init?: Partial<CreateFormGroup>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateFormGroup'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Update an existing FormGroup */
// @Route("/FormGroup/{Id}", "PATCH")
// @ValidateRequest(Validator="HasRole(`Employee`)")
export class UpdateFormGroup implements IReturn<IdResponse>, IPatchDb<FormGroup>
{
    public id: number;
    public name?: string;
    public index?: number;

    public constructor(init?: Partial<UpdateFormGroup>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateFormGroup'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete a FormGroup */
// @Route("/FormGroup/{Id}", "DELETE")
// @ValidateRequest(Validator="HasRole(`Manager`)")
export class DeleteFormGroup implements IReturnVoid, IDeleteDb<FormGroup>
{
    public id: number;

    public constructor(init?: Partial<DeleteFormGroup>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteFormGroup'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

/** @description Create a new FieldTypeData */
// @Route("/FieldTypeData", "POST")
export class CreateFieldTypeData implements IReturn<IdResponse>, ICreateDb<FieldTypeData>
{
    public fieldId: string;
    public name: string;
    public description: string;
    public value: string;

    public constructor(init?: Partial<CreateFieldTypeData>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateFieldTypeData'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Update an existing FieldTypeData */
// @Route("/FieldTypeData/{Id}", "PATCH")
export class UpdateFieldTypeData implements IReturn<IdResponse>, IPatchDb<FieldTypeData>
{
    public fieldId?: string;
    public name?: string;
    public description?: string;
    public value?: string;

    public constructor(init?: Partial<UpdateFieldTypeData>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateFieldTypeData'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete a FieldTypeData */
// @Route("/FieldTypeData/{Id}", "DELETE")
export class DeleteFieldTypeData implements IReturnVoid, IDeleteDb<FieldTypeData>
{
    public id: string;

    public constructor(init?: Partial<DeleteFieldTypeData>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteFieldTypeData'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

/** @description Create a new Field */
// @Route("/Field", "POST")
export class CreateField implements IReturn<IdResponse>, ICreateDb<Field>
{
    public formId: string;
    public name: string;
    public label: string;
    public type: FieldType;
    public index: number;
    public optional: boolean;

    public constructor(init?: Partial<CreateField>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateField'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Update an existing Field */
// @Route("/Field/{Id}", "PATCH")
export class UpdateField implements IReturn<IdResponse>, IPatchDb<Field>
{
    public formId?: string;
    public name?: string;
    public label?: string;
    public type?: FieldType;
    public index?: number;
    public optional?: boolean;

    public constructor(init?: Partial<UpdateField>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateField'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete a Field */
// @Route("/Field/{Id}", "DELETE")
export class DeleteField implements IReturnVoid, IDeleteDb<Field>
{
    public id: string;

    public constructor(init?: Partial<DeleteField>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteField'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

/** @description Create a new Form */
// @Route("/form", "POST")
export class CreateForm implements IReturn<IdResponse>, ICreateDb<Form>
{
    /** @description Name this Form is for */
    // @Validate(Validator="NotEmpty")
    public name: string;

    public index: number;

    public constructor(init?: Partial<CreateForm>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateForm'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Update an existing Form */
// @Route("/form/{Id}", "PATCH")
export class UpdateForm implements IReturn<IdResponse>, IPatchDb<Form>
{
    public id: number;
    public name?: string;
    public index?: number;

    public constructor(init?: Partial<UpdateForm>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateForm'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete a Form */
// @Route("/Form/{Id}", "DELETE")
export class DeleteForm implements IReturnVoid, IDeleteDb<Form>
{
    public id: number;

    public constructor(init?: Partial<DeleteForm>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteForm'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

/** @description Create a new FormFieldTemplate */
// @Route("/FormFieldTemplate", "POST")
export class CreateFormFieldTemplate implements IReturn<IdResponse>, ICreateDb<FormFieldTemplate>
{
    public formTemplateId: string;
    public fieldId: string;
    public value: string;

    public constructor(init?: Partial<CreateFormFieldTemplate>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateFormFieldTemplate'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Update an existing FormFieldTemplate */
// @Route("/FormFieldTemplate/{Id}", "PATCH")
export class UpdateFormFieldTemplate implements IReturn<IdResponse>, IPatchDb<FormFieldTemplate>
{
    public formTemplateId?: string;
    public fieldId?: string;
    public value?: string;

    public constructor(init?: Partial<UpdateFormFieldTemplate>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateFormFieldTemplate'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete a FormFieldTemplate */
// @Route("/FormFieldTemplate/{Id}", "DELETE")
export class DeleteFormFieldTemplate implements IReturnVoid, IDeleteDb<FormFieldTemplate>
{
    public id: string;

    public constructor(init?: Partial<DeleteFormFieldTemplate>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteFormFieldTemplate'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

/** @description Create a new FormTemplate */
// @Route("/FormTemplate", "POST")
export class CreateFormTemplate implements IReturn<IdResponse>, ICreateDb<FormTemplate>
{
    public formId: string;
    public name: string;

    public constructor(init?: Partial<CreateFormTemplate>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateFormTemplate'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Update an existing FormTemplate */
// @Route("/FormTemplate/{Id}", "PATCH")
export class UpdateFormTemplate implements IReturn<IdResponse>, IPatchDb<FormTemplate>
{
    public formId?: string;
    public name?: string;

    public constructor(init?: Partial<UpdateFormTemplate>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateFormTemplate'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete a FormTemplate */
// @Route("/FormTemplate/{Id}", "DELETE")
export class DeleteFormTemplate implements IReturnVoid, IDeleteDb<FormTemplate>
{
    public id: string;

    public constructor(init?: Partial<DeleteFormTemplate>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteFormTemplate'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

