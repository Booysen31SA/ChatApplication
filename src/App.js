import { ChatEngine } from 'react-chat-engine';

import './App.css';

const projectID = "68eab922-9775-4d26-867e-49ef556cac46";

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = { projectID } 
            userName = ""
            userSecrect = ""
        />
    );
}

export default App;