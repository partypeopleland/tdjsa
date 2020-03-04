var sandbox;

beforeEach(() => {
    sandbox = sinon.createSandbox()
    window.onbeforeunload = () => 'Oh no!';
});

afterEach(() => {
	sandbox.restore();
});