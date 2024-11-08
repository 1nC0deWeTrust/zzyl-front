import request from '@/utils/request'

// 查询护理项目列表
export function listBizNursingProj(query) {
  return request({
    url: '/nursingModule/bizNursingProj/list',
    method: 'get',
    params: query
  })
}

// 查询护理项目详细
export function getBizNursingProj(id) {
  return request({
    url: '/nursingModule/bizNursingProj/' + id,
    method: 'get'
  })
}

// 新增护理项目
export function addBizNursingProj(data) {
  return request({
    url: '/nursingModule/bizNursingProj',
    method: 'post',
    data: data
  })
}

// 修改护理项目
export function updateBizNursingProj(data) {
  return request({
    url: '/nursingModule/bizNursingProj',
    method: 'put',
    data: data
  })
}

// 删除护理项目
export function delBizNursingProj(id) {
  return request({
    url: '/nursingModule/bizNursingProj/' + id,
    method: 'delete'
  })
}
