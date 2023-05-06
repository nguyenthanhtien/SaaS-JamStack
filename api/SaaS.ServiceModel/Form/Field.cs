using SaaS.ServiceModel.Types;
using ServiceStack;
using ServiceStack.DataAnnotations;
using ServiceStack.Model;
using System;

namespace SaaS.ServiceModel.Form
{
    public class Field : AuditBase, IHasId<Guid>
    {
        [AutoId]
        public Guid Id { get; set; }
        public Guid FormId { get; set; }
        public virtual Form Form { get; set; }
        public string Name { get; set; }
        public string Label { get; set; }
        public FieldType Type { get; set; }
        public int Index { get; set; }
        public bool Optional { get; set; }
    }




    [Tag("Field"), Description("Find Field")]
    [Route("/Field", "GET")]
    [Route("/Field/{Id}", "GET")]
    [AutoApply(Behavior.AuditQuery)]
    public class QueryFields : QueryDb<Field>
    {
        public Guid? FormId { get; set; }
        public string? Name { get; set; }
        public string? Label { get; set; }
        public FieldType? Type { get; set; }
        public int? Index { get; set; }
        public bool? Optional { get; set; }
    }

    [Tag("Field"), Description("Create a new Field")]
    [Route("/Field", "POST")]
    [AutoApply(Behavior.AuditCreate)]
    public class CreateField : ICreateDb<Field>, IReturn<IdResponse>
    {
        public Guid FormId { get; set; }
        public string Name { get; set; }
        public string Label { get; set; }
        public FieldType Type { get; set; }
        public int Index { get; set; }
        public bool Optional { get; set; }
    }

    [Tag("Field"), Description("Update an existing Field")]
    [Route("/Field/{Id}", "PATCH")]
    [AutoApply(Behavior.AuditModify)]
    public class UpdateField : IPatchDb<Field>, IReturn<IdResponse>
    {
        public Guid Id { get; set; }
        public Guid? FormId { get; set; }
        public string? Name { get; set; }
        public string? Label { get; set; }
        public FieldType? Type { get; set; }
        public int? Index { get; set; }
        public bool? Optional { get; set; }

    }

    [Tag("Field"), Description("Delete a Field")]
    [Route("/Field/{Id}", "DELETE")]
    [AutoApply(Behavior.AuditSoftDelete)]
    public class DeleteField : IDeleteDb<Field>, IReturnVoid
    {
        public Guid Id { get; set; }
    }
}
