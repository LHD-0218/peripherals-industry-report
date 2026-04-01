// 键鼠市场情报日报数据加载器
// 将Markdown格式的日报转换为结构化JSON并集成到现有网站

class KBIntelDataLoader {
    constructor() {
        this.currentDate = '';
        this.reportData = {
            date: '',
            findings: [],
            recommendations: [],
            sources: {
                official: 0,
                ecommerce: 0,
                community: 0
            },
            updateTime: ''
        };
    }
    
    // 解析Markdown日报内容为结构化数据
    parseMarkdownReport(markdownContent, date) {
        const lines = markdownContent.split('\n');
        let currentSection = '';
        const findings = [];
        const recommendations = [];
        let sources = { official: 0, ecommerce: 0, community: 0 };
        let updateTime = '';
        
        // 提取更新时间
        const timeMatch = markdownContent.match(/数据采集时间:\s*(.*?)\s*CST/);
        if (timeMatch) {
            updateTime = timeMatch[1];
        }
        
        // 提取数据来源统计
        const sourcesMatch = markdownContent.match(/数据来源:\s*(.*?)(?:\n|$)/);
        if (sourcesMatch) {
            const sourcesText = sourcesMatch[1];
            if (sourcesText.includes('官方网站')) sources.official = 1;
            if (sourcesText.includes('Amazon') || sourcesText.includes('淘宝') || sourcesText.includes('京东')) sources.ecommerce = 1;
            if (sourcesText.includes('Reddit')) sources.community = 1;
        }
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // 识别章节
            if (line.startsWith('## 📊 市场概览')) {
                currentSection = 'overview';
            } else if (line.startsWith('## 🏢 官方新品动态')) {
                currentSection = 'official';
            } else if (line.startsWith('## 🛒 电商销售榜单')) {
                currentSection = 'ecommerce';
            } else if (line.startsWith('## 💬 社区热议话题')) {
                currentSection = 'community';
            } else if (line.startsWith('## 🔮 明日关注')) {
                currentSection = 'watchlist';
            }
            
            // 处理具体内容
            if (currentSection === 'overview' && line.startsWith('- **') && !line.startsWith('##')) {
                const match = line.match(/-\s*\*\*(.*?)\*\*:\s*(.*)/);
                if (match) {
                    findings.push({
                        title: match[1],
                        description: match[2],
                        category: 'market-overview',
                        sourceType: 'analysis'
                    });
                }
            }
            
            if (currentSection === 'official' && line.startsWith('- **') && !line.startsWith('##')) {
                const match = line.match(/-\s*\*\*(.*?)\*\*:\s*(.*)/);
                if (match) {
                    findings.push({
                        title: `官方新品: ${match[1]}`,
                        description: match[2],
                        category: 'new-product',
                        sourceType: 'official'
                    });
                    sources.official++;
                }
            }
            
            if (currentSection === 'ecommerce' && line.startsWith('- **') && !line.startsWith('##')) {
                const match = line.match(/-\s*\*\*(.*?)\*\*:\s*(.*)/);
                if (match) {
                    findings.push({
                        title: `电商动态: ${match[1]}`,
                        description: match[2],
                        category: 'ecommerce',
                        sourceType: 'ecommerce'
                    });
                    sources.ecommerce++;
                }
            }
            
            if (currentSection === 'community' && line.startsWith('- **') && !line.startsWith('##')) {
                const match = line.match(/-\s*\*\*(.*?)\*\*:\s*(.*)/);
                if (match) {
                    findings.push({
                        title: `社区热点: ${match[1]}`,
                        description: match[2],
                        category: 'community',
                        sourceType: 'community'
                    });
                    sources.community++;
                }
            }
            
            if (currentSection === 'watchlist' && line.startsWith('- ')) {
                const item = line.substring(2).trim();
                recommendations.push({
                    title: '明日关注',
                    description: item
                });
            }
        }
        
        return {
            date: date,
            findings: findings,
            recommendations: recommendations,
            sources: sources,
            updateTime: updateTime
        };
    }
    
    // 加载指定日期的日报文件
    async loadReportFile(date) {
        try {
            const response = await fetch(`reports/${date}.md`);
            if (!response.ok) {
                throw new Error(`无法加载日报文件: ${date}.md`);
            }
            const markdownContent = await response.text();
            return this.parseMarkdownReport(markdownContent, date);
        } catch (error) {
            console.error('加载日报文件失败:', error);
            return null;
        }
    }
    
    // 更新页面显示
    updatePageWithReport(reportData) {
        if (!reportData) {
            console.error('无效的报告数据');
            return;
        }
        
        // 更新最后更新时间
        const updateInfo = document.querySelector('.update-info p');
        if (updateInfo) {
            updateInfo.textContent = `最后更新时间: ${reportData.date} ${reportData.updateTime}`;
        }
        
        // 更新发现内容
        const findingsGrid = document.querySelector('.findings-grid');
        if (findingsGrid && reportData.findings.length > 0) {
            findingsGrid.innerHTML = '';
            // 只显示前6条最重要的发现（避免页面过长）
            const topFindings = reportData.findings.slice(0, 6);
            topFindings.forEach(finding => {
                const card = document.createElement('div');
                card.className = 'finding-card';
                // 根据来源类型设置不同的边框颜色
                let borderColor = '#667eea';
                if (finding.sourceType === 'official') borderColor = '#4CAF50';
                if (finding.sourceType === 'ecommerce') borderColor = '#FF9800';
                if (finding.sourceType === 'community') borderColor = '#2196F3';
                
                card.style.borderLeft = `4px solid ${borderColor}`;
                card.innerHTML = `
                    <h3>${finding.title}</h3>
                    <p>${finding.description}</p>
                `;
                findingsGrid.appendChild(card);
            });
        }
        
        // 更新营销建议/关注事项
        const recommendationsList = document.querySelector('.recommendations-list');
        if (recommendationsList && reportData.recommendations.length > 0) {
            recommendationsList.innerHTML = '';
            reportData.recommendations.forEach(rec => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${rec.title}</strong>: ${rec.description}`;
                recommendationsList.appendChild(li);
            });
        }
        
        // 保存到本地存储
        localStorage.setItem('kb_intel_daily_report', JSON.stringify(reportData));
    }
    
    // 主要入口函数 - 加载最新日报
    async loadLatestReport() {
        // 尝试加载今天的日报，如果不存在则尝试昨天的
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        const datesToTry = [today, yesterday];
        
        for (const date of datesToTry) {
            const reportData = await this.loadReportFile(date);
            if (reportData) {
                this.updatePageWithReport(reportData);
                console.log(`成功加载日报: ${date}`);
                return;
            }
        }
        
        // 如果都失败了，尝试从本地存储加载
        const storedData = localStorage.getItem('kb_intel_daily_report');
        if (storedData) {
            this.updatePageWithReport(JSON.parse(storedData));
            console.log('从本地存储加载日报');
        } else {
            console.log('无法加载任何日报数据');
        }
    }
}

// 页面加载时自动加载最新日报
document.addEventListener('DOMContentLoaded', function() {
    const loader = new KBIntelDataLoader();
    loader.loadLatestReport();
});