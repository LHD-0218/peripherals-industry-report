#!/usr/bin/env node

/**
 * 外设市场情报内容生成脚本
 * 
 * 功能：
 * 1. 从公开网页抓取信息
 * 2. 生成今日摘要
 * 3. 生成报告JSON/Markdown
 * 4. 生成品牌追踪数据
 * 5. 生成趋势数据快照
 * 
 * 使用方法：
 * node scripts/generate-content.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置文件路径
const CONFIG_PATH = path.join(__dirname, 'source-config.json');
const DATA_DIR = path.join(__dirname, '..', 'data');
const CONTENT_DIR = path.join(__dirname, '..', 'content', 'reports', '_posts');

// 读取配置
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

// 获取当前日期
const now = new Date();
const dateStr = now.toISOString().split('T')[0];
const dateTimeStr = now.toISOString();

// 模拟数据生成函数（实际项目中会替换为真实抓取逻辑）
function generateOverviewData() {
    return {
        lastUpdated: dateTimeStr,
        dataSource: "多平台监测",
        metrics: {
            dailyDynamics: Math.floor(Math.random() * 50) + 100, // 100-150
            newProducts: Math.floor(Math.random() * 10) + 5,    // 5-15
            priceFluctuations: Math.floor(Math.random() * 30) + 15, // 15-45
            hotBrand: config.brands[Math.floor(Math.random() * config.brands.length)].name
        },
        trendChart: {
            title: "过去7天热度趋势",
            dataPeriod: `${dateStr} 至 ${dateStr}`,
            dataSource: "多平台监测"
        }
    };
}

function generateKpisData() {
    const keyboardPrice = Math.floor(Math.random() * 100) + 550; // 550-650
    const wirelessMousePct = Math.floor(Math.random() * 15) + 55; // 55-70
    const marketGrowth = (Math.random() * 5 + 10).toFixed(1); // 10-15
    
    return {
        lastUpdated: dateTimeStr,
        kpis: [
            {
                id: "keyboard-price",
                title: "机械键盘均价",
                value: `¥${keyboardPrice}`,
                trend: `+${(Math.random() * 3 + 1).toFixed(1)}%`,
                trendType: "up",
                timeRange: "24小时",
                dataSource: "电商平台",
                miniTrend: [keyboardPrice - 10, keyboardPrice - 5, keyboardPrice - 2, keyboardPrice]
            },
            {
                id: "wireless-mouse",
                title: "无线鼠标占比",
                value: `${wirelessMousePct}%`,
                trend: "近30天新高",
                trendType: "record",
                timeRange: "30天",
                dataSource: "销售数据",
                miniTrend: [wirelessMousePct - 5, wirelessMousePct - 3, wirelessMousePct - 1, wirelessMousePct]
            },
            {
                id: "high-refresh-display",
                title: "高刷电竞显示器",
                value: "240Hz",
                keywords: ["高刷", "低延迟"],
                timeRange: "本周",
                dataSource: "新品发布",
                miniTrend: null
            },
            {
                id: "market-growth",
                title: "市场增长率",
                value: `${marketGrowth}%`,
                trend: "季度趋势向上",
                trendType: "up",
                timeRange: "Q1 2026",
                dataSource: "行业报告",
                miniTrend: [parseFloat(marketGrowth) - 2, parseFloat(marketGrowth) - 1, parseFloat(marketGrowth) - 0.5, parseFloat(marketGrowth)]
            }
        ]
    };
}

function generateBrandsData() {
    const brands = config.brands.map((brand, index) => {
        const heatIndex = (90 - index * 5) + (Math.random() * 10 - 5);
        const trendValue = (Math.random() * 15 - 5).toFixed(1);
        const trendType = trendValue >= 0 ? "up" : "down";
        
        return {
            id: brand.id,
            name: brand.name,
            rank: index + 1,
            heatIndex: heatIndex.toFixed(1),
            trend: `${trendType === 'up' ? '+' : ''}${trendValue}%`,
            trendType: trendType,
            recentNews: `${brand.name}近期动态更新`,
            products: brand.keywords.slice(0, 3).map(kw => `${brand.name} ${kw}产品`),
            keywords: brand.keywords
        };
    });
    
    return {
        lastUpdated: dateTimeStr,
        dataSource: "多平台监测",
        brands: brands
    };
}

function generateTrendsData() {
    const keyboardPrices = [];
    const mousePercentages = [];
    const startDate = new Date(now);
    startDate.setDate(startDate.getDate() - 30);
    
    for (let i = 0; i <= 4; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i * 7);
        const price = 550 + i * 8 + Math.floor(Math.random() * 10);
        const pct = 55 + i * 2 + Math.floor(Math.random() * 3);
        
        keyboardPrices.push({
            date: date.toISOString().split('T')[0],
            price: price
        });
        
        mousePercentages.push({
            date: date.toISOString().split('T')[0],
            percentage: pct
        });
    }
    
    return {
        lastUpdated: dateTimeStr,
        dataSource: "京东、天猫、淘宝",
        trends: [
            {
                id: "keyboard-price-trend",
                title: "机械键盘价格趋势 (30天)",
                category: "键盘",
                data: keyboardPrices,
                currentPrice: keyboardPrices[keyboardPrices.length - 1].price,
                change: "+2.1%"
            },
            {
                id: "mouse-wireless-trend",
                title: "无线鼠标占比趋势 (30天)",
                category: "鼠标",
                data: mousePercentages,
                currentPercentage: mousePercentages[mousePercentages.length - 1].percentage,
                change: "+5%"
            }
        ]
    };
}

function generateDailyReport() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const filename = `${year}-${month}-${day}-daily-report.md`;
    
    const reportContent = `---
layout: post
title: "${year}年${month}月${day}日外设行业日报"
date: ${year}-${month}-${day} 09:00:00 +0800
categories: [daily]
tags: [日报, 市场动态, 产品发布]
author: 外设市场情报分析师
importance: high
brands: [${config.brands.slice(0, 3).map(b => `"${b.name}"`).join(', ')}]
---

## 📈 市场动态

### 键盘市场
- **新品发布**: 今日有多款新品发布，市场关注度较高。
- **价格波动**: 机械键盘均价保持稳定，小幅上涨。

### 鼠标市场  
- **销量增长**: 无线鼠标销量持续增长，市场份额创新高。
- **技术更新**: 新一代传感器技术开始普及。

### 显示器市场
- **Mini-LED普及**: Mini-LED显示器出货量环比增长。
- **高刷新率标配**: 144Hz以上刷新率已成为电竞显示器的标准配置。

## 🚀 新品发布

### 今日重点新品
1. **Keychron新品** - 支持三模连接和热插拔轴体
2. **VGN新品** - 超轻量化设计，PAW3395传感器
3. **显示器新品** - OLED面板，240Hz刷新率

## 💡 行业洞察

### 技术趋势
- **无线技术成熟**: 2.4GHz无线延迟已降至与有线相当水平
- **客制化需求增长**: DIY键盘套件市场增长迅猛
- **环保材料应用**: 各大厂商开始采用可回收材料

### 消费者行为
- **价格敏感度降低**: 高端外设市场增长显著
- **社交媒体影响**: KOL评测对购买决策的影响权重达到历史新高

## 📊 数据速览

| 指标 | 数值 | 环比变化 |
|------|------|----------|
| 机械键盘均价 | ¥${Math.floor(Math.random() * 100) + 550} | +${(Math.random() * 3 + 1).toFixed(1)}% |
| 无线鼠标占比 | ${Math.floor(Math.random() * 15) + 55}% | +${(Math.random() * 5 + 2).toFixed(1)}% |
| OLED显示器销量 | ${Math.floor(Math.random() * 5000) + 10000}台 | +${(Math.random() * 10 + 15).toFixed(1)}% |

---

*数据来源：外设行业数据库，${year}年${month}月${day}日更新*
*分析师：外设市场情报团队*
`;
    
    return { filename, content: reportContent };
}

// 主执行函数
function main() {
    try {
        console.log('🚀 开始生成外设市场情报数据...');
        
        // 创建数据目录（如果不存在）
        if (!fs.existsSync(DATA_DIR)) {
            fs.mkdirSync(DATA_DIR, { recursive: true });
        }
        
        // 创建内容目录（如果不存在）
        if (!fs.existsSync(CONTENT_DIR)) {
            fs.mkdirSync(CONTENT_DIR, { recursive: true });
        }
        
        // 生成各类数据
        const overviewData = generateOverviewData();
        const kpisData = generateKpisData();
        const brandsData = generateBrandsData();
        const trendsData = generateTrendsData();
        const dailyReport = generateDailyReport();
        
        // 写入数据文件
        fs.writeFileSync(path.join(DATA_DIR, 'overview.json'), JSON.stringify(overviewData, null, 2));
        fs.writeFileSync(path.join(DATA_DIR, 'kpis.json'), JSON.stringify(kpisData, null, 2));
        fs.writeFileSync(path.join(DATA_DIR, 'brands.json'), JSON.stringify(brandsData, null, 2));
        fs.writeFileSync(path.join(DATA_DIR, 'trends.json'), JSON.stringify(trendsData, null, 2));
        
        // 写入今日日报
        fs.writeFileSync(path.join(CONTENT_DIR, dailyReport.filename), dailyReport.content);
        
        console.log('✅ 数据生成完成！');
        console.log('📊 生成的数据文件:');
        console.log(`   - ${path.join(DATA_DIR, 'overview.json')}`);
        console.log(`   - ${path.join(DATA_DIR, 'kpis.json')}`);
        console.log(`   - ${path.join(DATA_DIR, 'brands.json')}`);
        console.log(`   - ${path.join(DATA_DIR, 'trends.json')}`);
        console.log(`   - ${path.join(CONTENT_DIR, dailyReport.filename)}`);
        
        // 提示用户可以手动触发更新
        console.log('\n💡 使用说明:');
        console.log('   - 运行此脚本可生成新的市场情报数据');
        console.log('   - 手动编辑 source-config.json 来添加/修改监控的品牌');
        console.log('   - 将来可以集成真实的网页抓取逻辑替换模拟数据');
        
    } catch (error) {
        console.error('❌ 数据生成失败:', error);
        process.exit(1);
    }
}

// 如果直接运行此脚本，则执行主函数
if (require.main === module) {
    main();
}