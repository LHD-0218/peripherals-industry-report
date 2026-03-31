#!/usr/bin/env node

/**
 * 历史数据快照脚本
 * 保存每日核心指标用于趋势分析
 */

const fs = require('fs');
const path = require('path');

const SNAPSHOTS_DIR = path.join(__dirname, '..', 'data', 'snapshots');
const DATA_DIR = path.join(__dirname, '..', 'data');

// 创建快照目录
if (!fs.existsSync(SNAPSHOTS_DIR)) {
    fs.mkdirSync(SNAPSHOTS_DIR, { recursive: true });
}

function createSnapshot() {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const snapshotFile = path.join(SNAPSHOTS_DIR, `${dateStr}.json`);
    
    // 读取当前数据
    const kpis = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'kpis.json'), 'utf8'));
    const overview = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'overview.json'), 'utf8'));
    
    const snapshot = {
        date: dateStr,
        timestamp: now.toISOString(),
        kpis: kpis.kpis,
        overview: overview.metrics
    };
    
    // 保存快照
    fs.writeFileSync(snapshotFile, JSON.stringify(snapshot, null, 2));
    console.log(`✅ 快照已保存: ${snapshotFile}`);
    
    // 清理30天前的快照（可选）
    cleanupOldSnapshots();
}

function cleanupOldSnapshots() {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const files = fs.readdirSync(SNAPSHOTS_DIR);
    files.forEach(file => {
        const datePart = file.split('.')[0];
        const fileDate = new Date(datePart);
        if (fileDate < thirtyDaysAgo) {
            fs.unlinkSync(path.join(SNAPSHOTS_DIR, file));
            console.log(`🗑️  删除旧快照: ${file}`);
        }
    });
}

function getTrendData(days = 7) {
    const snapshots = [];
    const files = fs.readdirSync(SNAPSHOTS_DIR)
        .filter(f => f.endsWith('.json'))
        .sort((a, b) => b.localeCompare(a)); // 降序排列
    
    for (let i = 0; i < Math.min(days, files.length); i++) {
        const snapshot = JSON.parse(fs.readFileSync(path.join(SNAPSHOTS_DIR, files[i]), 'utf8'));
        snapshots.push(snapshot);
    }
    
    return snapshots.reverse(); // 返回升序
}

// 导出函数供其他脚本使用
module.exports = {
    createSnapshot,
    getTrendData,
    cleanupOldSnapshots
};

// 如果直接运行此脚本
if (require.main === module) {
    createSnapshot();
}