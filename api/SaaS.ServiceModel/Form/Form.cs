using SaaS.ServiceModel.Form.Template;
using ServiceStack;
using ServiceStack.DataAnnotations;
using ServiceStack.Model;
using System;
using System.Collections.Generic;

namespace SaaS.ServiceModel.Form
{
    public class Form : AuditBase, IHasId<Guid>
    {
        [AutoId]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<FormTemplate> FormTemplates { get; set; }
        public virtual ICollection<Field> Fields { get; set; }

    }


    [Tag("Form"), Description("Find Form")]
    [Route("/form", "GET")]
    [Route("/form/{Id}", "GET")]
    [AutoApply(Behavior.AuditQuery)]
    public class QueryForms : QueryDb<Form>
    {
        public int? Id { get; set; }
    }

    [Tag("Form"), Description("Create a new Form")]
    [Route("/form", "POST")]
    [AutoApply(Behavior.AuditCreate)]
    public class CreateForm : ICreateDb<Form>, IReturn<IdResponse>
    {
        [Description("Name this Form is for"), ValidateNotEmpty]
        public string Name { get; set; }
        public int Index { get; set; }
    }

    [Tag("Form"), Description("Update an existing Form")]
    [Route("/form/{Id}", "PATCH")]
    [AutoApply(Behavior.AuditModify)]
    public class UpdateForm : IPatchDb<Form>, IReturn<IdResponse>
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public int? Index { get; set; }

    }

    [Tag("Form"), Description("Delete a Form")]
    [Route("/Form/{Id}", "DELETE")]
    [AutoApply(Behavior.AuditSoftDelete)]
    public class DeleteForm : IDeleteDb<Form>, IReturnVoid
    {
        public Guid Id { get; set; }
    }

}
