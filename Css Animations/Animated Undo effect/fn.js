window.addEventListener("DOMContentLoaded", () => {
	const ur = new UndoRedo(".undo-redo");
});

class UndoRedo {
	actionIndex = 4;
	actions = 9;

	constructor(el) {
		this.el = document.querySelector(el);

		this.init();
	}
	init() {
		this.el?.addEventListener("click", this.buttonAction.bind(this));
		this.updateDisplay();
	}
	buttonAction(e) {
		const actionName = e.target.getAttribute("data-action");

		if (actionName === "undo" && this.actionIndex > 0) {
			// undo
			--this.actionIndex;
		} else if (actionName === "redo" && this.actionIndex < this.actions - 1) {
			// redo
			++this.actionIndex;
		}

		this.updateDisplay();
	}
	updateDisplay() {
		// disable undo if on the first action
		const undoButton = this.el?.querySelector("[data-action='undo']");
		undoButton.disabled = this.actionIndex === 0;
		// disable redo if on the last action
		const redoButton = this.el?.querySelector("[data-action='redo']");
		redoButton.disabled = this.actionIndex === this.actions - 1;
	}
}
