import React, { Component } from 'react';

import './App.css';



const Note = (note) => {
    return (
        <div className="noteContainer">
            <button type="button" className="deleteIcon" onClick={note.handleDelete}
            ><i className="fas fa-delete"></i>Delete</button>
            <h3>{note.noteTitle}</h3>
            <p>{note.noteContent}</p>
        </div>
    )
}

class actionHandler extends React.Component {
    state = {}
    render() {
        return (
            <div>
                Hello
      </div>
        )
    }
}

const Notes = (props) => {

    return (
        <div>
            <h2>Notes</h2>

            {props.notes.map(note => <Note key={note.id}   {...note} />)}
        </div>
    )
}

class Form extends React.Component {
    state = { noteTitle: '', noteContent: '' }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({ noteTitle: '', noteContent: '' })
    }
    render() {
        return (
            <form className="formContainer" onSubmit={this.handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={this.state.noteTitle} onChange={(event) => this.setState({ noteTitle: event.target.value })} type="text" placeholder="Title" required />
                </div>
                <div>
                    <label>Note</label>
                    <textarea rows="6" cols="50" value={this.state.noteContent} onChange={(event) => this.setState({ noteContent: event.target.value })} ></textarea>
                </div>
                <div className="buttonContainer">
                    <button type="submit">Add Note</button>
                </div>
            </form>
        )
    }
}

class App extends React.Component {
    state = {
        notes: [
            {
                id: "1",
                noteTitle: "Note 1",
                noteContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            },
            {
                id: "2",
                noteTitle: "Note 2",
                noteContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            },
            {
                id: "3",
                noteTitle: "Note 3",
                noteContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            },
        ]
    }
    handleDelete = () => {
        console.log('Delete Note')
    }
    addNewNote = (noteInfo) => {
        console.log('noteInfo', noteInfo);
        this.setState(prevState => ({
            notes: prevState.notes.concat(noteInfo)

        }))
    }

    deleteNote = (noteInfo) => {
        this.setState(prevState => ({
            notes: prevState.notes.concat(noteInfo)

        }))
    }



    render() {
        return (
            <div>
                <Form onSubmit={this.addNewNote} />
                <Notes notes={this.state.notes}
                    deleteNote={this.props.handleDelete}
                />
            </div>
        )

    }

}






export default App;
