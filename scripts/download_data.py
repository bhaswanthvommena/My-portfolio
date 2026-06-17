import kagglehub
import shutil
import os
import glob

# Ensure target directory exists
target_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "data", "raw")
os.makedirs(target_dir, exist_ok=True)

print("Downloading dataset to kagglehub cache...")
# Download latest version
path = kagglehub.dataset_download("shashwatwork/dataco-smart-supply-chain-for-big-data-analysis")
print("Downloaded to cache:", path)

# Find the CSV files in the dataset
csv_files = glob.glob(os.path.join(path, "*.csv"))

if csv_files:
    for csv_file in csv_files:
        # We specifically want the DataCoSupplyChainDataset.csv
        dest_path = os.path.join(target_dir, os.path.basename(csv_file))
        shutil.copy2(csv_file, dest_path)
        print(f"Copied {os.path.basename(csv_file)} to {dest_path}")
else:
    print("No CSV files found in the downloaded dataset.")
