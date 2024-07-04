This file belons to karthick
it contains 
    -> index.html file in public folder
    -> index.js & App.js files are main js
    -> Card.js, Cards.js & Header.js are components 

Edit & Delete Button:
    => when there is edit in todo we can use edit button. when we click on edit button it opens as prompt for editing task name and task description separately. when the entries are empty or cancelled the operation it doesn't take null values or empty values.
    
    => when there is a requrement to delete the todo, Delete button can be used. when we click on delete button it open a prompt for confirmation of deleting the todo task. if okay is clicked then the delete operation us performed . if cancel is clicked then delete operation is not performed.

Status filter dropdown:
    => when there is selection on dropdown then the todos are filtered based on the selection.

!important:
    Here in this task there is a drawback , that is when the new todo is added or todo is edited or todo is deleted it will refresh the wholepage within the todo display. so it will display the Header content for some time and display the todo tasks. and another thing when the todo is changed to completed it doesn't update the value to mock api

