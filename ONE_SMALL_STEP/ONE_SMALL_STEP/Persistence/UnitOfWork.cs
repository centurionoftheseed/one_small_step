using ONE_SMALL_STEP.Core;
using ONE_SMALL_STEP.Core.Domain;
using ONE_SMALL_STEP.Core.Repositories;
using ONE_SMALL_STEP.Persistence.Repositories;
using ONE_SMALL_STEP.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ONE_SMALL_STEP.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly OneSmallStepContext _context;

        public UnitOfWork(OneSmallStepContext context)
        {
            _context = context;
            
            Person = new PersonRespository(_context);
            PersonType = new PersonTypeRespository(_context);
            MessageType = new MessageTypeRepository(_context);

            Message = new MessageRepository(_context);
            SourceType = new SourceTypeRepository(_context);

            //Authors = new AuthorRepository(_context);

        }
   
        public IPersonRepository Person { get; private set; }
        public IPersonTypeRepository PersonType { get; private set; }

        public IMessageTypeRepository MessageType { get; private set; }

        public IMessageRepository Message { get; private set; }

        public ISourceTypeRepository SourceType { get; private set; }

        public PersonViewModel personViewModel => throw new NotImplementedException();

        public PersonTypeViewModel personTypeViewModel => throw new NotImplementedException();

        //public IMessageTypeRepository MessageType => throw new NotImplementedException();

        public MessageTypeViewModel messageTypeViewModel => throw new NotImplementedException();

        public MessageViewModel messageViewModel => throw new NotImplementedException();

        public SourceTypeViewModel sourceTypeViewModel => throw new NotImplementedException();

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}