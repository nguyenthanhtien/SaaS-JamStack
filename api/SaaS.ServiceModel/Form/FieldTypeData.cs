using ServiceStack.Model;
using ServiceStack;
using System;
using ServiceStack.DataAnnotations;
using SaaS.ServiceModel.Form;

namespace SaaS.ServiceModel.FieldTypeData
{
    public class FieldTypeData : AuditBase, IHasId<Guid>
    {
        [AutoId]
        public Guid Id { get; set; }
        public Guid FieldId { get; set; }
        public virtual Field Field { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Value { get; set; }

    }



    [Tag("FieldTypeData"), Description("Find FieldTypeData")]
    [Route("/FieldTypeData", "GET")]
    [Route("/FieldTypeData/{Id}", "GET")]
    [AutoApply(Behavior.AuditQuery)]
    public class QueryFieldTypeDatas : QueryDb<FieldTypeData>
    {
        public Guid? FieldId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Value { get; set; }
    }

    [Tag("FieldTypeData"), Description("Create a new FieldTypeData")]
    [Route("/FieldTypeData", "POST")]
    [AutoApply(Behavior.AuditCreate)]
    public class CreateFieldTypeData : ICreateDb<FieldTypeData>, IReturn<IdResponse>
    {
        public Guid FieldId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Value { get; set; }
    }

    [Tag("FieldTypeData"), Description("Update an existing FieldTypeData")]
    [Route("/FieldTypeData/{Id}", "PATCH")]
    [AutoApply(Behavior.AuditModify)]
    public class UpdateFieldTypeData : IPatchDb<FieldTypeData>, IReturn<IdResponse>
    {
        public Guid Id { get; set; }
        public Guid? FieldId { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Value { get; set; }

    }

    [Tag("FieldTypeData"), Description("Delete a FieldTypeData")]
    [Route("/FieldTypeData/{Id}", "DELETE")]
    [AutoApply(Behavior.AuditSoftDelete)]
    public class DeleteFieldTypeData : IDeleteDb<FieldTypeData>, IReturnVoid
    {
        public Guid Id { get; set; }
    }
}
