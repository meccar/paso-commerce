import { MessagesRepository } from './messages.repository';
export class MessagesService {
  messagesRepository: MessagesRepository;
  constructor() {
    this.messagesRepository = new MessagesRepository();
  }
}
