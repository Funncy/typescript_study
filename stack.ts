{
	class Stack {
		constructor(public val: string, public prev: Stack | undefined) {}

		pop(): string {
			return this.val;
		}

		push(val: string): Stack {
			let nextStack = new Stack(val, this);
			return nextStack;
		}
	}
	class StackHead {
		head: Stack | undefined;
		size: number;
		constructor() {
			this.head = undefined;
			this.size = 0;
		}

		pop(): string | undefined {
			if (this.head) {
				let val = this.head.pop();
				if (this.head.prev) {
					this.head = this.head.prev;
				} else {
					this.head = undefined;
				}
				return val;
			}
			return undefined;
		}

		push(val: string) {
			if (this.head) {
				this.head = this.head.push(val);
				return;
			}
			this.head = new Stack(val, undefined);
		}
	}

	let head: StackHead = new StackHead();
	head.push('test');
	head.push('test2');
	console.log(head.pop());
	head.push('test3');
	head.push('test4');
	console.log(head.pop());
	head.push('test3');
	head.push('test3');
	console.log(head.pop());
	console.log(head.pop());
	console.log(head.pop());
	console.log(head.pop());
	console.log(head.pop());
	console.log(head.pop());
	head.push('test3');
	console.log(head.pop());
}
