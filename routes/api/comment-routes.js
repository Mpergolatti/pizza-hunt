const router = require('express').Router();
const { 
  addComment, 
  removeComment, 
  addReply, 
  removeReply
 } = require('../../controllers/comment-controller');

// /api / comments / <pizzaId>
router
  .route('/:pizzaId')
  .post(addComment);

// /api / comments / <commentId>
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

// /api / comments / <replyId>
router
  .route('/:pizzaId/:commentId/:replyId')
  .delete(removeReply);

module.exports = router;