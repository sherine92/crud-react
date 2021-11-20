import React, { Component } from 'react'

export default class AddCourse extends Component {

    render() {
        return (
            <form>
                <input type="text" className='Addform' value={this.props.current} onChange={this.props.writeCourse} />
                <button type='submit' onClick={this.props.addCourse}>Add course</button>
            </form>
        )

    }
}
