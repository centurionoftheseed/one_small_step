using ONE_SMALL_STEP.Core.Repositories;
using ONE_SMALL_STEP.Persistence.Repositories;
using ONE_SMALL_STEP.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ONE_SMALL_STEP.Core
{
    public interface IUnitOfWork: IDisposable
    {
        IMessageRepository Message { get; }
        IPersonRepository Person { get; }  
        IPersonTypeRepository PersonType { get; }
        IMessageTypeRepository MessageType { get; }
        ISourceTypeRepository SourceType { get; }
        ISourceRepository Source { get; }

        PersonViewModel personViewModel { get; }
        PersonTypeViewModel personTypeViewModel { get; }
     
        MessageTypeViewModel messageTypeViewModel { get; }

        MessageViewModel messageViewModel { get;}

        SourceTypeViewModel sourceTypeViewModel { get; }
        SourceViewModel sourceViewModel { get; }

        int Complete();
       
    }
}
