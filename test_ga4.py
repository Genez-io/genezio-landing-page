import google.auth
from google.analytics.admin_v1alpha import AnalyticsAdminServiceClient

def list_accounts():
    try:
        # Use Application Default Credentials
        credentials, project = google.auth.default(scopes=[
            'https://www.googleapis.com/auth/analytics.readonly',
            'https://www.googleapis.com/auth/cloud-platform'
        ])
        
        client = AnalyticsAdminServiceClient(credentials=credentials)
        
        print("Listing GA4 Accounts:")
        results = client.list_account_summaries()
        for summary in results:
            print(f"Account: {summary.display_name} ({summary.account})")
            for property_summary in summary.property_summaries:
                print(f"  - Property: {property_summary.display_name} ({property_summary.property})")
                
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    list_accounts()
