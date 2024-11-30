pannellum.viewer('pano-1', {
    "autoLoad": true,
    "autoRotate": 2,
    "compass": false,
    "showFullscreenCtrl": true,
    "default": {
        "firstScene": "parking-corridor",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "parking-corridor": {
            "title": "راهرو پارکینگ",
            "hfov": 80,
            "yaw": 190,
            "type": "equirectangular",
            "panorama": "/statics/images/pano1.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 15,
                    "type": "scene",
                    "text": "راهرو ورودی",
                    "sceneId": "input-corridor",
                }
            ]
        },

        "input-corridor": {
            "title": "راهرو ورودی",
            "hfov": 80,
            "yaw": 170,
            "type": "equirectangular",
            "panorama": "/statics/images/pano2.jpg",
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 165,
                    "type": "scene",
                    "text": "راهرو پارکینگ",
                    "sceneId": "parking-corridor",
                    "targetYaw": 15,
                    "targetPitch": 0
                },
                {
                    "pitch": 3,
                    "yaw": 356,
                    "type": "scene",
                    "text": "ورودی عمارت",
                    "sceneId": "input-house"
                }
            ]
        },
        "input-house": {
            "title": "ورودی عمارت",
            "hfov": 80,
            "yaw": 2,
            "type": "equirectangular",
            "panorama": "/statics/images/pano3.jpg",
            "hotSpots": [
                {
                    "pitch": -7,
                    "yaw": 358,
                    "type": "scene",
                    "text": "راهرو ورودی",
                    "sceneId": "input-corridor",
                    "targetYaw": 356,
                    "targetPitch": 3
                },
                {
                    "pitch": -15,
                    "yaw": 178,
                    "type": "scene",
                    "text": "سالن انتظار",
                    "sceneId": "waiting-room"
                }
            ]
        },
        "waiting-room": {
            "title": "سالن انتظار",
            "hfov": 80,
            "yaw": 175,
            "type": "equirectangular",
            "panorama": "/statics/images/pano4.jpg",
            "hotSpots": [
                {
                    "pitch": -15,
                    "yaw": 175,
                    "type": "scene",
                    "text": "ورودی عمارت",
                    "sceneId": "input-house",
                    "targetYaw": 178,
                    "targetPitch": -15
                },
                {
                    "pitch": -18,
                    "yaw": 80,
                    "type": "scene",
                    "text": "سالن اول",
                    "sceneId": "room1"
                }
            ]
        },
        "room1": {
            "title": "سالن اول",
            "hfov": 80,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "/statics/images/pano5.jpg",
            "hotSpots": [
                {
                    "pitch": -18,
                    "yaw": 350,
                    "type": "scene",
                    "text": "سالن انتظار",
                    "sceneId": "waiting-room",
                    "targetYaw": 80,
                    "targetPitch": -18
                },
                {
                    "pitch": -2,
                    "yaw": 78,
                    "type": "scene",
                    "text": "استیج - سالن اول",
                    "sceneId": "room1-stage"
                }
            ]
        },
        "room1-stage": {
            "title": "استیج - سالن اول",
            "hfov": 80,
            "yaw": 170,
            "type": "equirectangular",
            "panorama": "/statics/images/pano6.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 170,
                    "type": "scene",
                    "text": "سالن اول",
                    "sceneId": "room1",
                    "targetYaw": 78,
                    "targetPitch": -2
                }
            ]
        }
    }
})