// 磁轴键盘价格监测页面数据加载器
class MagneticPricesLoader {
    constructor() {
        this.reportData = null;
    }
    
    async loadReportData() {
        try {
            const response = await fetch('{{ "/magnetic_switches/analysis_report.json" | relative_url }}');
            if (!response.ok) {
                throw new Error('无法加载价格分析报告');
            }
            this.reportData = await response.json();
            return true;
        } catch (error) {
            console.error('加载价格数据失败:', error);
            return false;
        }
    }
    
    updatePriceIndices() {
        if (!this.reportData) return;
        
        const weeklyIndex = document.getElementById('weekly-index');
        const weeklyChange = document.getElementById('weekly-change');
        const monthlyIndex = document.getElementById('monthly-index');
        const monthlyChange = document.getElementById('monthly-change');
        
        if (weeklyIndex && weeklyChange) {
            weeklyIndex.textContent = this.reportData.price_indices.weekly.index;
            weeklyChange.textContent = `${this.reportData.price_indices.weekly.change >= 0 ? '+' : ''}${this.reportData.price_indices.weekly.change.toFixed(2)}%`;
            weeklyChange.className = `index-change ${this.reportData.price_indices.weekly.change < 0 ? 'negative' : ''}`;
        }
        
        if (monthlyIndex && monthlyChange) {
            monthlyIndex.textContent = this.reportData.price_indices.monthly.index;
            monthlyChange.textContent = `${this.reportData.price_indices.monthly.change >= 0 ? '+' : ''}${this.reportData.price_indices.monthly.change.toFixed(2)}%`;
            monthlyChange.className = `index-change ${this.reportData.price_indices.monthly.change < 0 ? 'negative' : ''}`;
        }
    }
    
    updatePriceChanges() {
        if (!this.reportData) return;
        
        const tbody = document.getElementById('price-changes-body');
        if (!tbody) return;
        
        if (this.reportData.price_changes.length === 0) {
            tbody.innerHTML = '<tr><td colspan="9" style="text-align: center;">今日无价格异动</td></tr>';
            return;
        }
        
        tbody.innerHTML = '';
        this.reportData.price_changes.forEach(change => {
            const row = document.createElement('tr');
            
            // 状态样式
            let statusClass = 'status-down';
            if (change.status === '涨价') statusClass = 'status-up';
            if (change.status === '缺货') statusClass = 'status-out-of-stock';
            if (change.status === '首发') statusClass = 'status-launch';
            if (change.status === '持平') statusClass = '';
            
            row.innerHTML = `
                <td>${change.brand}</td>
                <td>${change.model}</td>
                <td>${change.layout}</td>
                <td>¥${change.current_price}</td>
                <td>¥${change.yesterday_price}</td>
                <td>¥${change.seven_day_low}</td>
                <td class="${change.change_percent < 0 ? 'status-down' : change.change_percent > 0 ? 'status-up' : ''}">
                    ${change.change_percent >= 0 ? '+' : ''}${change.change_percent.toFixed(1)}%
                </td>
                <td>${change.channel === 'jd' ? '京东' : change.channel === 'taobao' ? '淘宝' : change.channel}</td>
                <td class="${statusClass}">${change.status}</td>
            `;
            tbody.appendChild(row);
        });
    }
    
    updateNewLaunches() {
        if (!this.reportData) return;
        
        const list = document.getElementById('new-launches-list');
        if (!list) return;
        
        if (this.reportData.new_launches.length === 0) {
            list.innerHTML = '<li>今日无新品首发</li>';
            return;
        }
        
        list.innerHTML = '';
        this.reportData.new_launches.forEach(launch => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${launch.brand} ${launch.model}</strong> - 首发价 ¥${launch.price_list || 'N/A'} (${launch.layout})`;
            list.appendChild(li);
        });
    }
    
    updateTierDistribution() {
        if (!this.reportData) return;
        
        const container = document.getElementById('tier-distribution');
        if (!container) return;
        
        container.innerHTML = '';
        Object.entries(this.reportData.tier_distribution).forEach(([tier, percentage]) => {
            const div = document.createElement('div');
            div.className = 'tier-item';
            div.innerHTML = `
                <h4>${tier} 元</h4>
                <div class="tier-percentage">${percentage}%</div>
            `;
            container.appendChild(div);
        });
    }
    
    updateUpdateTime() {
        if (!this.reportData) return;
        
        const updateTime = document.getElementById('update-time');
        const dataSources = document.getElementById('data-sources');
        
        if (updateTime) {
            const date = new Date(this.reportData.last_updated);
            updateTime.textContent = `最后更新时间: ${date.toLocaleString('zh-CN')}`;
        }
        
        if (dataSources && this.reportData.data_sources) {
            const sources = [];
            if (this.reportData.data_sources.official > 0) sources.push('官方网站');
            if (this.reportData.data_sources.ecommerce > 0) sources.push('电商平台');
            if (this.reportData.data_sources.news > 0) sources.push('科技媒体');
            dataSources.textContent = `数据来源: ${sources.join('、')}`;
        }
    }
    
    async init() {
        const loaded = await this.loadReportData();
        if (loaded) {
            this.updatePriceIndices();
            this.updatePriceChanges();
            this.updateNewLaunches();
            this.updateTierDistribution();
            this.updateUpdateTime();
            console.log('磁轴键盘价格数据加载完成');
        } else {
            // 显示错误信息
            document.getElementById('price-changes-body').innerHTML = 
                '<tr><td colspan="9" style="text-align: center; color: red;">数据加载失败，请稍后重试</td></tr>';
        }
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    const loader = new MagneticPricesLoader();
    loader.init();
});