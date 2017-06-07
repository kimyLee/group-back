/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50712
Source Host           : localhost:3306
Source Database       : koa_demo

Target Server Type    : MYSQL
Target Server Version : 50712
File Encoding         : 65001

Date: 2017-06-08 00:13:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for flow
-- ----------------------------
DROP TABLE IF EXISTS `flow`;
CREATE TABLE `flow` (
  `stepname` varchar(255) DEFAULT NULL,
  `step` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of flow
-- ----------------------------
INSERT INTO `flow` VALUES ('待规划', '0');
INSERT INTO `flow` VALUES ('开发中', '1');
INSERT INTO `flow` VALUES ('待测试', '2');
INSERT INTO `flow` VALUES ('已完成', '3');

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `id` int(2) NOT NULL AUTO_INCREMENT COMMENT '任务id',
  `step` int(2) DEFAULT NULL COMMENT '流程id',
  `title` varchar(255) DEFAULT NULL COMMENT '任务名',
  `priority` int(1) DEFAULT NULL COMMENT '优先级 0 不紧急 1 普通 2紧急 3 非常紧急',
  `createtime` varchar(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL COMMENT '备注',
  `creator` varchar(255) DEFAULT NULL COMMENT '创建人',
  `deadline` date DEFAULT NULL,
  `member` varchar(255) DEFAULT NULL COMMENT '任务成员',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task
-- ----------------------------
INSERT INTO `task` VALUES ('1', '0', '第一个项目', null, '1496846546337', '', null, null, null);
INSERT INTO `task` VALUES ('2', '0', '第2个项目', null, null, '', null, null, null);
INSERT INTO `task` VALUES ('3', '1', '3个测试你', null, null, null, null, null, 'kath,kimmy');
INSERT INTO `task` VALUES ('4', '2', '4个测试', null, null, null, null, null, '许泽珊啦啦啦');
INSERT INTO `task` VALUES ('5', '0', 'fghjkhgh', null, '1496844786748', '', null, null, null);
INSERT INTO `task` VALUES ('6', '0', '45453', null, '1496845895277', '', null, null, null);

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `detail_info` longtext,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('1', 'admin001@example.com', '123456', 'admin001', null, null, null, null, null);

-- ----------------------------
-- Table structure for _mysql_session_store
-- ----------------------------
DROP TABLE IF EXISTS `_mysql_session_store`;
CREATE TABLE `_mysql_session_store` (
  `id` varchar(255) NOT NULL,
  `expires` bigint(20) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of _mysql_session_store
-- ----------------------------
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:N34pheZRvNXUp3rF3ghdx2nzQIfMOTSz', '1496586580365', '{\"isLogin\":true,\"userName\":\"admin001\",\"userId\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:uSRw0zPsGCLkhXlI0ibXi87nPOL73t3U', '1496650614891', '{\"isLogin\":true,\"userName\":\"admin001\",\"userId\":1}');
