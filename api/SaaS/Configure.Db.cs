using SaaS.ServiceModel;
using SaaS.ServiceModel.FieldTypeData;
using SaaS.ServiceModel.Form;
using SaaS.ServiceModel.Form.Template;
using ServiceStack.Data;
using ServiceStack.OrmLite;

[assembly: HostingStartup(typeof(SaaS.ConfigureDb))]

namespace SaaS;

// Database can be created with "dotnet run --AppTasks=migrate"   
public class ConfigureDb : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context,services) => services.AddSingleton<IDbConnectionFactory>(new OrmLiteConnectionFactory(
            context.Configuration.GetConnectionString("DefaultConnection") ?? "App_Data/db.sqlite",
            SqliteDialect.Provider)))
        // Create non-existing Table and add Seed Data Example
        .ConfigureAppHost(appHost => {
            using var db = appHost.Resolve<IDbConnectionFactory>().Open();
            db.CreateTableIfNotExists<Form>();
            db.CreateTableIfNotExists<FieldTypeData>();
            db.CreateTableIfNotExists<Field>();
            db.CreateTableIfNotExists<FormTemplate>();
            db.CreateTableIfNotExists<FormFieldTemplate>();
            // if (db.CreateTableIfNotExists<FormGroup>())
            // {
            //     // Seed data
            //     db.Insert(new FormGroup
            //     {
            //         Name = "Init Form 1",
            //         Index = 1
            //     });
            // }
        });
}