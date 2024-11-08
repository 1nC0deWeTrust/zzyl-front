import request from '@/utils/request'

// 查询护理计划列表
export function listBizNursingPlan(query) {
  return request({
    url: '/nursingModule/bizNursingPlan/list',
    method: 'get',
    params: query
  })
}

// 查询护理计划详细
export function getBizNursingPlan(id) {
  return request({
    url: '/nursingModule/bizNursingPlan/' + id,
    method: 'get'
  })
}

// 新增护理计划
export function addBizNursingPlan(data) {
  return request({
    url: '/nursingModule/bizNursingPlan',
    method: 'post',
    data: data
  })
}

// 修改护理计划
export function updateBizNursingPlan(data) {
  return request({
    url: '/nursingModule/bizNursingPlan',
    method: 'put',
    data: data
  })
}

// 删除护理计划
export function delBizNursingPlan(id) {
  return request({
    url: '/nursingModule/bizNursingPlan/' + id,
    method: 'delete'
  })
}
