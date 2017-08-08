//
//  NativeUtils.swift
//  HelloWorldSwift
//
//  Created by huangyonglin on 2017/8/8.
//  Copyright © 2017年 HYL. All rights reserved.
//

import React

@objc(NativeUtils)
class NativeUtils: NSObject {
    
    // 关闭当前页面，回到原生
    @objc func goBack() -> Void {
        DispatchQueue.main.async() {
            let rootVC:UINavigationController = (UIApplication.shared.keyWindow?.rootViewController)! as! UINavigationController
            
            rootVC.popViewController(animated: true);
        }
    }

}
