using ServiceStack.Model;
using ServiceStack;
using System;
using ServiceStack.DataAnnotations;

namespace SaaS.ServiceModel.Form.Template
{
    public class FormFieldTemplate : AuditBase, IHasId<Guid>
    {
        [AutoId]
        public Guid Id { get; set; }

        public Guid FormTemplateId { get; set; }
        public virtual FormTemplate FormTemplate { get; set; }

        public Guid FieldId { get; set; }
        public virtual Field Field { get; set; }

        public string Value { get; set; }
    }

    [Tag("FormFieldTemplate"), Description("Find FormFieldTemplate")]
    [Route("/FormFieldTemplate", "GET")]
    [Route("/FormFieldTemplate/{Id}", "GET")]
    [AutoApply(Behavior.AuditQuery)]
    public class QueryFormFieldTemplates : QueryDb<FormFieldTemplate>
    {
        public Guid? FormTemplateId { get; set; }
        public Guid? FieldId { get; set; }
        public string? Value { get; set; }
    }

    [Tag("FormFieldTemplate"), Description("Create a new FormFieldTemplate")]
    [Route("/FormFieldTemplate", "POST")]
    [AutoApply(Behavior.AuditCreate)]
    public class CreateFormFieldTemplate : ICreateDb<FormFieldTemplate>, IReturn<IdResponse>
    {
        public Guid FormTemplateId { get; set; }
        public Guid FieldId { get; set; }
        public string Value { get; set; }
    }

    [Tag("FormFieldTemplate"), Description("Update an existing FormFieldTemplate")]
    [Route("/FormFieldTemplate/{Id}", "PATCH")]
    [AutoApply(Behavior.AuditModify)]
    public class UpdateFormFieldTemplate : IPatchDb<FormFieldTemplate>, IReturn<IdResponse>
    {
        public Guid? FormTemplateId { get; set; }
        public Guid? FieldId { get; set; }
        public string? Value { get; set; }

    }

    [Tag("FormFieldTemplate"), Description("Delete a FormFieldTemplate")]
    [Route("/FormFieldTemplate/{Id}", "DELETE")]
    [AutoApply(Behavior.AuditSoftDelete)]
    public class DeleteFormFieldTemplate : IDeleteDb<FormFieldTemplate>, IReturnVoid
    {
        public Guid Id { get; set; }
    }
}
