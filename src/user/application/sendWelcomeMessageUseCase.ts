import { UserInterface } from '../domain/interfaces/userInterface';

// Caso de uso
export class SendWelcomeMessageUseCase {
	constructor(private readonly userRepository: UserInterface) {}

	async sendEmail(email: string) {
		await this.userRepository.sendEmail(email);
	}
}
