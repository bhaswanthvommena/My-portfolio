import pandas as pd
import json
import os

def run_etl():
    print("Loading data...")
    data_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "data", "raw", "DataCoSupplyChainDataset.csv")
    output_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "data", "supply_chain_metrics.json")
    
    # The dataset contains special characters, use latin1 encoding
    df = pd.read_csv(data_path, encoding='latin1')
    
    print("Transforming data...")
    
    # 1. High-Level KPIs
    total_revenue = float(df['Sales'].sum())
    total_orders = int(df['Order Id'].nunique())
    avg_profit_margin = float((df['Order Profit Per Order'].sum() / total_revenue) * 100) if total_revenue > 0 else 0
    late_delivery_rate = float(df['Late_delivery_risk'].mean() * 100)
    
    # Calculate Delay
    df['Shipping_Delay'] = df['Days for shipping (real)'] - df['Days for shipment (scheduled)']
    avg_shipping_delay = float(df['Shipping_Delay'].mean())
    
    # 2. Revenue by Region
    region_sales = df.groupby('Order Region')['Sales'].sum().reset_index()
    region_sales = region_sales.sort_values(by='Sales', ascending=False).head(10)
    region_sales_list = region_sales.rename(columns={'Order Region': 'name', 'Sales': 'value'}).to_dict('records')
    
    # 3. Monthly Sales Trend
    df['order_date'] = pd.to_datetime(df['order date (DateOrders)'])
    df['month_year'] = df['order_date'].dt.strftime('%Y-%m')
    monthly_sales = df.groupby('month_year')['Sales'].sum().reset_index()
    monthly_sales = monthly_sales.sort_values(by='month_year')
    monthly_sales_list = monthly_sales.rename(columns={'month_year': 'name', 'Sales': 'value'}).to_dict('records')
    
    # 4. Top Categories
    top_categories = df.groupby('Category Name')['Sales'].sum().reset_index()
    top_categories = top_categories.sort_values(by='Sales', ascending=False).head(5)
    top_categories_list = top_categories.rename(columns={'Category Name': 'name', 'Sales': 'value'}).to_dict('records')
    
    # Combine into JSON
    metrics = {
        "kpis": {
            "totalRevenue": total_revenue,
            "totalOrders": total_orders,
            "avgProfitMargin": avg_profit_margin,
            "lateDeliveryRate": late_delivery_rate,
            "avgShippingDelay": avg_shipping_delay
        },
        "revenueByRegion": region_sales_list,
        "monthlySales": monthly_sales_list,
        "topCategories": top_categories_list
    }
    
    print("Loading to JSON...")
    with open(output_path, 'w') as f:
        json.dump(metrics, f)
        
    print(f"ETL pipeline completed successfully. Output saved to {output_path}")

if __name__ == "__main__":
    run_etl()
