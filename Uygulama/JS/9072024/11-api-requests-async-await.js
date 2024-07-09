// Aşağıda tarifinden anlayacağınız istekleri https://jsonplaceholder.typicode.com/ URL'ine atın. her bir isteği 1 kere then, 1 kere de async/await yöntemi ile atın. isteklerinizi fonksiyon içerisinde tanımlayın.
//getCommentById, getAllComments, postComment, deleteComment, updateCommentPatch, updateCommentPut

//getCommentById
//Then
const getCommentByIdThen = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };
  getCommentByIdThen(1);
//Async
const getCommentByIdAsync = async (id) => {
    try {
      const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
  
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  getCommentByIdAsync(1);
  

//getAllComments
//Then
const getAllCommentsThen = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };
  getAllCommentsThen();
//Async
  const getAllCommentsAsync = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  getAllCommentsAsync();
  
//postComment
//Then
  const postCommentThen = (comment) => {
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };
  const newComment = {
    postId: 1,
    name: 'Eysan Tekinsoy',
    email: 'eysantekinsoy@eysan.com',
    body: 'Bu yeni bir yorumdur.',
  };
  postCommentThen(newComment);
//Async  
  const postCommentAsync = async (comment) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const newComment = {
    postId: 1,
    name: 'Eysan Tekinsoy',
    email: 'eysantekinsoy@eysan.com',
    body: 'Bu bir yorumdur.',
  };
  postCommentAsync(newComment);
  
//deleteComment
//Then
const deleteCommentThen = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Hata');
        }
        console.log('Yorum başarıyla silindi.');
      })
      .catch(error => console.error('Error:', error));
  };
  deleteCommentThen(1);
//Async
  const deleteCommentAsync = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Hata');
      }
      console.log('Yorum başarıyla silindi.');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  deleteCommentAsync(1);
  

//updateCommentPatch
//Then
  const updateCommentPatchThen = (id, updatedComment) => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedComment),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => console.log('Updated comment:', data))
      .catch(error => console.error('Error:', error));
  };
  
  const updatedComment = {
    body: 'Güncellenen yorum',
  };
  
  updateCommentPatchThen(1, updatedComment);
//Async
  const updateCommentPatchAsync = async (id, updatedComment) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedComment),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      console.log('Güncellenen yorum:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const updatedComment = {
    body: 'Güncellenen yorum',
  };
  
  updateCommentPatchAsync(1, updatedComment);

//updateCommentPut
//Then
  const updateCommentPutThen = (id, updatedComment) => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedComment),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => console.log('Updated comment:', data))
      .catch(error => console.error('Error:', error));
  };
  
  const updatedComment = {
    id: 1,
    postId: 1,
    name: 'Eysan Tekinsoy',
    email: 'eysantekinsoy@eysan.com',
    body: 'Güncellenmiş yorum',
  };
  
  updateCommentPutThen(1, updatedComment);
//Async
  const updateCommentPutAsync = async (id, updatedComment) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedComment),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      console.log('Updated comment:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const updatedComment = {
    id: 1,
    postId: 1,
    name: 'Eysan Tekinsoy',
    email: 'eysantekinsoy@eysan.com',
    body: 'Güncellenmiş yorum',
  };
  
  updateCommentPutAsync(1, updatedComment);
  
  