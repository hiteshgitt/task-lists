import React, { useState, useEffect } from 'react';

// Styles defined as JavaScript objects for inline styling
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  modalHeader: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '8px',
    marginTop: '20px'
  },
  modalButton: {
    padding: '8px 16px',
    borderRadius: '8px',
    font: '14px',
    cursor: 'pointer',
    border: 'none'
  },
  cancelModalButton: {
    backgroundColor: '#f3f4f6',
    color: '#374151'
  },
  confirmModalButton: {
    backgroundColor: '#3b82f6',
    color: 'white'
  },
  todoCard: {
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  cardContent: {
    padding: '24px'
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '24px'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '24px'
  },
  inputGroup: {
    display: 'flex',
    gap: '8px'
  },
  input: {
    flexGrow: 1,
    padding: '8px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none'
  },
  inputFocus: {
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.3)'
  },
  inputError: {
    borderColor: '#ef4444',
    boxShadow: '0 0 0 2px rgba(239, 68, 68, 0.3)'
  },
  addButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  dateInput: {
    padding: '4px 8px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#4b5563'
  },
  errorMessage: {
    color: '#ef4444',
    fontSize: '12px',
    marginTop: '4px'
  },
  tabsContainer: {
    display: 'flex',
    borderBottom: '1px solid #e5e7eb',
    marginBottom: '16px'
  },
  tab: {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#6b7280',
    cursor: 'pointer',
    borderBottom: '2px solid transparent'
  },
  activeTab: {
    color: '#3b82f6',
    borderBottomColor: '#3b82f6'
  },
  summary: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: '#6b7280',
    marginBottom: '8px'
  },
  clearButton: {
    background: 'none',
    border: 'none',
    fontSize: '12px',
    color: '#6b7280',
    cursor: 'pointer',
    padding: '0'
  },
  todoList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  emptyMessage: {
    textAlign: 'center',
    padding: '16px',
    color: '#6b7280'
  },
  todoItem: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white',
    transition: 'background-color 0.2s'
  },
  todoItemCompleted: {
    backgroundColor: '#f9fafb',
    borderColor: '#e5e7eb'
  },
  todoContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  todoText: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexGrow: 1
  },
  checkbox: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '1px solid #d1d5db',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexShrink: 0
  },
  checkboxCompleted: {
    backgroundColor: '#10b981',
    borderColor: '#10b981',
    color: 'white'
  },
  todoTextCompleted: {
    textDecoration: 'line-through',
    color: '#6b7280'
  },
  todoActions: {
    display: 'flex',
    gap: '4px'
  },
  actionButton: {
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    padding: '4px',
    cursor: 'pointer',
    borderRadius: '4px'
  },
  editButton: {
    hover: {
      color: '#3b82f6'
    }
  },
  deleteButton: {
    hover: {
      color: '#ef4444'
    }
  },
  editForm: {
    display: 'flex',
    gap: '8px'
  },
  saveButton: {
    color: '#10b981',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px'
  },
  cancelButton: {
    color: '#ef4444',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px'
  },
  dueDate: {
    marginTop: '8px',
    fontSize: '12px',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  }
};

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function EditIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    // Load todos from localStorage on initial render
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [completingTodoId, setCompletingTodoId] = useState(null);
  const [timeRequired, setTimeRequired] = useState('');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const validateForm = () => {
    if (input.trim() === '') {
      return false;
    }
    
    if (dueDate === '') {
      setDateError(true);
      setErrorMessage('Please select a due date for the task');
      return false;
    }
    
    // Check if selected date is in the past
    const selectedDate = new Date(dueDate);
    selectedDate.setHours(0, 0, 0, 0); // Reset time part to compare dates only
    
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time part to compare dates only
    
    if (selectedDate < today) {
      setDateError(true);
      setErrorMessage('Due date cannot be in the past');
      return false;
    }
    
    return true;
  };

  const addTodo = () => {
    // Reset previous error state
    setDateError(false);
    setErrorMessage('');
    
    // Validate the form
    if (!validateForm()) return;
    
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      dueDate: dueDate,
      createdAt: new Date().toISOString()
    };
    
    setTodos([...todos, newTodo]);
    setInput('');
    setDueDate('');
  };

  const toggleTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    
    if (todo && !todo.completed) {
      // If task is being marked as complete, show the modal
      setCompletingTodoId(id);
      setShowCompletionModal(true);
      setTimeRequired('');
    } else {
      // If task is being marked as incomplete, just toggle
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed, timeRequired: null } : todo
        )
      );
    }
  };
  
  const completeTask = () => {
    if (timeRequired.trim() === '') {
      // If no time is provided, use "Not specified"
      setTimeRequired('Not specified');
    }
    
    setTodos(
      todos.map(todo =>
        todo.id === completingTodoId 
          ? { 
              ...todo, 
              completed: true, 
              timeRequired: timeRequired,
              completedAt: new Date().toISOString()
            } 
          : todo
      )
    );
    
    // Close the modal
    setShowCompletionModal(false);
    setCompletingTodoId(null);
  };
  
  const cancelCompletion = () => {
    setShowCompletionModal(false);
    setCompletingTodoId(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (editText.trim() === '') return;
    
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all' filter
  });

  // Get counts for summary
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  return (
    <div style={styles.container}>
      <div style={styles.todoCard}>
        <div style={styles.cardContent}>
          <h1 style={styles.heading}>Task Manager</h1>
          
          {/* Add Todo Form */}
          <div style={styles.formContainer}>
            <div style={styles.inputGroup}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task..."
                style={{
                  ...styles.input,
                  ...(inputFocus ? styles.inputFocus : {})
                }}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              />
              <button
                onClick={addTodo}
                style={styles.addButton}
              >
                <PlusIcon />
              </button>
            </div>
            
            <div style={styles.dateGroup}>
              <CalendarIcon />
              <input
                type="date"
                value={dueDate}
                min={new Date().toISOString().split('T')[0]} // Set minimum date to today
                onChange={(e) => {
                  setDueDate(e.target.value);
                  setDateError(false);
                  setErrorMessage('');
                }}
                style={{
                  ...styles.dateInput,
                  ...(dateError ? styles.inputError : {})
                }}
              />
            </div>
            
            {/* Error message for date validation */}
            {dateError && (
              <div style={styles.errorMessage}>
                {errorMessage}
              </div>
            )}
          </div>
          
          {/* Filter Tabs */}
          <div style={styles.tabsContainer}>
            <button
              onClick={() => setFilter('all')}
              style={{
                ...styles.tab,
                ...(filter === 'all' ? styles.activeTab : {})
              }}
            >
              All
            </button>
            <button
              onClick={() => setFilter('active')}
              style={{
                ...styles.tab,
                ...(filter === 'active' ? styles.activeTab : {})
              }}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('completed')}
              style={{
                ...styles.tab,
                ...(filter === 'completed' ? styles.activeTab : {})
              }}
            >
              Completed
            </button>
          </div>
          
          {/* Summary */}
          <div style={styles.summary}>
            <span>{activeCount} active, {completedCount} completed</span>
            {completedCount > 0 && (
              <button 
                onClick={clearCompleted}
                style={styles.clearButton}
              >
                Clear completed
              </button>
            )}
          </div>
          
          {/* Todo List */}
          <ul style={styles.todoList}>
            {filteredTodos.length === 0 ? (
              <li style={styles.emptyMessage}>No tasks to display</li>
            ) : (
              filteredTodos.map(todo => (
                <li 
                  key={todo.id} 
                  style={{
                    ...styles.todoItem,
                    ...(todo.completed ? styles.todoItemCompleted : {})
                  }}
                >
                  {editingId === todo.id ? (
                    <div style={styles.editForm}>
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        style={{...styles.input, flexGrow: 1}}
                        onKeyPress={(e) => e.key === 'Enter' && saveEdit(todo.id)}
                        autoFocus
                      />
                      <button 
                        onClick={() => saveEdit(todo.id)}
                        style={styles.saveButton}
                      >
                        <CheckIcon />
                      </button>
                      <button 
                        onClick={cancelEdit}
                        style={styles.cancelButton}
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <div style={styles.todoContent}>
                      <div style={styles.todoText}>
                        <div
                          onClick={() => toggleTodo(todo.id)}
                          style={{
                            ...styles.checkbox,
                            ...(todo.completed ? styles.checkboxCompleted : {})
                          }}
                        >
                          {todo.completed && <CheckIcon />}
                        </div>
                        <span style={todo.completed ? styles.todoTextCompleted : {}}>
                          {todo.text}
                        </span>
                      </div>
                      <div style={styles.todoActions}>
                        <button
                          onClick={() => startEditing(todo.id, todo.text)}
                          style={styles.actionButton}
                        >
                          <EditIcon />
                        </button>
                        <button
                          onClick={() => deleteTodo(todo.id)}
                          style={styles.actionButton}
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Due date and time required display */}
                  <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                    {todo.dueDate && (
                      <div style={styles.dueDate}>
                        <CalendarIcon />
                        <span>Due: {new Date(todo.dueDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    {todo.completed && todo.timeRequired && (
                      <div style={styles.dueDate}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Time to complete: {todo.timeRequired}</span>
                      </div>
                    )}
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* Time Required Modal */}
      {showCompletionModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              Task Completed
            </div>
            <p>How much time did it take to complete this task?</p>
            <input
              type="text"
              value={timeRequired}
              onChange={(e) => setTimeRequired(e.target.value)}
              placeholder="e.g., 2 hours, 30 minutes"
              style={styles.input}
              autoFocus
            />
            <div style={styles.modalButtons}>
              <button 
                onClick={cancelCompletion}
                style={{...styles.modalButton, ...styles.cancelModalButton}}
              >
                Cancel
              </button>
              <button 
                onClick={completeTask}
                style={{...styles.modalButton, ...styles.confirmModalButton}}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoApp;