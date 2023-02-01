/**
 * @file wanted-pre-onboarding-challenge-fe-2
 * @author PARKJIYEONG <jiyeongstar@gmail.com>
 */
/**
 * @typedef {Object} Tag
 * @property {number} id
 * @property {string} tagName
 */
/**
 * 할일
 * @typedef {Object}Todo
 * @property {string} id - 아이디, required
 * @property {string} content - 내용, required
 * @property {boolean} complete - 완료여부, required
 * @property {string} category - 카테고리, required
 * @property {Tag[]=} tags - 태그들, optional
 */

/**
 * Create : 할 일을 추가, 내용 없이 추가 불가능
 * @param {string} content - 할 일 내용, required
 * @param {string=} category - 카테고리, optional
 * @param {Tag=} tag - 태그, optional
 */
function createTodo(content, category, tag) {}

/**
 * Read : 모든 할 일 조회
 * @returns {Todo[]} todos
 */

function getAll() {}

/**
 * Read By Id: id기반으로 특정 조회
 * @param {number} id
 * @returns {Object} todo item
 */
function getById(id) {}

/**
 * A UpdateTodo 데이터타입
 * @typedef {Object} UpdateTodo - UpdateTodo type
 * @property {string} id - reqired
 * @property {string=} content -  optional
 * @property {boolean=} complete -  optional
 * @property {string=} category -  optional
 * @property {[number,string]} tag -  optional
 */
/**
 * Update : id를 제외한 모든 속성 수정
 * @param {UpdateTodo} props - id:required , content,complete,category,tag:optional
 * @returns {Todo} todo - 수정한 todo
 */
function updateTodo({ id, content, complete, category, tag }) {}

/**
 * UpdateTag : 특정 할 일의 특정 태그 수정
 * @param {number} Todoid
 * @param {number} Tagid
 * @param {Tag} tag
 * @return {Todo} todo - 수정한 todo
 */
function updateTag(todoId, tagId, [number, string]) {}

/**
 * Delete By Id: id를 기반으로 특정 할 일을 삭제
 * @param {number} todoId
 * @return {Todo[]} todos - 남은 할 일
 */
function deleteById(id) {}

/**
 * Delete All : 모든 할 일 제거
 * @return {[]} 빈 배열 - 빈 배열
 */
function deleteAll() {}

/**
 * Delete : 특정 할 일의 특정 태그 삭제
 * @param {number} todoId
 * @param {number} tagId
 * @return {Todo} todo - 특정 할 일
 */
function deleteTodoTag(todoId, tagId) {}
/**
 * Delete :특정 할 일의 모든 태그 제거
 * @param {number} todoId
 * @return {Todo} todo - 특정 할 일
 */
function deleteTodoAllTag(todoId) {}
