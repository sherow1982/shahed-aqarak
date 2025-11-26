import os
import shutil
import subprocess

project_dir = os.path.abspath(os.path.dirname(__file__))

temp_dir = os.path.join(project_dir, 'arabic_files_temp')

def copy_files(src, dst):
    if not os.path.exists(dst):
        os.makedirs(dst)
    for root, dirs, files in os.walk(src):
        rel_path = os.path.relpath(root, src)
        dest_path = os.path.join(dst, rel_path)
        if not os.path.exists(dest_path):
            os.makedirs(dest_path)
        for file in files:
            shutil.copy2(os.path.join(root, file), os.path.join(dest_path, file))
            print(f'Copied {file} to {dest_path}')

def run_command(cmd, cwd):
    print(f'Running: {cmd}')
    ret = subprocess.run(cmd, shell=True, cwd=cwd)
    if ret.returncode != 0:
        raise RuntimeError(f'Command failed: {cmd}')

def main():
    # 1. نسخ ملفات عربية للمشروع
    copy_files(temp_dir, project_dir)

    # 2. تثبيت الاعتمادات
    run_command('yarn install', project_dir)

    # 3. بناء المشروع
    run_command('yarn build', project_dir)

    # 4. تشغيل المشروع
    run_command('yarn dev', project_dir)

if __name__ == '__main__':
    main()
