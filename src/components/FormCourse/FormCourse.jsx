import React, { Component } from 'react'

export default class FormCourse extends Component {
    state = {
        isEdit: false
    }

    renderCourse = () => {
        return (
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={this.toggleCourse} >Edit Course</button>
                <button onClick={() => { this.props.deleteCourse(this.props.index) }}>Delete Course</button>
            </li>
        )
    }

    toggleCourse = () => {
        let { isEdit } = this.state
        this.setState({
            isEdit: !isEdit
        })
    }
    updateCourseItem = (e) => {
        e.preventDefault()
        this.props.editCourse(this.props.index, this.input.value)
        this.toggleCourse()
    }

    UpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) => { this.input = v }} defaultValue={this.props.details.name} />
                <button >Update Course</button>
            </form>
        )

    }

    render() {
        let { isEdit } = this.state
        return (
            <div>
                {isEdit ? this.UpdateForm() : this.renderCourse()}

            </div>
        )
    }
}

