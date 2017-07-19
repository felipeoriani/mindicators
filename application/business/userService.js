module.exports = class UserService {
    constructor({userRepository}) {
        this.userRepository = userRepository
    }
    
    get() {
        return this.userRepository.get()
    }

}