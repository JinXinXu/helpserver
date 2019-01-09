const db = require('./../db/mysqlHelper.js')

const roles = {
    async add(args) {
        let sql = 'INSERT INTO wxuser (openid) value(?)'
        let params = [args.openid]
        let result = await db.query(sql, params)
        return result

    },
    async addInfo(args) {
        let sql = 'INSERT INTO userinfo (wx_id,name,card_num,cert,cert_f,form_id,stu_card) value(?,?,?,?,?,?,?)'
        let params = [args.wx_id, args.name, args.card_num, args.cert, args.cert_f, args.form_id, args.stu_card]
        let result = await db.query(sql, params)
        return result
    },
    async updateInfo(args) {
        let sql = 'update userinfo set name=?,card_num=?,cert=?,cert_f=?,form_id=?,stu_card=? where id = ?'
        let params = [args.name, args.card_num, args.cert, args.cert_f, args.form_id, args.stu_card, args.id]
        let result = await db.query(sql, params)
        return result
    },
    async updateInfoState(args) {
        let sql = 'update userinfo set state = ? where id= ? '
        let result = await db.query(sql, [args.state, args.id])
        return result
    },
    async getInfoByWxId(id) {
        let sql = 'select * from userinfo where wx_id= ' + id
        let result = await db.query(sql, [])
        return result
    },
    async getInfos() {
        let result = await db.commonSelect(args)
        return result
    },
    async update(args) {
        let sql = 'UPDATE wxuser set nick_name=?,avatar_url=?,gender=? ,province=?,city=?,phone=?,dphone=? where id = ?'
        let params = [args.nickName, args.avatarUrl, args.gender, args.province, args.city, args.phone, args.dphone, args.id]
        let result = await db.query(sql, params)
        return result
    },
    async updateDel(ids) {
        let sql = 'UPDATE wxuser set is_delete=1 where pk_id in (' + ids + ')'
        let result = await db.query(sql, [])
        return result
    },

    async getByOpenid(openid) {
        let sql = 'select * from wxuser where openid=?'
        let result = await db.query(sql, [openid])
        return result
    },
    async getById(id) {
        let sql = 'select * from wxuser where id=?'
        let result = await db.query(sql, [id])
        return result
    },
    async getList(args) {
        let result = await db.commonSelect(args)
        return result
    },

}

module.exports = roles