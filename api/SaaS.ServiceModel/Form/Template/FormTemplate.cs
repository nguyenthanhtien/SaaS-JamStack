using ServiceStack.Model;
using ServiceStack;
using System;
using System.Collections.Generic;
using ServiceStack.DataAnnotations;

namespace SaaS.ServiceModel.Form.Template
{
    public class FormTemplate : AuditBase, IHasId<Guid>
    {
        [AutoId]
        public Guid Id { get; set; }
        public Guid FormId { get; set; }
        public string Name { get; set; }
        public virtual ICollection<FormFieldTemplate> FormFieldTemplates { get; set; }

    }

    [Tag("FormTemplate"), Description("Find FormTemplate")]
    [Route("/FormTemplate", "GET")]
    [Route("/FormTemplate/{Id}", "GET")]
    [AutoApply(Behavior.AuditQuery)]
    public class QueryFormTemplates : QueryDb<FormTemplate>
    {
        public Guid? FormId { get; set; }
        public string? Name { get; set; }
    }

    [Tag("FormTemplate"), Description("Create a new FormTemplate")]
    [Route("/FormTemplate", "POST")]
    [AutoApply(Behavior.AuditCreate)]
    public class CreateFormTemplate : ICreateDb<FormTemplate>, IReturn<IdResponse>
    {
        public Guid FormId { get; set; }
        public string Name { get; set; }
    }

    [Tag("FormTemplate"), Description("Update an existing FormTemplate")]
    [Route("/FormTemplate/{Id}", "PATCH")]
    [AutoApply(Behavior.AuditModify)]
    public class UpdateFormTemplate : IPatchDb<FormTemplate>, IReturn<IdResponse>
    {
        public Guid? FormId { get; set; }
        public string? Name { get; set; }

    }

    [Tag("FormTemplate"), Description("Delete a FormTemplate")]
    [Route("/FormTemplate/{Id}", "DELETE")]
    [AutoApply(Behavior.AuditSoftDelete)]
    public class DeleteFormTemplate : IDeleteDb<FormTemplate>, IReturnVoid
    {
        public Guid Id { get; set; }
    }
}
