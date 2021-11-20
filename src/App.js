import React, { Component } from 'react'
import AddCourse from './components/AddCourse/AddCourse'
import FormCourse from './components/FormCourse/FormCourse'

export default class App extends Component {
  state={
    courses:[
      {name:'HTML'},
      {name:'CSS'},
      {name:'JavaScript'},
      {name:'REACT'}
    ],
    current:''
  }

  // writeCourse
  writeCourse=(e)=>{
   
        this.setState({
        current:e.target.value
      });
    
   
  }

  // addCourse
  addCourse=(e)=>{
     e.preventDefault()
     let current=this.state.current;
     let courses=this.state.courses;
     if(current){
      courses.push({name:current})
      this.setState({
        courses:courses,
        current:''
       })
     }else{
      return(
        <div>
         <h4>You should add course</h4>
        </div>
           )
     }
    
    
    
     
  }
  deleteCourse=(index)=>{
    console.log(index);
   let courses=this.state.courses
   courses.splice(index,1)
   this.setState({courses:courses})
  }
  editCourse=(index,value)=>{
    let courses=this.state.courses
    let course=courses[index]
    course['name']=value
    this.setState({
      courses:courses
    })
  }

  render() {
    let {courses} = this.state
    let courseList = courses.map((course,index)=> {
        return  <FormCourse details={course} key={index} index={index}  deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
         
        
    })
    return (
      <div className='App'>
         <h2>Add Course</h2>
         <AddCourse current={this.state.current} writeCourse={this.writeCourse} addCourse={this.addCourse}/>
       <ul>{courseList }</ul>
      </div>
    )
  }
}

