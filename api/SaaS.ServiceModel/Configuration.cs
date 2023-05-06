using ServiceStack.DataAnnotations;
using ServiceStack.Model;
using ServiceStack;
using System;

namespace SaaS.ServiceModel
{
    public class Configuration : AuditBase, IHasId<Guid>
    {
        [AutoId]
        public Guid Id { get; set; }
        public string Description { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }

    }


    [Tag("Configuration"), Description("Find Configuration")]
    [Route("/Configuration", "GET")]
    [Route("/Configuration/{Id}", "GET")]
    [AutoApply(Behavior.AuditQuery)]
    public class QueryConfigurations : QueryDb<Configuration>
    {
        public string? Description { get; set; }
        public string? Key { get; set; }
        public string? Value { get; set; }
    }

    [Tag("Configuration"), Description("Create a new Configuration")]
    [Route("/Configuration", "POST")]
    [AutoApply(Behavior.AuditCreate)]
    public class CreateConfiguration : ICreateDb<Configuration>, IReturn<IdResponse>
    {
        public string Description { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
    }

    [Tag("Configuration"), Description("Update an existing Configuration")]
    [Route("/Configuration/{Id}", "PATCH")]
    [AutoApply(Behavior.AuditModify)]
    public class UpdateConfiguration : IPatchDb<Configuration>, IReturn<IdResponse>
    {
        public Guid Id { get; set; }
        public string? Description { get; set; }
        public string? Key { get; set; }
        public string? Value { get; set; }

    }

    [Tag("Configuration"), Description("Delete a Configuration")]
    [Route("/Configuration/{Id}", "DELETE")]
    [AutoApply(Behavior.AuditSoftDelete)]
    public class DeleteConfiguration : IDeleteDb<Configuration>, IReturnVoid
    {
        public Guid Id { get; set; }
    }
}
