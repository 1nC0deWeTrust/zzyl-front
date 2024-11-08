import request from '@/utils/request'

// 查询护理等级列表
export function listBizNursingLevel(query) {
  return request({
    url: '/nursingModule/bizNursingLevel/list',
    method: 'get',
    params: query
  })
}

// 查询护理等级详细
export function getBizNursingLevel(id) {
  return request({
    url: '/nursingModule/bizNursingLevel/' + id,
    method: 'get'
  })
}

// 新增护理等级
export function addBizNursingLevel(data) {
  return request({
    url: '/nursingModule/bizNursingLevel',
    method: 'post',
    data: data
  })
}

// 修改护理等级
export function updateBizNursingLevel(data) {
  return request({
    url: '/nursingModule/bizNursingLevel',
    method: 'put',
    data: data
  })
}

// 删除护理等级
export function delBizNursingLevel(id) {
  return request({
    url: '/nursingModule/bizNursingLevel/' + id,
    method: 'delete'
  })
}
