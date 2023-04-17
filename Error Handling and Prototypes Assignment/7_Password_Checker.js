// Password Checker...
class User {
	constructor(Uname, pass) {
		this.username = Uname;
		this.password = pass;
	}

	get getPassword() {
		return "*".repeat(this.password.length);
	}

	setPassword(newPass) {
		if (
			newPass.length < 8 ||
			!/\d/.test(newPass) ||
			!/[A-Z]/.test(newPass)
		) {
			console.log(
				"Password must be at least 8 characters long and contain at least one number and one uppercase letter."
			);
			return;
		}
		return (this.password = newPass);
	}

	myCreditinal() {
		console.log(this);
	}
}

const Rahul = new User("Rahul Sharma", "Password123");
console.log(Rahul.getPassword); // Output: ********

Rahul.setPassword("Rahul@2001");
console.log(Rahul.getPassword); // Output: ********

Rahul.myCreditinal(); // User { username: 'Rahul Sharma', password: 'Rahul@2001' }
