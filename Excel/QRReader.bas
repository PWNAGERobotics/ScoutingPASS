Attribute VB_Name = "QRReader"

Sub Save1QR()
    saveData (getInput())
    ActiveWorkbook.Save
End Sub

Sub processHardCodedData()
    saveData ("s=fudd;e=2022carv;l=qm;m=2;r=r2;t=2451;as=[35];asg=[3,4];acc=1;acs=1;am=1;ad=e;tct=[8.3,7.3,6.7,7.1,5.5,5.8,5.4];tsg=[5,6,7,8,9,1,2];tfc=0;wf=0;wd=0;who=;lnk=1;fpu=b;dt=9.9;fs=e;dn=2;ds=v;ls=5;dr=x;sd=1;sr=5;die=0;tip=0;dc=0;all=1;co=PWNAGE")
    
    ActiveWorkbook.Save
End Sub

Sub processQRCodeInput()
    saveData (getInput())
    saveData (getInput())
    saveData (getInput())
    saveData (getInput())
    saveData (getInput())
    saveData (getInput())
    ActiveWorkbook.Save
End Sub

Sub Save1PitQR()
    savePitData (getInput())
    ActiveWorkbook.Save
End Sub

Public Function getInput()
    getInput = InputBox("Scan QR Code", "2023 Match Scouting Input")
End Function

Sub test()
    saveData ("s=fudd;e=2022carv;l=qm;m=2;r=r2;t=2451;as=[35];asg=[3,4];acc=1;acs=1;am=1;ad=e;tct=[8.3,7.3,6.7,7.1,5.5,5.8,5.4];tsg=[5,6,7,8,9,1,2];tfc=0;wf=0;wd=0;who=;lnk=1;fpu=b;dt=9.9;fs=e;dn=2;ds=v;ls=5;dr=x;sd=1;sr=5;die=0;tip=0;dc=0;all=1;co=PWNAGE")
End Sub

Sub dbm(inp As String)
    Dim r
    r = MsgBox(inp, vbDefaultButton1 + vbInformation, "Debug", "help.hlp", 1000)
End Sub

Public Function ArrayLen(arr As Variant) As Integer
    ArrayLen = UBound(arr) - LBound(arr) + 1
End Function

Sub saveData(inp As String)
    Dim fields
    Dim par
    Dim value
    Dim key
    Dim table As ListObject
    Dim ws As Worksheet
    Set ws = ActiveSheet
    Dim mapper
    Set mapper = CreateObject("Scripting.Dictionary")
    Dim data
    Set data = CreateObject("Scripting.Dictionary")
    Dim tableName As String
    tableName = "ScoutingData"

    ' Set up map
    ' Fields for every year
    mapper.add "s", "scouter"
    mapper.add "e", "eventCode"
    mapper.add "l", "matchLevel"
    mapper.add "m", "matchNumber"
    mapper.add "r", "robot"
    mapper.add "t", "teamNumber"

    ' 2023 Fields
    ' Auto
    mapper.add "as", "autoStartingLocation"
    mapper.add "asg", "autoScoredGrid"
    mapper.add "acc", "autoCrossedCable"
    mapper.add "acs", "autoCrossedChargingStation"
    mapper.add "am", "autoMobility"
    mapper.add "ad", "autoDocked"
    
    ' Teleop
    mapper.add "tct", "cycleTimes"
    mapper.add "tsg", "scoredGrid"
    mapper.add "tfc", "feedCount"
    mapper.add "wf", "wasFed"
    mapper.add "wd", "wasDefended"
    mapper.add "who", "whoDefended"
    mapper.add "lnk", "smartLinks"
    mapper.add "fpu", "floorPickUp"
    mapper.add "dt", "dockingTime"
    mapper.add "fs", "finalState"
    mapper.add "dn", "numOfRobotsDocked"
    
    'Endgame
    mapper.add "ds", "driverSkill"
    mapper.add "ls", "linksScored"
    mapper.add "dr", "defenseRating"
    mapper.add "sd", "swerveDrive"
    mapper.add "sr", "speedRating"
    mapper.add "die", "diedOrTipped"
    mapper.add "tip", "tippy"
    mapper.add "dc", "droppedCones"
    mapper.add "all", "goodPartner"
    mapper.add "co", "comments"

    If inp = "Camera" Then
        Exit Sub
    End If

    If inp = "" Then
        Exit Sub
    End If

    'MsgBox (inp)
    
    fields = Split(inp, ";")
    If ArrayLen(fields) > 0 Then
        Dim i As Integer
        Dim str

        i = 0

        For Each str In fields
            par = Split(str, "=")
            key = par(0)
            value = par(1)
            If mapper.Exists(key) Then
                key = mapper(key)
            End If
            data.add key, value
        Next

        tableexists = False
        
        Dim tbl As ListObject
        Dim sht As Worksheet

        'Loop through each sheet and table in the workbook
        For Each sht In ThisWorkbook.Worksheets
            For Each tbl In sht.ListObjects
                If tbl.name = tableName Then
                    tableexists = True
                    Set table = tbl
                    Set ws = sht
                End If
            Next tbl
        Next sht

        If tableexists Then
            'Set table = ws.ListObjects(tableName)
        Else
            Dim tablerange As Range
            ws.ListObjects.add(xlSrcRange, Range("A1:CZ1"), , xlYes).name = tableName
            i = 0
            Set table = ws.ListObjects(tableName)
            For Each key In data.Keys
                table.Range(i + 1) = key
                i = i + 1
            Next
        End If

        Dim newrow As ListRow
    
        Set newrow = table.ListRows.add
        
        For Each str In data.Keys
            ' Specific data manipulation
            If str = "autoStartingLocation" Then
                data(str) = stripShootingLocation(data(str))
            End If

            newrow.Range(table.ListColumns(str).Index) = data(str)
        Next
    End If
End Sub

Sub savePitData(inp As String)
    Dim fields
    Dim par
    Dim value
    Dim key
    Dim table As ListObject
    Dim ws As Worksheet
    Set ws = ActiveSheet
    Dim mapper
    Set mapper = CreateObject("Scripting.Dictionary")
    Dim data
    Set data = CreateObject("Scripting.Dictionary")
    Dim tableName As String
    tableName = "PitData"

    ' Set up map
    mapper.add "t", "teamNumber"
    mapper.add "wid", "width"
    mapper.add "wei", "weight"
    mapper.add "drv", "drivetrain"
    mapper.add "odt", "otherDrivetrain"
    mapper.add "sr", "swerveRatio"
    mapper.add "mot", "drivetrainMotor"
    mapper.add "nob", "numberOfBatteries"
    mapper.add "fco", "floorPickUpCones"
    mapper.add "fcu", "floorPickUpCubes"
    mapper.add "ccs", "crossCS"
    mapper.add "aut", "autos"
    
    If inp = "Camera" Then
        Exit Sub
    End If

    If inp = "" Then
        Exit Sub
    End If

    ' MsgBox (inp)
    
    fields = Split(inp, ";")
    If ArrayLen(fields) > 0 Then
        Dim i As Integer
        Dim str

        i = 0

        For Each str In fields
            par = Split(str, "=")
            key = par(0)
            value = par(1)
            If mapper.Exists(key) Then
                key = mapper(key)
            End If
            data.add key, value
        Next

        tableexists = False
        
        Dim tbl As ListObject
        Dim sht As Worksheet

        'Loop through each sheet and table in the workbook
        For Each sht In ThisWorkbook.Worksheets
            For Each tbl In sht.ListObjects
                If tbl.name = tableName Then
                    tableexists = True
                    Set table = tbl
                    Set ws = sht
                End If
            Next tbl
        Next sht
        
        If tableexists Then
            ' Set table = ws.ListObjects(tableName)
        Else
            Dim tablerange As Range
            ws.ListObjects.add(xlSrcRange, Range("A1:CZ1"), , xlYes).name = tableName
            i = 0
            Set table = ws.ListObjects(tableName)
            For Each key In data.Keys
                table.Range(i + 1) = key
                i = i + 1
            Next
        End If

        Dim newrow As ListRow
        
        Set newrow = table.ListRows.add
                
        For Each str In data.Keys
            newrow.Range(table.ListColumns(str).Index) = data(str)
        Next
    End If
End Sub


Public Function stripShootingLocation(str As Variant)
    If str <> "" Then
        stripShootingLocation = Mid(str, 2, Len(str) - 2)
    Else
        stripShootingLocation = ""
    End If
End Function

Private Function countGrid(ByRef myCell As Range, ByVal countType As Integer) As Integer
    Dim myArrStr As String
    Dim myArr() As String
    
    Dim highNumArr() As String
    highNumArr = Split("1,2,3,4,5,6,7,8,9", ",")

    Dim medNumArr() As String
    medNumArr = Split("10,11,12,13,14,15,16,17,18", ",")
    
    Dim lowNumArr() As String
    lowNumArr = Split("19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36", ",")
    
    Dim coneNumArr() As String
    coneNumArr = Split("1,3,4,6,7,9,10,12,13,15,16,18,19,20,21,22,23,24,25,26,27", ",")
    
    Dim cubeNumArr() As String
    cubeNumArr = Split("2,5,8,11,14,17,28,29,30,31,32,33,34,35,36", ",")
    
    Dim totalGamePieces As Integer
    Dim highGamePieces As Integer
    Dim medGamePieces As Integer
    Dim lowGamePieces As Integer
    Dim coneCount As Integer
    Dim cubeCount As Integer
    
    totalGamePieces = 0
    highGamePieces = 0
    medGamePieces = 0
    lowGamePieces = 0
    coneCount = 0
    cubeCount = 0

    If (myCell.Cells.count > 1) Then
        MsgBox ("Pass in only 1 Cell")
        countGrid = -1
        Exit Function
    End If
        
    If Mid(myCell, 1, 1) = "[" And Mid(myCell, Len(myCell), 1) = "]" Then
        myArrStr = Mid(myCell, 2, Len(myCell) - 2)
    Else
        MsgBox ("Cell not formatted correctly")
        countGrid = -1
        Exit Function
    End If

    myArr = Split(myArrStr, ",")
    
    Dim item As Variant
    For Each item In myArr
        
        totalGamePieces = totalGamePieces + 1
        If Not IsError(Application.match(item, highNumArr, 0)) Then
            highGamePieces = highGamePieces + 1
        End If
        If Not IsError(Application.match(item, medNumArr, 0)) Then
            medGamePieces = medGamePieces + 1
        End If
        If Not IsError(Application.match(item, lowNumArr, 0)) Then
            lowGamePieces = lowGamePieces + 1
        End If
        If Not IsError(Application.match(item, coneNumArr, 0)) Then
            coneCount = coneCount + 1
        End If
        If Not IsError(Application.match(item, cubeNumArr, 0)) Then
            cubeCount = cubeCount + 1
        End If
        
    Next item
    
    If countType = 1 Then
        ' Total game pieces
        countGrid = totalGamePieces
    ElseIf countType = 2 Then
        ' High game pieces
        countGrid = highGamePieces
    ElseIf countType = 3 Then
        ' Med game pieces
        countGrid = medGamePieces
    ElseIf countType = 4 Then
        ' Low game pieces
        countGrid = lowGamePieces
    ElseIf countType = 5 Then
        ' Cones
        countGrid = coneCount
    ElseIf countType = 6 Then
        ' Cubes
        countGrid = cubeCount
    Else
        ' Unsupported countType
        MsgBox ("Unrecognized countType")
        countGrid = -1
    End If

End Function

Private Function getTotalCount(ByRef myCell As Range) As Integer
    getTotalCount = countGrid(myCell, 1)
End Function

Private Function getHighCount(ByRef myCell As Range) As Integer
    getHighCount = countGrid(myCell, 2)
End Function

Private Function getMedCount(ByRef myCell As Range) As Integer
    getMedCount = countGrid(myCell, 3)
End Function

Private Function getLowCount(ByRef myCell As Range) As Integer
    getLowCount = countGrid(myCell, 4)
End Function

Private Function getConeCount(ByRef myCell As Range) As Integer
    getConeCount = countGrid(myCell, 5)
End Function

Private Function getCubeCount(ByRef myCell As Range) As Integer
    getCubeCount = countGrid(myCell, 6)
End Function

Private Function getAvgCycleTime(ByRef myCell As Range) As Double
    Dim myArrStr As String
    Dim myArr() As String
    
    If (myCell.Cells.count > 1) Then
        MsgBox ("Pass in only 1 Cell")
        getAvgCycleTime = -1
        Exit Function
    End If
        
    If Mid(myCell, 1, 1) = "[" And Mid(myCell, Len(myCell), 1) = "]" Then
        myArrStr = Mid(myCell, 2, Len(myCell) - 2)
    Else
        MsgBox ("Cell not formatted correctly")
        getAvgCycleTime = -1
        Exit Function
    End If

    myArr = Split(myArrStr, ",")
    
    Dim total As Double
    Dim count As Integer
    
    total = 0
    count = 0
    
    Dim item As Variant
    For Each item In myArr
        
        Dim numStr As String
        Dim num As Double

        num = WorksheetFunction.Sum(0 & item)
        total = total + num
        count = count + 1
    Next item
    
    If count = 0 Then
        getAvgCycleTime = 0
    Else
        getAvgCycleTime = total / count
    End If
    
End Function
