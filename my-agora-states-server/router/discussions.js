// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, createDiscussion, deleteDiscussion } =
  discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById);

// Add discussion
router.post('/', createDiscussion);

// Delete Discussion
router.delete('/:id', deleteDiscussion);

module.exports = router;
